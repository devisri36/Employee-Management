import { useEffect, useState } from 'react'

function AddEmployee({
  addEmployee,
  selectedEmployee,
  updateEmployee
}) {

  const [employee, setEmployee] = useState({
    name: '',
    department: '',
    role: '',
    salary: '',
    status: 'Active'
  })

  useEffect(() => {

    if (selectedEmployee) {
      setEmployee(selectedEmployee)
    }

  }, [selectedEmployee])

  const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (selectedEmployee) {

      updateEmployee(employee)

    } else {

      const newEmployee = {
        id: Math.floor(Math.random() * 10000),
        ...employee
      }

      addEmployee(newEmployee)
    }

    setEmployee({
      name: '',
      department: '',
      role: '',
      salary: '',
      status: 'Active'
    })
  }

  return (
    <div className="form-container">

      <h2>
        {selectedEmployee ? 'Edit Employee' : 'Add Employee'}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={employee.role}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={employee.status}
          onChange={handleChange}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">

          {selectedEmployee ? 'Update Employee' : 'Add Employee'}

        </button>

      </form>

    </div>
  )
}

export default AddEmployee