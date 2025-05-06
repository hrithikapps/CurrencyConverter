import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import LoanResults from "../components/LoanResults";

const Home = () => {
  const [amount, setAmount] = useState(100000);
  const [interest, setInterest] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => setShowResults(true);
  const handleReset = () => setShowResults(false);

  return (
    <Box p={2}>
      <Typography variant="h5" align="left" gutterBottom>
        Loan Calculator Dashboard
      </Typography>

      <Box
        component={Paper}
        p={2}
        mb={2}
        sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}
      >
        <TextField
          label="Loan Amount"
          variant="outlined"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <TextField
          label="Interest Rate (%)"
          variant="outlined"
          type="number"
          value={interest}
          onChange={(e) => setInterest(Number(e.target.value))}
        />
        <TextField
          label="Term (Years)"
          variant="outlined"
          type="number"
          value={term}
          onChange={(e) => setTerm(Number(e.target.value))}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" onClick={handleCalculate}>
          Calculate
        </Button>
      </Box>

      {showResults && (
        <LoanResults
          amount={amount}
          interest={interest}
          term={term}
          onReset={handleReset}
        />
      )}
    </Box>
  );
};

export default Home;
