import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import useFetch from "../hooks/useFetch";

const currencySymbols = {
  USD: "$",
  EUR: "€",
  INR: "₹",
  GBP: "£",
  JPY: "¥",
  AUD: "A$",
  CAD: "C$",
};

const LoanResults = ({ amount, interest, term, onReset }) => {
  const [currency, setCurrency] = useState("USD");
  const [convertedRate, setConvertedRate] = useState(1);
  const [convertedEMI, setConvertedEMI] = useState(null);
const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

  const r = interest / 12 / 100;
  const n = term * 12;
  const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  // fetch rates with dynamic base currency
  const { data } = useFetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`
  );

  useEffect(() => {
    if (data && data.conversion_rates && data.conversion_rates["USD"]) {
      // get USD rate relative to selected
      const rateToUSD = data.conversion_rates["USD"];
      setConvertedRate(1 / rateToUSD);
      setConvertedEMI(emi / rateToUSD);
    }
  }, [currency, data, emi]);

  const handleCurrencyChange = (e) => setCurrency(e.target.value);

  const schedule = useMemo(() => {
    if (!emi || convertedRate == null) return [];
    const rows = [];
    let balance = amount;
    for (let i = 1; i <= n; i++) {
      const interestPayment = balance * r;
      const principalPayment = emi - interestPayment;
      balance -= principalPayment;
      rows.push({
        month: i,
        principal: principalPayment * convertedRate,
        interest: interestPayment * convertedRate,
        balance: Math.max(balance * convertedRate, 0),
      });
    }
    return rows;
  }, [amount, r, n, emi, convertedRate]);

  return (
    <Box mt={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Amortization Schedule ({currency})</Typography>
        <Button variant="outlined" onClick={onReset}>
          Reset
        </Button>
      </Box>

      <Box mb={2} display="flex" alignItems="center" gap={2}>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel>Currency</InputLabel>
          <Select
            value={currency}
            onChange={handleCurrencyChange}
            label="Currency"
          >
            {Object.keys(currencySymbols).map((cur) => (
              <MenuItem key={cur} value={cur}>
                {cur}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Typography variant="subtitle1" mb={1}>
        Monthly EMI: {currencySymbols["USD"]} {emi.toFixed(2)}
      </Typography>
      {currency !== "USD" && convertedEMI != null && (
        <Typography variant="subtitle1" mb={2}>
          Converted EMI: {convertedEMI.toFixed(2)} {currency}
        </Typography>
      )}

      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Principal</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Remaining Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell>
                  {row.principal.toFixed(2)} {currency}
                </TableCell>
                <TableCell>
                  {row.interest.toFixed(2)} {currency}
                </TableCell>
                <TableCell>
                  {row.balance.toFixed(2)} {currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LoanResults;
