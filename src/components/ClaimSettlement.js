import React from "react";
// const newArr = [];
const ClaimSettlement = ({ userPolicyId, policy, fetchUserPolicyId }) => {
  //getting filter data depending on status
  let claimStatusId = userPolicyId.filter(
    (data) => data.hasOwnProperty("status") && data.status === "claim"
  );

  let approveStatusId = userPolicyId.filter(
    (data) => data.hasOwnProperty("status") && data.status === "approve"
  );

  let rejectStatusId = userPolicyId.filter(
    (data) => data.hasOwnProperty("status") && data.status === "reject"
  );

  // getting ids in array
  let policyPid = claimStatusId.map((data) => {
    return data.pId;
  });

  let approvePid = approveStatusId.map((data) => {
    return data.pId;
  });

  let rejectPid = rejectStatusId.map((data) => {
    return data.pId;
  });

  //all status claim
  let statusClaim = policyPid.flatMap((ids) => {
    return policy.filter((item) => item.pId === ids);
  });

  let statusApprove = approvePid.flatMap((ids) => {
    return policy.filter((item) => item.pId === ids);
  });

  let statusReject = rejectPid.flatMap((ids) => {
    return policy.filter((item) => item.pId === ids);
  });

  function handleApprove(pId) {
    console.log("Policy", policy);
    console.log("UserPolicyId", userPolicyId);
    console.log("claimStatusId", claimStatusId);
    console.log("policyPid", policyPid);
    console.log("StatusClaim", statusClaim);

    fetch("http://localhost:8080/userPolicyId?pId=" + pId)
      .then((res) => res.json())
      .then((data) => {
        let id = data[0].id;
        console.log("data", data);
        let prevData = data[0];
        fetch("http://localhost:8080/userPolicyId/" + id, {
          method: "PUT",
          body: JSON.stringify({
            ...prevData,
            status: "approve",
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            fetchUserPolicyId();
          });
      });
  }

  function handleReject(pId) {
    fetch("http://localhost:8080/userPolicyId?pId=" + pId)
      .then((res) => res.json())
      .then((data) => {
        let id = data[0].id;
        console.log("data", data);
        let prevData = data[0];
        fetch("http://localhost:8080/userPolicyId/" + id, {
          method: "PUT",
          body: JSON.stringify({
            ...prevData,
            status: "reject",
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            fetchUserPolicyId();
          });
      });
  }

  return (
    <div className="container m-5">
      <table className="table table-striped table-dark table-bordered">
        <thead className="table-dark ">
          <tr>
            <span class="badge bg-secondary">Claim Requests</span>
          </tr>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Policy</th>
            <th>Premium</th>
            <th>Max Limit</th>
            <th>Req Ammount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {statusClaim.map((data) => {
            return (
              <tr>
                <td>p{data.pId}</td>
                <td>{data.name}</td>
                <td>{data.policyName}</td>

                <td>{data.amount}</td>
                <td>{data.maxLimit}</td>
                <td>{data.reqAmmount}</td>
                <td>
                  <button
                    className="btn btn-outline-success ml-4 mr-2"
                    onClick={(e) => {
                      handleApprove(data.pId);
                    }}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) => {
                      handleReject(data.pId);
                    }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="table table-bordered mt-5">
        <thead className="table-success">
          <tr>
            <span class="badge bg-success">Approve Policy</span>
          </tr>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {statusApprove.map((item) => {
            return (
              <tr>
                <td>p{item.pId}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="table table-bordered table-striped mt-5">
        <thead className="table thead-dark">
          <tr>
            <span class="badge bg-danger">Rejected Policy</span>
          </tr>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {statusReject.map((item) => {
            return (
              <tr>
                <td>p{item.pId}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimSettlement;
