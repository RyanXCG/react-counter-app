import React from "react";
import "./CounterRow.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useStateValue } from "./StateProvider";

function CounterRow({ count, id }) {
  const [{ counters }, dispatch] = useStateValue();
  const onPlusClicked = () => {
    dispatch({
      type: "PLUS",
      payload: {
        id,
      },
    });
  };

  const onMinusClicked = () => {
    dispatch({
      type: "MINUS",
      payload: {
        id,
      },
    });
  };

  const onDeleteClicked = () => {
    dispatch({
      type: "DELETE",
      payload: {
        id,
      },
    });
  };

  return (
    <div className="counterRow">
      <div className="counter__container">
        {count === 0 ? (
          <div className="zero">Zero</div>
        ) : (
          <div className="nonzero">{count}</div>
        )}
      </div>
      <button className="counter__button plus" onClick={onPlusClicked}>
        <AddCircleIcon fontSize="small" />
      </button>
      <button
        className="counter__button minus"
        onClick={onMinusClicked}
        disabled={!count}
      >
        <RemoveCircleIcon fontSize="small" />
      </button>
      <button className="counter__button delete" onClick={onDeleteClicked}>
        <DeleteForeverIcon fontSize="small" />
      </button>
    </div>
  );
}

export default CounterRow;
