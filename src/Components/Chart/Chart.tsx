import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import classNames from "classnames";

interface IChartProps {
  className?: string;
  data: { day: string; amount: number }[];
}

const Chart = ({ className, data }: IChartProps) => {
  const highestAmountData = data.reduce((prev, current) => {
    return prev.amount > current.amount ? prev : current;
  });

  return (
    <Box className={classNames(styles["container"], className)}>
      {data.map(({ day, amount }, index) => (
        <ChartBar
          key={index}
          day={day}
          percent={amount / highestAmountData.amount}
          highlight={day === highestAmountData.day}
          amount={amount}
        />
      ))}
    </Box>
  );
};

const ChartBar = ({
  amount,
  day,
  percent,
  highlight,
}: {
  amount: number;
  day: string;
  percent: number;
  highlight?: boolean;
}) => (
  <Box className={styles["chart-bar"]}>
    <Box className={styles["bar-container"]}>
      <Box
        className={classNames(styles["bar"], {
          [styles["bar-highlight"]]: highlight,
        })}
        sx={{ height: `${percent * 100}%` }}
      >
        <Box className={styles["bar-popup"]}>
          <Typography className={styles["amount"]}>${amount}</Typography>
        </Box>
      </Box>
    </Box>
    <Typography className={styles["text"]}>{day}</Typography>
  </Box>
);

export default Chart;
