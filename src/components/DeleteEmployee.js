import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function DeleteEmployee() {
  const history = useHistory();
  const { id } = useParams();

  let axiosConfig = {
    headers: {
      'API-Client-ID': 'f290469a-5777-4eaf-91eb-d94fd3cf05ba',
      'API-Secret-Key': '4223e571-a4d6-4f68-950a-21ac284f5a5b',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const deleteEmployee = async () => {
    await axios
      .delete(`https://api.raje.tech/api/v1/employee/` + id, axiosConfig)
      .then((response) => {
        console.log(response);
        history.push('/list');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    deleteEmployee();
  }, [id]);
}

export default DeleteEmployee;
