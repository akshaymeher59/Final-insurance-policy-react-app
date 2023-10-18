
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function Form({ user, setUser }) {

  const [policy, setPolicy] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    fetchPolicy();
  }, [])


  const onSubmitHandler = (data) => {
    

    console.log("Plicy Form Data");
    console.log(data);
    // console.log(policy);

    fetch('http://localhost:8080/Policies', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        name: user[data.pId - 1].name
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json()).then((result) => {
      alert("Record updated")
      fetchPolicy();
    })

    // Matser table userPolicyId

    fetch('http://localhost:8080/userPolicyId', {
      method: 'POST',
      body: JSON.stringify({
       
        uId: data.pId,
        pId: data.pId
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })


    reset();
  };


  async function fetchPolicy() {
    try {
      const res = await fetch('http://localhost:8080/Policies');
      const data = await res.json();
      setPolicy(data);

    } catch {
      alert("API Failed to fetch Data.")
      setPolicy([{},]);
    }

  }


  function deletPolicy(Id){

    fetch("http://localhost:8080/Policies/" + Id, { method: 'DELETE' })
    .then((response) => response.json())
    .then((result) => {
        alert("Record deleted")
        fetchPolicy();
    })
  }

  return (
    <>

      <form className="form container border border-dark p-4 bg-light card mt-5" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-control-sm">
          <span class="badge bg-secondary">Policy No: { }</span> <br></br>
          <label htmlFor="firstName">First Name</label>
          <select className="form-control" name="userId"
            {...register("pId")}
          >
            {
              user.map((data) => {
                return <option value={data.id} >{data.name}</option>
              })
            }


          </select>
        </div>

        <div className="form-control-sm">
          <label htmlFor="policyName">Policy Name</label>
          <select className="form-control" id="policyName" {...register('policyName')}>
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
            <p style={{ color: 'red' }}>Amount is required.</p>
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
            <p style={{ color: 'red' }}>Limit is required.</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>



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

            {
              policy.map((data) => {
                return <tr>
                  <th>P{data.pId}</th>
                  <th>{data.name}</th>
                  <th>{data.policyName}</th>
                  <th>{data.amount}</th>
                  <th>{data.maxLimit}</th>
                  <th>
                    <input type='text'></input>
                  </th>
                  <th className='d-felx justify-content-around'>
                    <button type="button" class="btn btn-outline-primary mr-3">Claim</button>
                    <button type="button" class="btn btn-danger"
                      onClick={(e)=>{ deletPolicy(data.pId) } }
                    >Delete</button>
                  </th>
                </tr>
              })
            }


          </tbody>
        </table>
      </div>
    </>
  );
}

export default Form;
