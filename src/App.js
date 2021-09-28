import "./App.css";
import React, { useCallback, useState } from "react";
import ButtonGroup from "./components/button-group/button-group.component";
import AddData from "./components/add-data/add-data.component";
import ViewData from "./components/view-data/view-data.component";
// import { AddDataContext } from "./components/providers/add-data.provider";
import UserComponent from "./components/users/users.component";
import PostComponent from "./components/posts/posts.component";
import Counter from "./components/counter/counter.component";

const App = () => {
  const [view, setView] = useState("Add Data");
  const [data, setData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const viewComponentMemoised = useCallback((view) => {
    setView(view);
  });

  const addDataToState = (userData) => {
    setData([...data, userData]);
  };

  // function viewComponent(view) {
  //   console.log("view method called::", view);
  //   setView(view);
  // }

  function showView() {
    switch (view) {
      case "Add Data":
        return <AddData addData={addDataToState} />;
      case "View Data":
        return <ViewData data={data} />;
      case "View Users":
        return <UserComponent />;
      case "View Posts":
        return <PostComponent />;
      default:
        return <div>Press the above button</div>;
    }
  }
  // const { view } = useContext(AddDataContext);
  return (
    <div className="App">
      <ButtonGroup viewComponent={viewComponentMemoised} />
      {showView()}
      <Counter />
    </div>
  );
};

export default App;
