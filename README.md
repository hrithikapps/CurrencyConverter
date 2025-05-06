# Loan Calculator Application Documentation

## 1. Project Overview
The Loan Calculator is a React-based web application designed to help users calculate monthly loan payments (EMI) and view a detailed amortization schedule. It also supports real-time currency conversion to help users view their EMIs and loan breakdown in their preferred currency.

## 2. Features Implemented

### a. EMI Calculation
**Why this feature?**
Users need an easy way to understand their monthly liabilities before taking out a loan. This feature provides accurate monthly installment values.

- Inputs: Loan amount, interest rate, and term.
- Uses standard EMI formula to compute monthly payments.

### b. Amortization Schedule
**Why this feature?**
It gives users a transparent breakdown of each month's principal and interest contribution.

- Shows monthly principal and interest.
- Shows the remaining balance over time.

### c. Currency Conversion
**Why this feature?**
Many users compare loan payments across currencies, especially for international financial planning.

- Fetches live exchange rates using ExchangeRate API.
- Displays EMI in both USD and the selected currency.

### d. Responsive UI
**Why this feature?**
Modern users access tools on phones, tablets, and desktops. Responsiveness ensures usability across all screen sizes.

- Built with Material UI’s responsive grid and layout tools.
- Layout adjusts automatically on smaller screens.

### e. Reset Button
**Why this feature?**
Improves user experience by allowing a fresh calculation without manual refresh.

- Clears data and resets the input state.

## 3. Technology Stack

- **React.js**: Frontend framework.
- **Material UI (MUI)**: UI component library.
- **Axios**: (through custom hook) for API requests.
- **ExchangeRate API**: For fetching currency rates.

## 4. Folder Structure (Relevant Parts)

```
src/
├── components/
│   └── LoanResults.jsx     # EMI and schedule display
├── hooks/
│   └── useFetch.js         # Custom hook for data fetching
```

## 5. Custom Hook: useFetch

**Purpose**: Encapsulates API fetching logic for reuse and separation of concerns.

**Benefits**:
- Cleaner components.
- Standardizes error and loading handling.
- Promotes DRY code.

**Implementation Highlights**:
- Takes in a URL.
- Returns `data`, `loading`, and `error` states.

## 6. Error Handling

**Why this feature?**
Robust error handling improves reliability and user trust.

- API errors (network failures, bad responses) are caught in `useFetch`.
- UI can conditionally render error messages based on the state returned from the hook.

## 7. Performance Optimization

**Why this feature?**
Performance ensures a smooth user experience and efficient calculations.

- `useMemo` used for amortization schedule to avoid recalculations.
- Only recalculates schedule when dependencies change.

## 8. UX Considerations

- Intuitive form layout and clear button labels.
- Conditional rendering of converted EMI only when relevant.
- Currency selector uses symbols for better readability.

## 9. Summary
This Loan Calculator is built with modern React patterns and strong UI/UX considerations. It simplifies complex financial calculations, making it accessible and understandable for everyday users, with support for multiple currencies and a focus on responsiveness and performance.
