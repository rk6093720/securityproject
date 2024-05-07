import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import styles from "../MainComponent/Main.module.css";
import MainRoutes from '../pages/MainRoutes';
// import { Outlet } from 'react-router-dom';
const Main = () => {
  return (
    <div className={styles.main}>
      <Flex className={styles.mainbox}>
        <Box className={styles.left}>
            <Sidebar/>
        </Box>
        <Spacer/>
        <Box className={styles.right}>
            <Navbar/>
            <MainRoutes/>
            {/* <Outlet/> */} 
        </Box>
      </Flex>
    </div>
  )
}

export default Main
