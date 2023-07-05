import React from 'react'
import { useQuery } from "react-query";
import './ManageUser.css'

function ManageUser() {

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    return response.json()
  };

  const { data: users, isLoading, isError } = useQuery('users', fetchUsers)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (Error) {
    return <div>Error occured while fetching users.</div>
  }

  return (
    <div className='manage-container'>
      <div className="manage-wrap">
        <div className="manage-title">
          <h1 className="manage-title-name">Registered Users</h1>
        </div>

        <div className="manage-wrap-table">
          <table className='manage-table'>
            <tr className='manage-table-head'>
              <th>Id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Birthday</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
            {users.map((user) => (
              <tr key={user.id} className='manage-table-item'>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.birhtday}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageUser
