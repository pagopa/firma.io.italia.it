import React from 'react';
import { Box, Container } from '@mui/material';

interface TerminiProps {
  content?: string
}

const Termini = (_props: TerminiProps) => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }} component="section">
      <Container>
        <h4>I termini e le condizioni</h4>
        <ul>
          <li><a href="https://io.italia.it/app-content/tos_privacy.html" target="_blank" rel="noopener">https://io.italia.it/app-content/tos_privacy.html</a></li>
          <li><a href="https://docs.namirialtsp.com/documents/Mod_NAM_CA01D_ITA_50.pdf" target="_blank" rel="noopener">https://docs.namirialtsp.com/documents/Mod_NAM_CA01D_ITA_50.pdf</a></li>
          <li><a href="https://docs.namirialtsp.com/documents/Mod_NAM_GDPR03D_ITA_50.pdf" target="_blank" rel="noopener">https://docs.namirialtsp.com/documents/Mod_NAM_GDPR03D_ITA_50.pdf</a></li>
        </ul>
        <p><em>Data di ultima modifica: 14 giugno 2023</em></p>
      </Container>
    </Box >)
};

export default Termini;