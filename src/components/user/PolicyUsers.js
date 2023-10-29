import { useState } from "react";
function PolicyUsers({ data, deletPolicy, fetchPolicy,userPolicyId,fetchUserPolicyId }) {
  const [reqAmmount, setReqAmmount] = useState("");

  
  function claimHandler(Id) {
   console.log("policyData",data);
   console.log("userPolicyData",userPolicyId);
    const userPolicyIds=userPolicyId.filter((data)=>data.id===Id);
    const userPolicyIdObj=userPolicyIds[0];
   console.log("userPolicyDataModified",userPolicyIdObj);
   

    if (Number(reqAmmount) > 0) {
      //   console.log(reqAmmount);
      const amt = Number(reqAmmount);
      fetch("http://localhost:8080/Policies/" + Id, {
        method: "PUT",
        body: JSON.stringify({
          ...data,
          reqAmmount: amt
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          // console.log(data);

          alert("Request to claimed successful");
          fetchPolicy();
        });
    } else if (Number(reqAmmount) < 1) {
      alert("At least amount should be 1");
    } else {
      alert("Please Write Amount");
    }


    fetch("http://localhost:8080/userPolicyId/" + Id, {
        method: "PUT",
        body: JSON.stringify({
            ...userPolicyIdObj,
          status:"claim"
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then((response) => response.json())
      .then((result) => {
        console.log(data);
           fetchUserPolicyId();
       
      });
  }
  return (
    <>
      <tr>
        <th>P{data.pId}</th>
        <th>{data.name}</th>
        <th>{data.policyName}</th>
        <th>{data.amount}</th>
        <th>{data.maxLimit}</th>
        <th>
          <input
            type="text"
            value={reqAmmount}
            onChange={(e) => {
              setReqAmmount(e.target.value);
            }}
          ></input>
        </th>
        <th className="d-felx justify-content-around">
          <button
            type="button"
            class="btn btn-outline-primary mr-3"
            onClick={(e) => {
              claimHandler(data.id);
            }}
          >
            Claim
          </button>

          <button
            type="button"
            class="btn btn-danger"
            onClick={(e) => {
              deletPolicy(data.pId);
            }}
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
}

export default PolicyUsers;
