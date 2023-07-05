import React from 'react'
import './ManageUser.css'

function ManageUser() {
  return (
    <div className='manage-container'>
      <div className="manage-wrap">
        <div className="manage-title">
          <h1 className="manage-title-name">Registered Users</h1>
        </div>

        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>1</td>
            <td>jalol</td>
            <td>Immomadinov</td>
            <td>some@gmail.com</td>
            <td>12.12.12</td>
            <td>+9989456123</td>
            <td>admin</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ManageUser
