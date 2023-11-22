import { useState } from "react";
import SidePanelContext from "./SidePanelContext";
const SidePanelState = (props) => {
  const [showPanel, setShowPanel] = useState(false);
  return (
    <SidePanelContext.Provider value={{ showPanel, setShowPanel }}>
      {props.children}
    </SidePanelContext.Provider>
  );
};
export default SidePanelState;
