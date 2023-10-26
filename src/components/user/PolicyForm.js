import React from "react";
import PolicyUsers from "./PolicyUsers";

const PolicyForm = ({
  handleSubmit,
  onSubmitHandler,
  register,
  user,
  policy,
  deletPolicy,
  errors,
  fetchPolicy,
}) => {
  return (
    <>
      <form
        className="form container border border-dark p-4 bg-light card mt-5"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="form-control-sm">
          <span class="badge bg-secondary">Policy No: {}</span> <br></br>
          <label htmlFor="firstName">First Name</label>
          <select className="form-control" name="userId" {...register("pId")}>
            {user.map((data) => {
              return <option value={data.id}>{data.name}</option>;
            })}
          </select>
        </div>

        <div className="form-control-sm">
          <label htmlFor="policyName">Policy Name</label>
          <select
            className="form-control"
            id="policyName"
            {...register("policyName")}
          >
            <option value="Jeevan Chaya">Jeevan Chaya</option>
            <option value="Jeevan Jyoti">Jeevan Jyoti</option>
            <option value="Jeevan Gaurav">Jeevan Gaurav</option>
            <option value="Jeevan Vidya">Jeevan Vidya</option>
          </select>
        </div>

        <div className="form-control-sm">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            placeholder="Enter the amount"
            {...register("amount", { required: true })}
          />
          {errors.amount?.type === "required" && (
            <p style={{ color: "red" }}>Amount is required.</p>
          )}
        </div>

        <div className="form-control-sm">
          <label htmlFor="claimLimit">Max Limit of Claim</label>
          <input
            type="text"
            className="form-control"
            id="claimLimit"
            placeholder="Enter the maximum claim limit"
            {...register("maxLimit", { required: true })}
          />
          {errors.amount?.type === "required" && (
            <p style={{ color: "red" }}>Limit is required.</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>

      <div className="container m-5 ">
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
            {policy
              .filter((data) => !data.hasOwnProperty("reqAmmount"))
              .map((data) => {
                return (
                  <PolicyUsers
                    key={data.id}
                    fetchPolicy={fetchPolicy}
                    data={data}
                    deletPolicy={deletPolicy}
                  ></PolicyUsers>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PolicyForm;
