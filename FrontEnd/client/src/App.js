import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllFactures from "./Pages/AllFactures";
import { Menu } from "semantic-ui-react";
import CreateFacture from "./Pages/CreateFacture";
import UpdateFacture from "./Pages/UpdateFacture";
const App = () => {

  const [activeItem, setActiveItem] = useState();
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <BrowserRouter>
      <Menu>
        <Link to={"/AllFactures"}>
          <Menu.Item
          as={'div'}

            name="AllFactures"
            active={activeItem === "AllFactures"}
            onClick={handleItemClick}
          >
            View All Factures
          </Menu.Item>
        </Link>

        <Link to={"/CreateFacture"}>
          <Menu.Item
          as={'div'}
            name="CreateFacture"
            active={activeItem === "CreateFacture"}
            onClick={handleItemClick}
          >
            Create New Facture
          </Menu.Item>
        </Link>

      </Menu>
      <Routes>
        <Route path="/AllFactures" element={<AllFactures />}></Route>
        <Route path="/CreateFacture" element={<CreateFacture />}></Route>
        <Route path="/UpdateFacture/:id" element={<UpdateFacture />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
