import React, { useState } from 'react';
import styles from "../pages/Signup.module.css";
import { Box,Flex,Input,Button, FormLabel,Text,Checkbox,Spacer,Image} from '@chakra-ui/react';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Signup = () => {
  const [username, setUsername]= useState("");
  const [image,setImage]= useState("");
  const [password,setPassword]=useState("");
  const [usernameError,setUsernameError]=useState(false);
  const [passwordError,setPasswordError]=useState(false);
  const [checkBox,setCheckBox]=useState(false);
  const handleRegister=()=>{

  }
  return (
    <>
      <Box className={styles.home}>
        <Link to="/" className="text-dark">
          <FaHome />
        </Link>
      </Box>
      <div className={styles.signup}>
        <Flex className={styles.box}>
          <Box className={styles.left}>
            <h5>Register </h5>
            <p>Sign up In JSL India.</p>
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
        <form onSubmit={handleRegister}>
          <Box className={styles.credential}>
            <Box className={styles.input}>
              <FormLabel>username</FormLabel>
              <Input 
                value={username}
                placeholder="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError(""); // Clear email error when user types
                }}
              />
              {usernameError && <Text color="red">{usernameError}</Text>}
            </Box>
            <Box className={styles.input}>
              <FormLabel>Image</FormLabel>
              <Input
                value={image}
                type='File'
                placeholder="image"
                onChange={(e) => {
                setImage(e.target.files[0]);
                  setUsernameError(""); // Clear email error when user types
                }}
              />
              {usernameError && <Text color="red">{usernameError}</Text>}
            </Box>
            <Box className={styles.input}>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(""); // Clear password error when user types
                }}
                type="password"
              />
              {passwordError && <Text color="red">{passwordError}</Text>}
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
            <Button type="submit">Sign up</Button>
          </Box>
        </form>
        <Box className={styles.account}>
          <Text className={styles.text}>
            Do you have an account?{" "}
            <Link to="/login" style={{ color: "blue" }}>
              Login
            </Link>
          </Text>
        </Box>
        <Box>
          <Text>© {new Date().getFullYear()} JSL India.</Text>
        </Box>
      </div>
    </>
  );
}

export default Signup
