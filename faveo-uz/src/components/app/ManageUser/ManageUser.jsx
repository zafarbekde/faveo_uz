import React, { useEffect, useState } from 'react';
import './ManageUser.css';


function ManageUser() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchUsers  =async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json()
        setUsers(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsError(true)
        setIsLoading(false)
      };
    }

    fetchUsers()
  }, [])

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isError) {
    return <div>Error occured while fetvhing users.</div>
  }

  return (
    <div className="manage-container">
      <div className="manage-wrap">
        <div className="manage-title">
          <h1 className="manage-title-name">Registered Users</h1>
        </div>

        <div className="manage-wrap-table">
          <table className="manage-table">
            <thead>
              <tr className="manage-table-head">
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="manage-table-item">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default ManageUser;
