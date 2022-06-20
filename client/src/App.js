import Main from "./view/Main";
import Login from "./view/Login";
import ItemPreview from "./view/ItemPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItem from "./view/AddItem";
import { Context } from "./context/context";
import { useAuth } from "./hook/hook";

function App() {
  const { token, logout, login, userId } = useAuth();
  const isAuthenticated = !!token;
  return (
    <BrowserRouter>
      <Context.Provider
        value={{ token, logout, login, isAuthenticated, userId }}
      >
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/itempreview/id=:id" element={<ItemPreview />} />
          <Route path="/addnewitem" element={<AddItem />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
