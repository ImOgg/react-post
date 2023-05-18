import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const [test1, settest1] = useState('');
  const [test2, settest2] = useState('');
  const changtest1 = (e) => {
    settest1(e.target.value);
  }
  const changtest2 = (e) => {
    settest2(e.target.value);
  }
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch('https://hex-escape-room.herokuapp.com/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: test1,
        password: test2
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("太水了哥")
        navigate("/")
      })
      .catch(error => {
        console.error(error);
      });
    // fetch('https://hex-escape-room.herokuapp.com/api/user/signin', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: test1,
    //     password: test2
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  return (
    <div style={{ minHeight: '100vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
      <form action="" style={{ width: '600px', height: 'auto', border: '1px solid #000', display: 'flex', flexDirection: 'column', padding: '40px 80px' }}>
        <h2 style={{ textAlign: 'center' }}>這是一個註冊表單</h2>
        <input type="text" placeholder='test1' value={test1} onChange={changtest1} style={{ marginBottom: '40px' }} />
        <input type="text" placeholder='test2' value={test2} onChange={changtest2} style={{ marginBottom: '40px' }} />
        <button onClick={handleSubmit}>送出</button>
      </form>
      <form action="" style={{ width: '600px', height: 'auto', border: '1px solid #000', display: 'flex', flexDirection: 'column', padding: '40px 80px' }}>
        <h2 style={{ textAlign: 'center' }}>這是一個登入表單</h2>
        <input type="text" placeholder='test1' value={test1} onChange={changtest1} style={{ marginBottom: '40px' }} />
        <input type="text" placeholder='test2' value={test2} onChange={changtest2} style={{ marginBottom: '40px' }} />
        <button onClick={handleSubmit}>送出</button>
      </form>
    </div>
  )
}

export default Form