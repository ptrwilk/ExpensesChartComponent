import { Box, Divider, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Logo from "../../assets/logo.svg";
import Chart from "../Chart/Chart";
import data from "../../data.json";

const ExpensesChart = () => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["balance"]}>
        <Typography className={styles["title"]}>
          My balance
          <span className={styles["amount"]}>$921.48</span>
        </Typography>
        <img src={Logo} />
      </Box>
      <Box className={styles["chart-section"]}>
        <Typography className={styles["title"]} variant="h1">
          Spending - Last 7 days
        </Typography>
        <Chart className={styles["chart"]} data={data} />
        <Divider />
        <Box className={styles["total"]}>
          <Box className={styles["this-month"]}>
            <Typography className={styles["title"]}>
              Total this month
              <span className={styles["amount"]}>$478.33</span>
            </Typography>
          </Box>
          <Box className={styles["last-month"]}>
            <Typography className={styles["title"]}>
              from last month
              <span className={styles["amount"]}>+2.4%</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExpensesChart;
