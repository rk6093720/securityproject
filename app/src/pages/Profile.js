import React from 'react'
import styles from "../pages/Profile.module.css"
import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import { FormLabel } from '@chakra-ui/react';
import { MdSystemUpdateAlt } from "react-icons/md";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <Box className={styles.heading}>
        <h1>PROFILE</h1>
      </Box>
      <Box className={styles.details}>
        <Flex className={styles.person}>
          <Box className={styles.imagebox}>
            <Image
               className={styles.image}
              src="https://skote-v-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
              alt=""
            />
          </Box>
          <Box className={styles.userdetails}>
            <h5>Admin</h5>
            <p>Email:admin@gmail.com</p>
            <p>Id no:- 1</p>
          </Box>
        </Flex>
      </Box>
      <Box className={styles.middle}>
        <h1>UPDATE ADMIN DETAILS</h1>
      </Box>
      <Box className={styles.credentials}>
        <form>
          <Box className={styles.username}>
            <FormLabel>UserName</FormLabel>
            <Input placeholder="username" />
          </Box>
          <Box className={styles.image1}>
            <FormLabel>Image</FormLabel>
            <Input type="file" placeholder="image" />
          </Box>
          <Box className={styles.password}>
            <FormLabel>password</FormLabel>
            <Input placeholder="Password" />
          </Box>
          <Box className={styles.cnfpwd}>
            <FormLabel>Confirm Password</FormLabel>
            <Input placeholder="Confirm Password" />
          </Box>
          <Box className={styles.update}>
            <Button type="submit">
              <MdSystemUpdateAlt /> Update Admin Details
            </Button>
          </Box>
        </form>
      </Box>
      <Box className={styles.last}>
        <Text className={styles.text}>@2024 C. JSL India</Text>
      </Box>
    </div>
  );
}

export default Profile
