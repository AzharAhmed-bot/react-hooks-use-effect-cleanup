import React, { useState } from "react";

import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);
function handleClick(){
  setShowClock(!showClock)
}
  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={handleClick}>Toggle Clock</button>
    </div>
  );
}

export default App;
