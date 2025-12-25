import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactList from './Components/ContactList/ContactList'
import AddContact from './Components/Contacts/AddContact/AddContact';
import DeleteContact from './Components/Contacts/DeleteContact/DeleteContact';
import EditContact from './Components/Contacts/EditContact/EditContact';
import ViewContact from './Components/Contacts/ViewContact/ViewContact';
import NavBar from './Components/commonui/Navbar';


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path= '/' element={<Navigate to={'ContactList'}/>} />
        <Route path='/ContactList' element={<ContactList />} />
        <Route path='/Addcontact' element={<AddContact />} />
        <Route path='/DeleteContact/:id' element={<DeleteContact/>} />
        <Route path='/EditContact/:id' element={<EditContact/>} />
        <Route path='/ViewContact/:id' element={<ViewContact/>} />
      </Routes>
    </>
  
   

  )
}

export default App






