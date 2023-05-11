import './register.css';
import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {db} from "../../fs/firebaseConfig";
import {
  Box,
  Button,
  TextField
} from "@mui/material";

function addUser(user, email, pword) {
  addDoc(collection(db, "users"), {
    username: user,
    emailAddress: email,
    password: pword,
    }
  ).then(r => alert("Registered"));
}

const Register = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleChangeUS = (event) => {
    setUser(event.target.value);
  };
  const handleChangeEM = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePW = (event) => {
    setPass(event.target.value);
  };

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
                id="email"
                name="email"
                onChange={handleChangeEM}
                value={email}
                label="Email"
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
                  if(user !== "" && email !== "" && pass !== "") {
                    addUser(user, email, pass);
                    window.sessionStorage.setItem("user", email);
                    navigate('/');
                  }
                  else{
                    alert("One or More Empty Entries")
                  }
              }}>
                Add New
              </Button>
            </Box>
        </Box>
        <Link to='/login' className='btn lg'>Already have an account? Log in here!</Link>
    </div>
  );
};

export default Register