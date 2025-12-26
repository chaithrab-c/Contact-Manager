import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Card1 from '../commonui/Card1'
import api from '../axiosinstance'

function ContactList() {
    const [users, setUsers] = useState([])
    let getData = async () => {
        const res = await api.get("/contacts");
        setUsers(res.data);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                    <h2>Contact List</h2>
                    <NavLink to="/AddContact" className="btn btn-primary"> <i className="fa fa-plus-circle me-2" /> Add New</NavLink>
                </div>
                <form className='text-center mb-4 '>
                    <input type="text" name="" id="" placeholder='Search Name' className='me-2' />
                    <input type="submit" name="" id="" value='Search' />
                </form>
                <p className='mb-1'> The Contact List Manager is a user-friendly web application designed to help users efficiently store, manage, and organize their contacts. It allows users to add new contacts, view detailed contact information, edit existing records, and delete contacts when no longer needed. With a clean interface and easy navigation, the application simplifies contact management by keeping all essential details such as name, phone number, email, address, and department in one place. This project demonstrates the use of modern web technologies to perform CRUD operations and provides a smooth and responsive user experience.</p>

                <div className="row g-3">
                    {users.map((user) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={user.id}>
                            <Card1 user={user} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ContactList