function EmployeeTable({employees, deleteEmployee, editEmployee}) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              <td>₹{Number(employee.salary).toLocaleString()}</td>
              <td>{employee.status}</td>

            <td>

            <button
                className="edit-btn"
                onClick={() => editEmployee(employee)}
            >
                Edit
            </button>

            <button
                className="delete-btn"
                onClick={() => deleteEmployee(employee.id)}
            >
                Delete
            </button>

            </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable