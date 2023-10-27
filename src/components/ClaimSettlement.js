import React from "react";

const ClaimSettlement = () => {
  return (
    <div className="container m-5">
      <table class="table ">
        <thead className="table-dark">
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
          </tr>
        </thead>
        <td>2</td>
        <td>Aksh</td>
        <td>Jeevan</td>
        <td>2</td>
        <td>2</td>
        <td>
          2<button className="btn btn-success ml-4 mr-2">Approve</button>
          <button className="btn btn-danger">Reject</button>
        </td>
        <tbody></tbody>
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
          <tr>
            <td>p1</td>
            <td>Ram</td>
          </tr>
          <tr>
            <td>p4</td>
            <td>Ramesh</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered mt-5">
        <thead className="table">
          <tr>
            <span class="badge bg-danger">Rejected Policy</span>
          </tr>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>p3</td>
            <td>Sunil</td>
          </tr>
          <tr>
            <td>p2</td>
            <td>Sham</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-striped">
        <thead className="table-dark">
          <tr>
            <span class="badge bg-info">Apply For Claim</span>
          </tr>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Policy</th>
            <th>Premium</th>
            <th>Max Limit</th>
            <th>Req Ammount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>p1</th>
            <th>Ram</th>
            <th>Jeevan Chaya</th>
            <th>500</th>
            <th>100000</th>
            <th>
              <input type="text"></input>
            </th>
            <th>
              <button type="button" class="btn btn-outline-primary">
                Claim
              </button>
            </th>
          </tr>
          <tr>
            <th>p2</th>
            <th>SHam</th>
            <th>Jeevan Chaya</th>
            <th>500</th>
            <th>100000</th>
            <th>
              <input type="text"></input>
            </th>
            <th>
              <button type="button" class="btn btn-outline-primary">
                Claim
              </button>
            </th>
          </tr>
          <tr>
            <th>p3</th>
            <th>Ram</th>
            <th>Jeevan Chaya</th>
            <th>500</th>
            <th>100000</th>
            <th>
              <input type="text"></input>
            </th>
            <th>
              <button type="button" class="btn btn-outline-primary">
                Claim
              </button>
            </th>
          </tr>
          <tr>
            <th>p4</th>
            <th>Ram</th>
            <th>Jeevan Chaya</th>
            <th>500</th>
            <th>100000</th>
            <th>
              <input type="text"></input>
            </th>
            <th>
              <button type="button" class="btn btn-outline-primary">
                Claim
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClaimSettlement;
