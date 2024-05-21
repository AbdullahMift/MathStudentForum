import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import TopNav from "./Components/TopNav/TopNav";
import SideNav from "./Components/SideNav/SideNav";
import Ballina from "./Pages/Ballina";
import VitiPare from "./Pages/Viti1";
import VitiDyte from "./Pages/Viti2";
import VitiTrete from "./Pages/Viti3";
import VitiKatert from "./Pages/Viti4";
import AddMathTasks from "./Pages/AddMathTasks";
import DetyraDetails from "./Pages/DetyraDetailsPage";

function App() {
  const [menuIsActive, SetMenuIsActive] = useState(true);
  const [isActive, SetIsActive] = useState("ballina");
  const [VitetIsActive, SetVitetIsActive] = useState(false);

  const [detyrat, setDetyrat] = useState([]);

  const fetchAllMathTasks = useCallback(async () => {
    try {
      const response = await fetch(
        "https://mathstudentforum-default-rtdb.firebaseio.com/detyrat.json"
      );
      const data = await response.json();
      console.log("data:", data);

      let newMathTasks = [];

      for (let key in data) {
        newMathTasks.push({ ...data[key], id: key });
      }

      setDetyrat(newMathTasks);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    console.log("ttttttt");
    fetchAllMathTasks();
  }, []);

  return (
    <>
      <BrowserRouter>
        <TopNav menuState={menuIsActive} menuSetState={SetMenuIsActive} />
        <Routes>
          <Route
            path="/"
            element={
              <Ballina
                VitetIsActive={VitetIsActive}
                SetVitetIsActive={SetVitetIsActive}
                sidebarIsActive={menuIsActive}
                setSidebarIsActive={SetMenuIsActive}
                isActive={isActive}
                SetIsActive={SetIsActive}
              />
            }
          />
          <Route
            path="/viti1"
            element={
              <VitiPare
                detyrat={detyrat}
                VitetIsActive={VitetIsActive}
                SetVitetIsActive={SetVitetIsActive}
                sidebarIsActive={menuIsActive}
                setSidebarIsActive={SetMenuIsActive}
                isActive={isActive}
                SetIsActive={SetIsActive}
              />
            }
          />
          <Route
            path="/viti2"
            element={
              <VitiDyte
                detyrat={detyrat}
                VitetIsActive={VitetIsActive}
                SetVitetIsActive={SetVitetIsActive}
                sidebarIsActive={menuIsActive}
                setSidebarIsActive={SetMenuIsActive}
                isActive={isActive}
                SetIsActive={SetIsActive}
              />
            }
          />
          <Route
            path="/viti3"
            element={
              <VitiTrete
                detyrat={detyrat}
                VitetIsActive={VitetIsActive}
                SetVitetIsActive={SetVitetIsActive}
                sidebarIsActive={menuIsActive}
                setSidebarIsActive={SetMenuIsActive}
                isActive={isActive}
                SetIsActive={SetIsActive}
              />
            }
          />
          <Route
            path="/viti4"
            element={
              <VitiKatert
                detyrat={detyrat}
                VitetIsActive={VitetIsActive}
                SetVitetIsActive={SetVitetIsActive}
                sidebarIsActive={menuIsActive}
                setSidebarIsActive={SetMenuIsActive}
                isActive={isActive}
                SetIsActive={SetIsActive}
              />
            }
          />
          <Route path="/shtodetyr" element={<AddMathTasks />} />
          <Route path="/:viti/:id" element={<DetyraDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
