import { useRef, useState } from "react";

export default function Clicks() {
  const sumClicks = useRef(0);
  const [total, setTotal] = useState(null);

  function showTotalClicks() {
    setTotal(sumClicks.current); 
  }

  return (
    <>
      <button onClick={() => sumClicks.current += 1}>+1</button>
      <button onClick={showTotalClicks}>Show Total Clicks</button>
      {total !== null && <p> Total Clicks is: {total}</p>}
    </>
  );
}
