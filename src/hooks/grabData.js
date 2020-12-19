import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

const GrabData = (endpoint) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`${API_URL}/${endpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [endpoint]);
  return data;
};

export default GrabData;
