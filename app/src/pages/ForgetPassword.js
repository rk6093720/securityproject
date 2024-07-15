import React, { useState } from 'react'
import styles from '../pages/Forget.module.css';
import { Box, Button, Flex, FormLabel, Image, Input, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const ForgetPassword = () => {
  const [email, setEmail]= useState();
  const [emailError,setEmailError]= useState();
  const handleReset = () =>{

  }
  return (
    <div className={styles.ForgetPassword}>
      <Flex className={styles.box}>
        <Box className={styles.left}>
          <h5>Welcome Back ! </h5>
          <p>Sign in to continue to JSL India.</p>
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
      <form onSubmit={handleReset}>
        <Box className={styles.credential}>
          <Box className={styles.input}>
            <FormLabel>Email</FormLabel>
            <Input
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(""); // Clear email error when user types
              }}
            />
            {emailError && <Text color="red">{emailError}</Text>}
          </Box>
        </Box>
        <Box className={styles.resetbutton}>
          <Button type="submit">Reset</Button>
        </Box>
      </form>
      <Box className={styles.account}>
        <Text className={styles.text}>
           Go Back to {" "}
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

export default ForgetPassword
