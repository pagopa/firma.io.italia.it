import React from 'react';
import { Box, Container } from '@mui/material';

interface TerminiProps {
  content?: string
}

const Termini = (props: TerminiProps) => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }} component="section">
      <Container>
        <h4>I termini e le condizioni</h4>
        <p><em>Data di ultima modifica: 12 giugno 2023</em></p>
      </Container>
    </Box >)
};

export default Termini;