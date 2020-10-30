import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function ViewEmployee() {
  const history = useHistory();
  const { id } = useParams();
  const [employee, setEmployee] = useState([
    {
      Name: '',
      Age: '',
      Department: '',
      PhoneNo: '',
      Salary: '',
    },
  ]);

  const loadEmployee = async () => {
    const getEmployee = await axios.get(
      `https://api.raje.tech/api/v1/employee/` + id
    );
    const emp = getEmployee.data;
    setEmployee(emp.Data);
  };

  useEffect(() => {
    loadEmployee();
  }, [id]);

  const { Name, Age, Department, PhoneNo, Salary } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
    console.log(employee);
  };

  return (
    <div className="container">
      <div className="row shadow p-3 mb-5 bg-white rounded my-4">
        <div className="col">
          <h2>View Employee</h2>
          <form onSubmit={(e) => history.push('/list')}>
            <div className="form-group">
              <label for="Name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="Name"
                disabled
                onChange={(e) => onInputChange(e)}
                value={Name}
              />
            </div>
            <div className="datepicker form-group">
              <label for="PhoneNo">Phone No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone No"
                name="PhoneNo"
                disabled
                onChange={(e) => onInputChange(e)}
                value={PhoneNo}
              />
            </div>
            <div className="form-group">
              <label for="Department">Department Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Department name"
                name="Department"
                disabled
                onChange={(e) => onInputChange(e)}
                value={Department}
              />
            </div>
            <div className="form-group">
              <label for="age">Age</label>
              <input
                type="text"
                className="form-control"
                placeholder="Age"
                disabled
                name="Age"
                onChange={(e) => onInputChange(e)}
                value={Age}
              />
            </div>
            <div className="form-group">
              <label for="Salary">Salary</label>
              <input
                type="text"
                className="form-control"
                placeholder="Salary"
                disabled
                name="Salary"
                onChange={(e) => onInputChange(e)}
                value={Salary}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary btn-lg btn-block"
            >
              Back to Employee List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
