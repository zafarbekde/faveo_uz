import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './ManageUser.css';
import Modal from './Modal/Modal';


function ManageUser() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occured while fetvhing users.</div>
  }

  return (
    <>
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
                  <th>Birthday</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Action</th>
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
                    <td>{user.name}</td>
                    <button onClick={() => setShowModal(true)}><td><svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.40001 10.4247C5.40001 10.107 5.66864 9.84944 6.00001 9.84944H11.4C11.7314 9.84944 12 10.107 12 10.4247C12 10.7424 11.7314 11 11.4 11H6.00001C5.66864 11 5.40001 10.7424 5.40001 10.4247Z" fill="#7E7E7E" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6 1.15055C9.42157 1.15055 9.25044 1.21851 9.12427 1.33948L1.74179 8.41773L1.42463 9.63408L2.69326 9.32999L10.0757 2.25174C10.1382 2.19184 10.1878 2.12073 10.2216 2.04247C10.2554 1.96421 10.2728 1.88032 10.2728 1.79561C10.2728 1.7109 10.2554 1.62702 10.2216 1.54876C10.1878 1.47049 10.1382 1.39938 10.0757 1.33948C10.0133 1.27958 9.9391 1.23207 9.85747 1.19965C9.77584 1.16723 9.68835 1.15055 9.6 1.15055ZM8.27574 0.525923C8.62696 0.18918 9.10331 0 9.6 0C9.84594 0 10.0895 0.0464449 10.3167 0.136683C10.5439 0.226921 10.7504 0.359185 10.9243 0.525923C11.0982 0.692661 11.2361 0.890607 11.3302 1.10846C11.4244 1.32631 11.4728 1.55981 11.4728 1.79561C11.4728 2.03142 11.4244 2.26491 11.3302 2.48276C11.2361 2.70062 11.0982 2.89857 10.9243 3.0653L3.42427 10.2562C3.34738 10.3299 3.25103 10.3822 3.14553 10.4075L0.745533 10.9828C0.541068 11.0318 0.324777 10.9744 0.175748 10.8315C0.0267204 10.6886 -0.033189 10.4812 0.0179272 10.2852L0.617927 7.9841C0.644301 7.88294 0.698853 7.79057 0.775748 7.71684L8.27574 0.525923Z" fill="#7E7E7E" />
                    </svg></td></button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {
        showModal && createPortal(<Modal />, document.getElementById("modal-root"))
      }
    </>
  );
}


export default ManageUser;
