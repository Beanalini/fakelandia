import React from "react";
import { createContext, useContext } from "react";
import { Misdemeanour } from "../../../types/misdemeanours.types";
import useMisdemeanoursData from "./useMisdemeanoursData";

type MisdemeanoursContextProps = {
  misdemeanours: Misdemeanour[];
};

const MisdemeanoursContext = createContext<
  MisdemeanoursContextProps | undefined
>(undefined);

const MisdemeanoursProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const misdemeanours = useMisdemeanoursData();

  return (
    <MisdemeanoursContext.Provider value={{ misdemeanours }}>
      {children}
    </MisdemeanoursContext.Provider>
  );
};

const useMisdemeanours = (): MisdemeanoursContextProps => {
  const context = useContext(MisdemeanoursContext);

  if (!context) {
    throw new Error("useMisdemeanours inside MisdemeanoursProvider");
  }

  return context;
};

export { MisdemeanoursProvider, useMisdemeanours, MisdemeanoursContext };
