import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import { Box } from '@mui/material';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  multiplyByAmount,
} from '@/features/counter/counterSlice';
import styles from './Counter.module.css';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        mt: 3,
        boxShadow: 3,
        borderRadius: 5,
        backgroundColor: 'grey.100',
      }}
    >
      <div className={styles.row}>
        <Button
          variant="contained"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {count}
        </Typography>
        <Button
          variant="contained"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className={styles.row2}>
        <Input
          type="number"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Even
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(multiplyByAmount(incrementValue))}
        >
          Multiply Amount
        </Button>
      </div>
    </Box>
  );
}

export default Counter;
