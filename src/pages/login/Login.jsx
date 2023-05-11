import './login.css'
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {db} from "../../fs/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import {
  Box,
  Button,
  TextField
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleChangeUS = (event) => {
    setUser(event.target.value);
  };
  const handleChangePW = (event) => {
    setPass(event.target.value);
  };

  function checkUser(user, pword) {
    const docRef = doc(db, "users", user);
    const docSnap = getDoc(docRef);

    if (docSnap.name.equals(user)) {
      if (docSnap.password.equals(pword)) {
        navigate('/').then(r => alert("Logged In"));
      }
      else {
        alert("Invalid Credentials");
      }
    } else {
      alert("No User With That Name Exists");
    }
  }

  return (
        <div className='auth-form-container'>
            <Box>
                <Box>
                  <TextField
                    id="user"
                    name="user"
                    onChange={handleChangeUS}
                    value={user}
                    label="Username"
                  />
                </Box>
                <Box>
                  <TextField
                    id="pass"
                    name="pass"
                    onChange={handleChangePW}
                    value={pass}
                    label="Password"
                  />
                </Box>
                <Box>
                  <Button variant="contained"
                    onClick={() => {
                      if(user !== "" && pass !== "") {
                        checkUser(user, pass);
                      }
                      else{
                        alert("One or More Empty Entries")
                      }
                  }}>
                    Log In
                  </Button>
                </Box>
            </Box>
            <Link to='/register' className='btn lg'>Don't have an account? Sign up here!</Link>
        </div>
  )
}

export default Login