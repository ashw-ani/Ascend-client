import React, { createContext, useContext, useState } from "react";

const PanelContext = createContext();

export const PanelContextProvider = ({ children }) => {
  const [showPaneltouch, setShowPanel] = useState(false); // your state variable
  const [isVisible, setIsVisible] = useState(false);

  const updateShowPaneltouch = (newValue) => {
    setShowPanel(newValue);
  };

  const toggleVisibility = (newVal) => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <PanelContext.Provider
      value={{
        showPaneltouch,
        updateShowPaneltouch,
        isVisible,
        toggleVisibility,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(PanelContext);
};
