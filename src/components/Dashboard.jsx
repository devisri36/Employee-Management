function Dashboard({ employees }) {

  const totalEmployees = employees.length

  const activeEmployees =
    employees.filter(emp => emp.status === 'Active').length

  const inactiveEmployees =
    employees.filter(emp => emp.status === 'Inactive').length

  const totalSalary =
    employees.reduce((total, emp) =>
      total + Number(emp.salary), 0)

  return (

    <div className="dashboard-container">

      <div className="card">
        <h3>Total Employees</h3>
        <p>{totalEmployees}</p>
      </div>

      <div className="card">
        <h3>Active Employees</h3>
        <p>{activeEmployees}</p>
      </div>

      <div className="card">
        <h3>Inactive Employees</h3>
        <p>{inactiveEmployees}</p>
      </div>

      <div className="card">
        <h3>Total Salary</h3>
        <p>₹{totalSalary.toLocaleString()}</p>
      </div>

    </div>
  )
}

export default Dashboard