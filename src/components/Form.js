
function Form() {
  return (
    <form className="form container border border-dark p-4 bg-light ">
      <div className="form-control-sm">
        <span class="badge bg-secondary">Policy No: p5</span> <br></br>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="Enter your first name"
        />
      </div>

      <div className="form-control-sm">
        <label htmlFor="policyName">Policy Name</label>
        <select className="form-control" id="policyName">
          <option value="option1">Jeevan Chaya</option>
          <option value="option2">Jeevan Jyoti</option>
          <option value="option3">Jeevan Gaurav</option>
          <option value="option4">Jeevan Vidya</option>
        </select>
      </div>

      <div className="form-control-sm">
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          className="form-control"
          id="amount"
          placeholder="Enter the amount"
        />
      </div>

      <div className="form-control-sm">
        <label htmlFor="claimLimit">Max Limit of Claim</label>
        <input
          type="text"
          className="form-control"
          id="claimLimit"
          placeholder="Enter the maximum claim limit"
        />
      </div>

      <button type="button" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
}

export default Form;
