import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import ExpensesChart from "./Components/ExpensesChart/ExpensesChart";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 18,
    },
    fontFamily: "DM Sans",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <ExpensesChart />
      </div>
    </ThemeProvider>
  );
}

export default App;
