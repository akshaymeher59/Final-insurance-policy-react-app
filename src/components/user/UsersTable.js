import React from 'react'

const UsersTable = ({ user1, isEditId, editName, setEditName, saveHandler, editRecord, deleteRecord, userName, setUserName, addUserHandler }) => {
    
    return (
        <div className='container table-responsive'>

            <div className='container row d-flex  mb-2 mt-5'>
                <input type='text' placeholder='add user' value={userName} onChange={(e) => {
                    setUserName(e.target.value);
                }} className='form-control col-sm-4' />

                <button onClick={addUserHandler} className='btn btn-success col-sm-1 ml-2'>Add</button>
            </div>

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
                                    {data.uId === isEditId && (
                                        <span>
                                            <input type='text' value={editName} onChange={(e) => { setEditName(e.target.value) }} className='mr-2 ml-2'></input>
                                            <button className='btn btn-success btn-sm'
                                                onClick={saveHandler}
                                            >Save</button>
                                        </span>

                                    )}
                                </td>
                                <td className='d-flex  justify-content-around'>
                                    <button className='btn btn-warning' onClick={(e) => { editRecord(data.uId, data.name) }} >Edit</button>
                                    <button className='btn btn-danger' onClick={(e) => { deleteRecord(data.uId) }} >Delete</button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>


        </div>
    )
}

export default UsersTable