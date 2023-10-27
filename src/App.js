import Header from "./components/Header";
import ClaimSettlement from "./components/ClaimSettlement";
import ClaimApply from "./components/ClaimApply";
import Policy from "./components/user/Policy";
import Users from "./components/user/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  

  const [user, setUser] = useState([]);
  const [policy, setPolicy] = useState([]);
  const [userPolicyId, setUserPolicyId] = useState([]);
  
  useEffect(()=>{
    fetchPolicy();
    fetchUserPolicyId();
  },[])

  async function fetchPolicy() {
    try {
      const res = await fetch("http://localhost:8080/Policies");
      const data = await res.json();
      console.log(data);

      setPolicy(data);
    } catch {
      alert("API Failed to fetch Data.");
      setPolicy([{}]);
    }
  }

  
  function fetchUserPolicyId() {
    fetch("http://localhost:8080/userPolicyId")
      .then((res) => {
        res.json().then((data) => {
          setUserPolicyId(data);
        });
      })
      .catch(() => {
        alert("API Failed to fetch Data.");
        setUserPolicyId([{}]);
      });
    
  }

 
  


  return (
    <div className="">


      {/* <ClaimReq />
      <Form /> */}

      <BrowserRouter>
        <Routes>
          <Route index element={
            <>
              <Header />
              {<Users user1={user} setUser={setUser} />}
            </>

          }>
          </Route>
          <Route path='/' element={<Header />}>
            <Route path="user" element={
              <Users user1={user} setUser={setUser} />
            } />
            <Route path="form" element={<Policy policy={policy} setPolicy={setPolicy} userPolicyId={userPolicyId} setUserPolicyId={setUserPolicyId} user={user} setUser={setUser} />} />
            {/* <Route path="claimPolicy" element={<ClaimApply />} /> */}
            <Route path="claimSettlement"  element={<ClaimSettlement policy={policy} userPolicyId={userPolicyId}   />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
