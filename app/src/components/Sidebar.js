import React from 'react'
import styles from "../components/Sidebar.module.css"
import { Box, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Box>
        <Image
          className={styles.jslimage}
          src="https://www.jslindia.org/web_root/front_root/img/logo-free.png"
        />
      </Box>
      <Box className={styles.Dashboard}>
        <Link to="/dashboard">
          <Text>DASHBOARD</Text>
        </Link>
      </Box>
      <Box className={styles.profile}>
        <Link to="/profile">
          <Text>PROFILE</Text>
        </Link>
      </Box>
      {/* <Box className={styles.profile}>
        <Link to="/setting">
          <Text>SETTING</Text>
        </Link>
      </Box> */}
      <Box className={styles.profile}>
        <Link to="/user-details">
          <Text>USER-DETAILS</Text>
        </Link>
      </Box>
      <Box className={styles.profile}>
        <Link to="/discover-jsl">
          <Text>Discover Jsl</Text>
        </Link>
      </Box>
      <Box className={styles.profile}>
        <Link to="/news-room">
          <Text>News Room</Text>
        </Link>
      </Box>
      <Box className={styles.profile}>
        <Link to="/services">
          <Text>Services</Text>
        </Link>
      </Box> 
    </div>
  );
}

export default Sidebar
