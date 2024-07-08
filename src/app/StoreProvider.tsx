"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface IPropTypes {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IPropTypes> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TooltipProvider>{children}</TooltipProvider>
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
