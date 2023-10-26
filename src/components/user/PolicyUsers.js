import { useState } from "react";
function PolicyUsers({ data, deletPolicy, fetchPolicy }) {
  const [reqAmmount, setReqAmmount] = useState("");

  function claimHandler(Id) {
    console.log("data claim", data);
    // console.log("Pid claim", pId);
    console.log("fetchPolicy Claim", fetchPolicy);

    if (Number(reqAmmount) > 0) {
      //   console.log(reqAmmount);
      const amt = Number(reqAmmount);
      fetch("http://localhost:8080/Policies/" + Id, {
        method: "PUT",
        body: JSON.stringify({
          ...data,
          reqAmmount: amt,
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
