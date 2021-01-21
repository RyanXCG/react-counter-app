import React from "react";
import CounterRow from "./CounterRow";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import RefreshIcon from "@material-ui/icons/Refresh";
import "./Home.css";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ counters }, dispatch] = useStateValue();

  const onClearClicked = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  const onResetClicked = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div className="home">
      <div className="buttons__container">
        <button
          className="clear__button"
          onClick={onClearClicked}
          disabled={!counters.length}
        >
          <AutorenewIcon />
        </button>
        <button
          className="reset__button"
          onClick={onResetClicked}
          disabled={counters.length}
        >
          <RefreshIcon />
        </button>
      </div>
      <div className="rows__container">
        {counters.map((counter, idx) => (
          <CounterRow count={counter} id={idx} />
        ))}
      </div>
    </div>
  );
}

export default Home;
