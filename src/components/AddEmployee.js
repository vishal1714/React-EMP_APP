import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddEmployee() {
  const history = useHistory();
  const [employee, setEmployee] = useState([
    {
      Name: '',
      Age: '',
      Department: '',
      PhoneNo: '',
      Salary: '',
    },
  ]);

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'API-Client-ID': 'f290469a-5777-4eaf-91eb-d94fd3cf05ba',
      'API-Secret-Key': '4223e571-a4d6-4f68-950a-21ac284f5a5b',
    },
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('https://api.raje.tech/api/v1/employee/add', employee, axiosConfig)
      .then((response) => {
        history.push('/list');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const { Name, Age, Department, PhoneNo, Salary } = employee;

  return (
    <div className="container">
      <div className="row shadow p-3 mb-5 bg-white rounded my-4">
        <div className="col">
          <h2>Add Employee</h2>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <div className="form-group">
              <label for="Name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="Name"
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
                name="Salary"
                onChange={(e) => onInputChange(e)}
                value={Salary}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary btn-lg btn-block"
            >
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
