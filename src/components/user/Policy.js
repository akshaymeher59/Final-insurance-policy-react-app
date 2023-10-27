import { useForm } from "react-hook-form";
import PolicyForm from "./PolicyForm";
import { useEffect, useState } from "react";

function Policy({ user, setUser,setPolicy,setUserPolicyId,policy,userPolicyId }) {
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchPolicy();
  }, []);

  const onSubmitHandler = (data) => {
    console.log("Plicy Form Data");
    console.log(data);
    // console.log(policy);

    fetch("http://localhost:8080/Policies", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        name: user[data.pId - 1].name,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        alert("Record updated");
        fetchPolicy();
      });

    // Matser table userPolicyId

    fetch("http://localhost:8080/userPolicyId", {
      method: "POST",
      body: JSON.stringify({
        uId: data.pId,
        pId: data.pId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // alert("Record updated")
        fetchUserPolicyId();
      });

    reset();
  };

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
    // const data = res.json();
    // console.log(data);
  }

  function deletPolicy(Id) {
    console.log("Pid", Id);
    let deleteId = Id;

    fetch("http://localhost:8080/Policies?pId=" + Id)
      .then((response) => response.json())
      .then((data) => {
        deleteId = data[0].id;
        console.log("deleteid", deleteId);
        console.log("datap", data);
        console.log("data iD", data[0].id);
        fetch("http://localhost:8080/Policies/" + deleteId, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((result) => {
            alert("Record deleted");
            fetchPolicy();
          });
      });
  }

  // function claimHandler(cId){
  //     // console.log("ReqAmt",reqAmmount);
  //     console.log("CID",cId);
  // }

  return (
    <PolicyForm
      handleSubmit={handleSubmit}
      onSubmitHandler={onSubmitHandler}
      register={register}
      user={user}
      policy={policy}
      userPolicyId={userPolicyId}
      deletPolicy={deletPolicy}
      errors={errors}
      fetchPolicy={fetchPolicy}
      fetchUserPolicyId={fetchUserPolicyId}
      // onClaimHandler ={claimHandler}
      // reqAmmount={reqAmmount}
      // setReqAmmount={setReqAmmount}
    />
  );
}

export default Policy;
