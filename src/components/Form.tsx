import {
	Box,
	Button,
	Checkbox,
	Divider,
	Grid,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import solidDarkBackground from '../assets/hero-solid-dark.jpg';

export const Form = ({
	title,
	notice,
}: {
	title: string;
	notice: { newsletter: string; privacy: string };
}) => (
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
					<form>
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
							<TextField
								placeholder="Nome e Cognome"
								variant="outlined"
								size="small"
								sx={{
									backgroundColor: 'white',
								}}
							/>
							<TextField
								placeholder="Indirizzo e-mail"
								variant="outlined"
								size="small"
								sx={{
									backgroundColor: 'white',
								}}
							/>
							<TextField
								placeholder="Nome ente"
								variant="outlined"
								size="small"
								sx={{
									backgroundColor: 'white',
								}}
							/>
						</Stack>
						<Grid container mb={1}>
							<Grid item xs={11}>
								<Typography variant="caption" color="primary.contrastText">
									{notice.newsletter}
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<Checkbox
									sx={{
										color: 'primary.contrastText',
										'&.Mui-checked': {
											color: 'primary.contrastText',
										},
									}}
								/>
							</Grid>
						</Grid>
						<Divider />
						<Stack spacing={4} pt={4} pb={8}>
							<Stack direction="row" justifyContent="center">
								<Button variant="contained" color="negative">
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
