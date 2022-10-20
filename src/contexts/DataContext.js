import { createContext } from "react";

const DataContext = createContext();

const DataProvider = DataContext.Provider;
const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };
