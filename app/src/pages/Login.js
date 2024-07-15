import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdLock } from "react-icons/md";
import styles from "../pages/Login.module.css";
import {
  Flex,
  FormLabel,
  Spacer,
  Box,
  Image,
  Input,
  Checkbox,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux/Auth/action";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../redux/Auth/actionTypes";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if "Remember Me" is checked and retrieve stored credentials
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setCheckBox(true);
    }
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    if (email === "" && password === "") {
      alert("Please fill email and password");
      return;
    }
    // Validation for email and password
    if (!email.trim()) {
      setEmailError("Please fill in the email address");
      return;
    }
    if (!password.trim()) {
      setPasswordError("Please fill in the password");
      return;
    }

    dispatch(LoginUser(payload))
      .then((r) => {
        if (r.type === LOGIN_SUCCESS) {
          alert("Login Successfully");
          navigate("/dashboard");
        } else if (r.type === LOGIN_FAILURE) {
          alert("Please fill Correct Credentials");
          return;
        }
      })
      .catch((e) => {
        alert(e.message);
      });
    if (checkBox) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }
  };

  const handleLoginwithFacebook = () => {
    alert("Login with Facebook");
  };

  const handleLoginwithGoogle = () => {
    alert("Login with Google");
  };

  return (
    <div className={styles.Login}>
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
      <form onSubmit={handleLogin}>
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
        <Box className={styles.loginbutton}>
          <Button type="submit">Log In</Button>
        </Box>
      </form>
      <Box className={styles.signwith}>
        <p>Sign In With</p>
        <ButtonGroup variant="outline" spacing="6" marginTop={"15px"}>
          <Button onClick={handleLoginwithFacebook} className={styles.facebook}>
            <FaFacebook />
          </Button>
          <Button onClick={handleLoginwithGoogle} className={styles.google}>
            <FcGoogle />
          </Button>
        </ButtonGroup>
      </Box>
      <Link to="/forgetpassword">
        <Button className={styles.forgetpwd}>
          <MdLock className={styles.icon} />
          Forget Password
        </Button>
      </Link>
      <Box className={styles.account}>
        <Text className={styles.text}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "blue" }}>
            Signup now
          </Link>
        </Text>
      </Box>
      <Box>
        <Text>© 2024 JSL India.</Text>
      </Box>
    </div>
  );
};

export default Login;
