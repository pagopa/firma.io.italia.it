import {
	Box,
	Button,
	Divider,
	Grid,
	Stack,
	TextField,
	Typography,
  Alert,
  AlertColor
} from '@mui/material';
import { Container } from '@mui/system';  
import React, { useRef, useState } from 'react';
import solidLightBackground from '../../static/hero-solid-light.jpg';
import { Html } from './Html';
import RECAPTCHA from "react-google-recaptcha"

interface FormInfo {
  email: string
  /** nome */
  campo1: string
  /** cognome */
  campo2: string
  /** nome ente */
  campo3: string
};

interface IAlert {
  severity: AlertColor
  text: string
  show: boolean
}

const initialAlert: IAlert = {
  severity: 'info',
  text: '',
  show: false
};

const initialFormInfo: FormInfo = {
  email: '',
  campo1: '',
  campo2: '',
  campo3 : '' };

export const Form = ({
	title,
	privacy,
	subtitle
}: {
	title: string;
	subtitle: string;
	privacy: string;
}) => {
  const captchaRef = useRef(null);
  const [ alert, setAlert ] = useState<IAlert>(initialAlert)
  const [ formInfo, setFormInfo ] = useState<FormInfo>(initialFormInfo);

  const onChange = (e) => {
    const { name, value } = e.target; 
    setFormInfo({ ...formInfo, [name]: value })
  }

	const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setAlert(initialAlert);
      const recaptchaToken = await captchaRef.current.executeAsync();
      if (!recaptchaToken) {
        return setAlert({
          severity: 'warning',
          text: 'Conferma di non essere un bot prima di proseguire :)',
          show: true,
        })
      }
      const response = await fetch('https://news-p-weu-core-app-fn.azurewebsites.net/api/v1/newsletters/io/lists/7/recipients',
        {
          method: 'POST',
          body: JSON.stringify({  recaptchaToken, groups: ["61"], ...formInfo }),
        });
      const { email } = await response.json();
      if (response.status === 200 && email === formInfo.email) {
        return setAlert({
          severity: 'success',
          text: 'Grazie! Abbiamo preso in carica la tua richiesta. Controlla la tua casella email per continuare.',
          show: true,
        })
      }
      throw new Error()
    } catch (e) {
      console.error(e);
      setAlert({
        severity: 'error',
        text: 'Qualcosa è andato storto, non siamo riusciti a ricevere la tua richiesta. Riprova più tardi',
        show: true,
      })
    } finally {
      captchaRef.current.reset();
      // setFormInfo(initialFormInfo);
    }
  }

	return (
	<Box
		component="section"
		sx={{
			backgroundImage: `url(${solidLightBackground})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		}}
	>
		<Container maxWidth="md">
			<Grid container justifyContent="center">
				<Grid item md={8}>
					<form onSubmit={onSubmit}>
						<Typography
							variant="h3"
							pt={8}
              mb={1}
							textAlign="center"
						>
							{title}
						</Typography>
						<Typography paragraph textAlign="center">
							{subtitle}
						</Typography>
						<Stack spacing={2} mb={4}>
              <Stack direction='row' spacing={2}>
                <TextField
                  required
                  id='campo1'
                  name='campo1'
                  value={formInfo.campo1}
                  onChange={onChange}
                  placeholder="Nome"
                  variant="outlined"
                  size="small"
                  sx={{
                    backgroundColor: 'white',
                    flexGrow: 1
                  }}
                />
                <TextField
                  required
                  id='campo2'
                  name='campo2'
                  placeholder="Cognome"
                  value={formInfo.campo2}
                  onChange={onChange}
                  variant="outlined"
                  size="small"
                  sx={{
                    backgroundColor: 'white',
                    flexGrow: 1
                  }}
                />
              </Stack>
							<TextField
								id="email"
                required
                type='email'
                name='email'
                onChange={onChange}
                value={formInfo.email}
								placeholder="Indirizzo e-mail"
								variant="outlined"
								size="small"
								sx={{
									backgroundColor: 'white',
								}}
							/>
							<TextField
								id="nomeEnte"
                required
                value={formInfo.campo3}
                name='campo3'
                onChange={onChange}
								placeholder="Nome ente"
								variant="outlined"
								size="small"
								sx={{
									backgroundColor: 'white',
								}}
							/>
						</Stack>
						<Grid container mb={1}>
							<Grid item xs={12}>
								<Typography variant="caption" >
									<Html data={privacy} />
								</Typography>
							</Grid>
						</Grid>
						<Divider />
						<Stack spacing={4} pt={4} pb={8} alignItems="center">
							<Stack direction="row" justifyContent="center" >
								<Button
                  type='submit'
                  variant="contained"
                  color="primary">
									Invia Richiesta
								</Button>
							</Stack>
              {
                alert.show && (

                  <Alert severity={alert.severity} variant="outlined">{alert.text}</Alert>
                )
              }
              <RECAPTCHA
                size="invisible"
                ref={captchaRef}
                sitekey='6LcBa7AaAAAAAEb8kvsHtZ_09Ctd2l0XqceFUHTe' />
						</Stack>
					</form>
				</Grid>
			</Grid>
		</Container>
	</Box>
	)
}