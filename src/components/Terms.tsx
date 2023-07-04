import React from 'react';
import { Box, Container } from '@mui/material';

interface TermsProps {
  content?: string
}

const Terms = (_props: TermsProps) => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }} component="section">
      <Container>
        <h5>PagoPA</h5>
        <ul>
          <li><a href="https://io.italia.it/app-content/tos_privacy.html" target="_blank" rel="noopener">Informativa privacy e termini e condizioni</a></li>
        </ul>
        <h5>Namirial</h5>
        <ul>
          <li><a href="https://docs.namirialtsp.com/documents/Mod_NAM_CA01D_ITA_50.pdf" target="_blank" rel="noopener">Condizioni generali di contratto</a></li>
          <li><a href="https://docs.namirialtsp.com/documents/Mod_NAM_GDPR03D_ITA_50.pdf" target="_blank" rel="noopener">Informativa trattamento dati</a></li>
        </ul>
        <p><em>Data di ultima modifica: 4 luglio 2023</em></p>
      </Container>
    </Box >)
};

export default Terms;