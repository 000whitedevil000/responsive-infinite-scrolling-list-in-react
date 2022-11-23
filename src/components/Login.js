import React from 'react';
import { useNavigate } from 'react-router';
import './styles/Login.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const Login = () => {
  let navigate = useNavigate();

  const [data, setData] = React.useState({
    username: '',
    password: '',
  });

  const [error, setError] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (data.username === '' || data.password === '') {
      setError(true);
      return;
    }
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/home');
  };

  return (

    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

            <h2 className="fw-bold mb-2 text-center">Sign in</h2>


              <div className='login-screen'>
                <div className='input-container'>
                  <MDBInput wrapperClass='mb-4 w-100' placeholder='Email address' id='formControlLg' type='email' size="lg"      
                    name='username'
                    value={data.username}
                    onChange={(e) => setData({ ...data, username: e.target.value })}
                  />
                </div>

                <div className='input-container'>
                  <MDBInput wrapperClass='mb-4 w-100' placeholder='Password' id='formControlLg' size="lg"
                    name='password'
                    type='password'
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                  />                  
                </div>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                {error && <p className="text-50 mb-3">Please enter your login and password!</p>}
                <MDBBtn size='lg' onClick={handleClick}> Login </MDBBtn>

                          
                
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
};

export default Login;
