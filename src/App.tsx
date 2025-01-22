import { useState } from 'react';
import DynamicForm from './DynamicForm';
import CompanySelection from './components/CompanySelection';
import { Container, Box, Typography } from '@mui/material';

function App() {
  const [selectedCompany, setSelectedCompany] = useState<string>('');

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="70vh"
        boxShadow={3}
        p={4}
        borderRadius={2}
        bgcolor="background.paper"
        sx={{ width: '100%', maxWidth: 400 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Dynamic Form
        </Typography>
        {!selectedCompany ? (
          <CompanySelection selectedCompany={selectedCompany} onSelectCompany={setSelectedCompany} />
        ) : (
          <DynamicForm company={selectedCompany} />
        )}
      </Box>
    </Container>
  );
}

export default App;
