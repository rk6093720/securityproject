import React, { useState } from 'react'
import styles from "../pages/Profile.module.css"
import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import { FormLabel } from '@chakra-ui/react';
import { MdSystemUpdateAlt } from "react-icons/md";
const Profile = () => {
   const storage = getData();
    const [username,setUsername]= useState(storage.username);
    const [image,setImage]= useState("");
    const handleProfile = () => {

    }
    function getData(){
      return JSON.parse(localStorage.getItem("auth"))
    }
console.log(storage);
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
            <h5>{storage.username}</h5>
            <p>Email:{storage.email}</p>
          </Box>
        </Flex>
      </Box>
      <Box className={styles.middle}>
        <h1>UPDATE ADMIN DETAILS</h1>
      </Box>
      <Box className={styles.credentials}>
        <form onSubmit={handleProfile}>
          <Box className={styles.username}>
            <FormLabel>UserName</FormLabel>
            <Input type='text' placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)} />
          </Box>
          <Box className={styles.image1}>
            <FormLabel>Image</FormLabel>
            <Input type="file" placeholder="image" name='Image' accept='image/*'  onChange={(e) => setImage(e.target.files[0])}/>
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
