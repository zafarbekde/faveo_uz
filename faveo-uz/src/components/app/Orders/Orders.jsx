import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../ManageUser/Modal/Modal';
import './Orders.css';

function Orders() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching users.</div>;
  }

  return (
    <div className="orders-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Sidebar</h2>
        <a href="#" className="sidebar-link">Link 1</a>
        <a href="#" className="sidebar-link">Link 2</a>
        <a href="#" className="sidebar-link">Link 3</a>
      </div>

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

                    <td>
                      <button className='show-modal-btn' onClick={() => setShowModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.46967 0.21967C5.76256 -0.0732233 6.23744 -0.0732233 6.53033 0.21967L11.7803 5.46967C12.0732 5.76256 12.0732 6.23744 11.7803 6.53033L6.53033 11.7803C6.23744 12.0732 5.76256 12.0732 5.46967 11.7803C5.17678 11.4874 5.17678 11.0126 5.46967 10.7197L9.43934 6.75H0.75C0.335786 6.75 0 6.41421 0 6C0 5.58579 0.335786 5.25 0.75 5.25H9.43934L5.46967 1.28033C5.17678 0.987437 5.17678 0.512563 5.46967 0.21967Z" fill="#7E7E7E" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && createPortal(<Modal close={() => setShowModal(false)} />, document.getElementById("modal-root"))}
    </div>
  );
}

export default Orders;
