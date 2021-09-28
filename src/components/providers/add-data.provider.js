import { createContext, useState } from "react";

export const AddDataContext = createContext({
  data: [],
  view: "",
  addDataToState: () => {},
  viewComponent: () => {},
});

const AddDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [view, setView] = useState("Add Data");
  const addDataToState = (data) => {
    setData(data);
  };
  const viewComponent = (view) => {
    setView(view);
  };

  return (
    <AddDataContext.Provider
      value={(data, view, addDataToState, viewComponent)}
    >
      {children}
    </AddDataContext.Provider>
  );
};

export default AddDataProvider;
