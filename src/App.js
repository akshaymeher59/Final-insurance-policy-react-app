import Header from "./components/Header";
// import ClaimReq from "./components/ClaimReq";
import Form from "./components/Form";
import Users from "./components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('http://localhost:8080/users');
        const data = await res.json();
        setUser(data);
        console.log(data);
      } catch {
        alert("API Failed to fetch Data.")
        setUser([{},]);
      }

    }
    fetchUsers();
  }, []);

  return (
    <div className="">


      {/* <ClaimReq />
      <Form /> */}

      <BrowserRouter>
        <Routes>
          <Route index element={
            <>
              <Header />
              {user.length > 0 && <Users user1={user} setUser={setUser} />}
            </>

          }>
          </Route>
          <Route path='/' element={<Header />}>
            <Route path="user" element={
              user.length > 0 && <Users user1={user} setUser={setUser} />
            } />
            <Route path="form" element={ <Form/> }  />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
