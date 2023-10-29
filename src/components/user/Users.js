import React from 'react';
import { useState, useEffect } from 'react';
// import Header from './Header';
import UsersTable from './UsersTable';

const Users = ({ user1, setUser }) => {
    
    const [userName, setUserName] = useState('');
    const [isEditId, setIsEditId] = useState();
    const [editName, setEditName] = useState('');


    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
             await fetch('http://localhost:8080/users')
                .then((res) => {
                    res.json().then((data) => {
                        setUser(data);
                        console.log("Level1", data);
                    })

                })
            // const data = await res.json();
            // setUser(data);
            // console.log("Level1", data);
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

    function saveHandler() {
        fetch('http://localhost:8080/Users/' + isEditId, {
            method: 'PUT',
            body: JSON.stringify({
                name: editName,
                uId: isEditId
            }),
            headers: {
                'Content-type': 'application/json',
            },
        }).then((response) => response.json()).then((result) => {
            alert("Record updated")
            fetchUsers();
            setIsEditId(null);
            setEditName(null);
        })

    }

    function editRecord(uId, name) {
        setIsEditId(uId);
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
        <UsersTable
            user1={user1}
            isEditId={isEditId}
            editName={editName}
            setEditName={setEditName}
            saveHandler={saveHandler}
            editRecord={editRecord}
            deleteRecord={deleteRecord}
            userName={userName}
            setUserName={setUserName}
            addUserHandler={addUserHandler}
        />
    )
}

export default Users