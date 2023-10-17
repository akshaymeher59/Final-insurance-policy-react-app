
function Form() {
  return (
    <>
      <div className="container m-5 ">
        <table class="table table-striped">
          <thead className='table-dark'>
            <tr><span class="badge bg-info">Apply For Claim</span></tr>
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
                <input type='text'></input>
              </th>
              <th>
                <button type="button" class="btn btn-outline-primary">Claim</button>
              </th>
            </tr>
            <tr>
              <th>p2</th>
              <th>SHam</th>
              <th>Jeevan Chaya</th>
              <th>500</th>
              <th>100000</th>
              <th>
                <input type='text'></input>
              </th>
              <th>
                <button type="button" class="btn btn-outline-primary">Claim</button>
              </th>
            </tr>
            <tr>
              <th>p3</th>
              <th>Ram</th>
              <th>Jeevan Chaya</th>
              <th>500</th>
              <th>100000</th>
              <th>
                <input type='text'></input>
              </th>
              <th>
                <button type="button" class="btn btn-outline-primary">Claim</button>
              </th>
            </tr>
            <tr>
              <th>p4</th>
              <th>Ram</th>
              <th>Jeevan Chaya</th>
              <th>500</th>
              <th>100000</th>
              <th>
                <input type='text'></input>
              </th>
              <th>
                <button type="button" class="btn btn-outline-primary">Claim</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      
      <form className="form container border border-dark p-4 bg-light card mt-5">
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
    </>
  );
}

export default Form;
