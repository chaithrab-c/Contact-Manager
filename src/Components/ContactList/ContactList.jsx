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
            <section className='p-3'>
                <div className="col">
                    <h1 className='mb-4 text-center'> Contact List
                        <NavLink to='/AddContact' className="btn btn-primary ms-5"> <i className='fa fa-plus-circle me-2' />Add New</NavLink>  </h1>
                    <form className='text-center mb-4 '>
                        <input type="text" name="" id="" placeholder='Search Name' className='me-2' />
                        <input type="submit" name="" id="" value='Search' />
                    </form>
                    <p className='mb-1'> The Contact List Manager is a user-friendly web application designed to help users efficiently store, manage, and organize their contacts. It allows users to add new contacts, view detailed contact information, edit existing records, and delete contacts when no longer needed. With a clean interface and easy navigation, the application simplifies contact management by keeping all essential details such as name, phone number, email, address, and department in one place. This project demonstrates the use of modern web technologies to perform CRUD operations and provides a smooth and responsive user experience.</p>
                </div>
            </section>
            <section className="p-1 m-2 ms-5">
                <div >
                    <div className="d-flex flex-wrap gap-3">
                        {users.map(user => (
                            <Card1 key={user.id} user={user} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactList