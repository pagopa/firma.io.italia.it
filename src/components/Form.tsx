import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControl,
	Grid,
	Stack,
	TextField,
	TextFieldProps,
	Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { FormEvent } from 'react';
import { useForm } from 'react-cool-form';
import solidDarkBackground from '../../static/hero-solid-dark.jpg';

const endpoint =
	'https://api.io.italia.it/api/payportal/v1/newsletters/io/lists/6/recipients';

type TextFieldEvent = FormEvent<HTMLDivElement> & {
	target: HTMLInputElement;
};

export const NewsletterInput = (
	props: TextFieldProps & { validityMessage: string }
) => (
	<TextField
		variant="outlined"
		size="small"
		type="text"
		required
		onInvalid={(e: TextFieldEvent) => {
			e.target?.setCustomValidity(props.validityMessage);
		}}
		onInput={(e: TextFieldEvent) => e.target?.setCustomValidity('')}
		sx={{
			backgroundColor: 'white',
		}}
		{...props}
	/>
);

type NewsletterSignup = {
	user: string;
	email: string;
	ente: string;
	newsletter: boolean;
};

export const Form = ({
	title,
	notice,
}: {
	title: string;
	notice: { newsletter: string; privacy: string };
}) => {
	const submit = async (data: NewsletterSignup) => {
		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			response.status === 200;
		} catch (e) {
		} finally {
			reset();
		}
	};

	const { form, use, reset } = useForm<NewsletterSignup>({
		defaultValues: { user: '', email: '', ente: '', newsletter: undefined },
		onSubmit: submit,
	});
	const errors = use('errors');

	return (
		<Box
			component="section"
			bgcolor="primary.main"
			sx={{
				backgroundImage: `url(${solidDarkBackground})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<Container maxWidth="sm">
				<Grid container justifyContent="center">
					<Grid item xs={10}>
						<form ref={form} onSubmit={(e) => e.preventDefault()}>
							<Typography
								variant="h3"
								color="primary.contrastText"
								pt={8}
								mb={4}
								textAlign="center"
							>
								{title}
							</Typography>
							<Stack spacing={2} mb={4}>
								<NewsletterInput
									error={!!errors.user}
									name="user"
									placeholder="Nome e Cognome"
									validityMessage="Questo campo è obbligatorio"
								/>
								<NewsletterInput
									error={!!errors.email}
									name="email"
									placeholder="Indirizzo e-mail"
									type="email"
									validityMessage="La mail non è valida"
								/>
								<NewsletterInput
									error={!!errors.ente}
									name="ente"
									placeholder="Nome ente"
									validityMessage="Questo campo è obbligatorio"
								/>
							</Stack>
							<Grid container mb={1}>
								<Grid item xs={11}>
									<Typography variant="caption" color="primary.contrastText">
										{notice.newsletter}
									</Typography>
								</Grid>
								<Grid item xs={1}>
									<FormControl component="fieldset">
										<Checkbox
											name="newsletter"
											sx={{
												color: 'primary.contrastText',
												'&.Mui-checked': {
													color: 'primary.contrastText',
												},
											}}
										/>
									</FormControl>
								</Grid>
							</Grid>
							<Divider />
							<Stack spacing={4} pt={4} pb={8}>
								<Stack direction="row" justifyContent="center">
									<Button variant="contained" color="negative" type="submit">
										Invia Richiesta
									</Button>
								</Stack>
								<Typography
									variant="caption-semibold"
									color="primary.contrastText"
									textAlign="center"
								>
									{notice.privacy}
								</Typography>
							</Stack>
						</form>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
