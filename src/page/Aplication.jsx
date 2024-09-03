import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

// import 'antd/dist/antd.css'; // Ensure Ant Design styles are loaded


const Aplication = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
      };
  return (
    <div>
      <h1>{user.name ? `Welcome, ${user.name}` : 'Welcome'}</h1>
      <p>This is the new page.</p>
      <button onClick={handleButtonClick}>Go to New Page</button>
    </div>
  );
};

export default Aplication;