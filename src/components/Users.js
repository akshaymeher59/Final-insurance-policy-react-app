import React from 'react';
import { useState, useEffect } from 'react';
// import Header from './Header';

const Users = ({ user1, setUser }) => {
    const [userName, setUserName] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editName, setEditName] = useState('');


    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const res = await fetch('http://localhost:8080/users');
            const data = await res.json();
            setUser(data);
            console.log("Level1", data);
        } catch {
            alert("API Failed to fetch Data.")
            setUser([{},]);
        }

    }

    function addUserHandler() {
        if (userName) {
            let id;
            setUser(
                (prevData) => {
                    id = prevData.length + 1;
                    return [...prevData, {
                        uId: id,
                        name: userName
                    }]
                }
            )
            setUserName('');
            fetch('http://localhost:8080/Users/', {
                method: 'POST',
                body: JSON.stringify({
                    uId: id,
                    name: userName
                }),
                headers: {
                    'Content-type': 'application/json',
                },
            }).then((response) => response.json()).then((result) => {
                alert("Record inserted")
                fetchUsers();
            })
        }
    }

    function editRecord(uId, name){
            setEditName(name);
    }


    function deleteRecord(uId) {

        // console.log("User Id OF Delete", uId);

        fetch("http://localhost:8080/Users/" + uId, { method: 'DELETE' })
            .then((response) => response.json())
            .then((result) => {
                alert("Record deleted")
                fetchUsers();
            })
    }

    return (
        <div className='container table-responsive'>

            <table className='table table-bordered mt-5 container table-sm table-striped'>
                <thead className='table-dark'>
                    <tr><span class="badge bg-success">Users</span></tr>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        user1.map((data) => {
                            return <tr>
                                <td>u{data.uId}</td>
                                <td>
                                    {data.name}
                                    {isEdit && (
                                     <span>
                                            <input type='text' value={editName} onChange={(e)=>{setEditName(e.target.value)}}></input>
                                            <button className='btn'>Save</button>
                                     </span>   
                                    
                                    )}
                                </td>
                                <td className='d-flex  justify-content-around'>
                                    {/* <button className='btn btn-warning' onClick={(e) => { editRecord(data.uId, data.name) }} >Edit</button> */}
                                    <button className='btn btn-danger' onClick={(e) => { deleteRecord(data.uId) }} >Delete</button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
            <div className='container row d-flex  mb-2'>
                <input type='text' placeholder='add user' value={userName} onChange={(e) => {
                    setUserName(e.target.value);
                }} className='form-control col-sm-4' />

                <button onClick={addUserHandler} className='btn btn-success col-sm-1 ml-2'>Add</button>
            </div>

        </div>

    )
}

export default Users