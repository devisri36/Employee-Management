import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import EmployeeTable from './components/EmployeeTable'
import SearchBar from './components/SearchBar'
import AddEmployee from './components/AddEmployee'

import employeesData from './data/employees.json'

// import { useState } from 'react'
import { useState, useEffect } from 'react'

function App() {

  const [employees, setEmployees] = useState(() => {

  const savedEmployees =
    localStorage.getItem('employees')

  return savedEmployees
    ? JSON.parse(savedEmployees)
    : employeesData
})

  const [search, setSearch] = useState('')

  const [selectedEmployee, setSelectedEmployee] = useState(null)

  const addEmployee = (newEmployee) => {

    setEmployees([...employees, newEmployee])
  }

  const deleteEmployee = (id) => {

    const updatedEmployees =
      employees.filter((employee) => employee.id !== id)

    setEmployees(updatedEmployees)
  }

  const editEmployee = (employee) => {

    setSelectedEmployee(employee)
  }

  const updateEmployee = (updatedEmployee) => {

    const updatedList = employees.map((employee) =>
      employee.id === updatedEmployee.id
        ? updatedEmployee
        : employee
    )

    setEmployees(updatedList)

    setSelectedEmployee(null)
  }

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  )
  useEffect(() => {

  localStorage.setItem(
    'employees',
    JSON.stringify(employees)
  )

}, [employees])

  return (
    <div>

      <Navbar />

      <h1>Smart Employee Management System</h1>
      <Dashboard employees={employees} />
      <AddEmployee
        addEmployee={addEmployee}
        selectedEmployee={selectedEmployee}
        updateEmployee={updateEmployee}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <EmployeeTable
        employees={filteredEmployees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
      />

    </div>
  )
}

export default App