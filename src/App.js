import Header from "./components/Header";
import ClaimReq from "./components/ClaimReq";
import Form from "./components/Form";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='form' element={<Form />} />
          <Route path='claim' element={<ClaimReq />} />
        </Routes>

      </BrowserRouter> */}
      <Header />
      <ClaimReq />
      <Form />
    </div>
  );
}

export default App;
