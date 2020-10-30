import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const allEmployee = await axios.get(
      'https://api.raje.tech/api/v1/employees'
    );
    const emps = allEmployee.data.Data;
    setEmployees(emps.reverse());
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className="container">
      <h1 align="center">Employee List</h1>
      <div className="my-4">
        <table className="table table-responsive text-center shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">EmpRefNo</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Department</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, Index) => (
              <tr key={employee.EmpRefNo}>
                <th scope="row">{Index + 1}</th>
                <td>{employee.EmpRefNo}</td>
                <td>{employee.Name}</td>
                <td>{employee.Age}</td>
                <td>{employee.Department}</td>
                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/view/${employee.EmpRefNo}`}
                  >
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </Link>
                  <Link
                    className="btn btn-info mr-2"
                    to={`/update/${employee.EmpRefNo}`}
                  >
                    <i className="fa fa-edit" aria-hidden="true" />
                  </Link>

                  <Link
                    className="btn btn-danger mr-2"
                    to={`/del/${employee.EmpRefNo}`}
                  >
                    <i className="fa fa-trash" aria-hidden="true" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
