import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import Main from "./Components/Main";
import Updateform from "./Components/Updateform";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Main />} />
          <Route path="/home/:id" element={<Main />} />
          <Route path="/Customer/:id" element={<Main />} />
          <Route path="/addCustomer" element={<Form />} />
          <Route path="/updateCustomer/:id" element={<Updateform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
