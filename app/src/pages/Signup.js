import React, { useEffect, useState } from 'react'
import {
  Flex,
  FormLabel,
  Spacer,
  Box,
  Image,
  Input,
  Checkbox,
  Button,
  Text,
} from "@chakra-ui/react";
import styles from "../pages/Signup.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../redux/Auth/action';
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [username, setUsername] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [checkBox, setCheckBox] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignup = (e) =>{
      e.preventDefault();
      const payload ={
        email,
        username,
        password2,
        password
      }
      if(password.length < 8){
        alert("Password must be at least 8 characters long")
        return;
      }
      dispatch(RegisterUser(payload))
      .then((r)=>{
        console.log(r);
           navigate("/login")
      })
      .catch((e)=>{
        alert(e.message)
      })
       if (checkBox) {
         localStorage.setItem("rememberedEmail", email);
         localStorage.setItem("rememberedUsername", username);
         localStorage.setItem("rememberedPassword", password);
         localStorage.setItem("rememberedPassword2", password2);
       } else {
         localStorage.removeItem("rememberedEmail");
         localStorage.removeItem("rememberedPassword");
         localStorage.removeItem("rememberedUsername");
         localStorage.removeItem("rememberedPassword2");
       }
    }
     useEffect(() => {
       // Check if "Remember Me" is checked and retrieve stored credentials
       const storedEmail = localStorage.getItem("rememberedEmail");
       const storedUsername = localStorage.getItem("rememberedUsername")
       const storedPassword = localStorage.getItem("rememberedPassword");

       if (storedEmail && storedPassword && storedUsername) {
         setEmail(storedEmail);
         setPassword(storedPassword);
         setUsername(storedUsername);
         setCheckBox(true);
       }
     }, []);
  return (
    <div className={styles.signup}>
      <Flex className={styles.box}>
        <Box className={styles.left}>
          <h5>Welcome Back ! </h5>
          <p>Register to JSL India.</p>
        </Box>
        <Spacer />
        <Box className={styles.right}>
          <Image
            className={styles.image}
            src="https://skote-v-light.react.themesbrand.com/static/media/profile-img.43b59e598ba15abe6eab.png"
            alt=""
          />
        </Box>
      </Flex>
      <form onSubmit={handleSignup}>
        <Box className={styles.credential}>
          <Box className={styles.input}>
            <FormLabel>Email</FormLabel>
            <Input
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(""); // Clear Email error when user types
              }}
            />
            {EmailError && <Text color="red">{EmailError}</Text>}
          </Box>
          <Box className={styles.input}>
            <FormLabel>UserName</FormLabel>
            <Input
              value={username}
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
                setPasswordError(""); // Clear Password error when user types
              }}
              type="text"
            />
            {PasswordError && <Text color="red">{PasswordError}</Text>}
          </Box>
          <Box className={styles.input}>
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(""); // Clear Password error when user types
              }}
              type="Password"
            />
            {PasswordError && <Text color="red">{PasswordError}</Text>}
          </Box>
          <Box className={styles.input}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              value={password2}
              placeholder="Confirm Password"
              onChange={(e) => {
                setPassword2(e.target.value);
                setPasswordError(""); // Clear Password error when user types
              }}
              type="password"
            />
            {PasswordError && <Text color="red">{PasswordError}</Text>}
          </Box>
        </Box>
        <Box className={styles.Checkbox}>
          <Checkbox
            checked={checkBox}
            onChange={(e) => setCheckBox(e.target.checked)}
          >
            Remember Me
          </Checkbox>
        </Box>
        <Box className={styles.signupbutton}>
          <Button type="submit">Register</Button>
        </Box>
      </form>
      <Box className={styles.account}>
        <Text className={styles.text}>
          If you have an account? then{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Login now
          </Link>
        </Text>
      </Box>
      <Box>
        <Text>© 2024 JSL India.</Text>
      </Box>
    </div>
  );
}

export default Signup
