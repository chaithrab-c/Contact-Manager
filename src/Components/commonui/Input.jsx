import React from "react"

function Input({ contacts, setContacts }) {

  const handleChange = (e) => {
    const { name, value } = e.target
    setContacts({ ...contacts, [name]: value })
  }
  return (
    <form className="p-4">
      {[
        ["Name", "name"],
        ["Phone", "phone"],
        ["Email", "email"],
        ["City", "city"],
        ["State", "state"],
        ["Website", "website"],
        ["Department", "Department"]
      ].map(([label, name]) => (
        <div className="row mb-3" key={name}>
          <label className="col-2">{label}</label>
          <div className="col-4">
            <input type="text" name={name} className="form-control" value={contacts[name] || ""} onChange={handleChange} />
          </div>
        </div>
      ))}
      <div className="row mb-3 align-items-center">
        <label className="col-2">Role:</label>
        <div className="col-4">
          <select name="role" className="form-control" value={contacts.role || ""} onChange={handleChange}>
            <option value="Select Role" hidden>Select Role</option>
            <option value="Work">Work</option>
            <option value="Home">Home</option>
            <option value="Friend">Friend</option>
            <option value="Friend">Family</option>
            <option value="Friend">Business</option>
          </select>
        </div>
      </div>
    </form>
  )
}
export default Input
