import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function ButtonCounter(props) {
  const { stock } = props;
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button
        onClick={handleIncrement}
        disabled={counter === stock ? true : false}
      >
        {counter === stock ? "out of stock" : "+"}
      </Button>
      <Button disabled>{counter}</Button>
      <Button onClick={handleDecrement} disabled={counter === 0 ? true : false}>
        -
      </Button>
    </ButtonGroup>
  );
}
