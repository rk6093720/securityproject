import React, { useRef } from 'react';
import styles from "../components/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaChevronDown, FaLock, FaWallet } from "react-icons/fa";
import { MdOutlineDashboardCustomize , MdFullscreen } from "react-icons/md";
import { IoMdNotifications,  IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const {onOpen, onClose, isOpen} = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("auth");
    navigate("/login") 
  };
 return (
   <div className={styles.nav}>
     <Flex className={styles.navbox}>
       <Box className={styles.left}>
         <Box className={styles.icons}>
           <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
             <GiHamburgerMenu />
           </Button>
         </Box>
         <Box className={styles.input}>
           <InputGroup>
             <InputLeftElement>
               <FaSearch className={styles.search} />
             </InputLeftElement>
             <Input placeholder="Search" />
           </InputGroup>
         </Box>
         <Box className={styles.menu}>
           <Text>Menu</Text>
         </Box>
       </Box>
       <Spacer />
       <Box className={styles.right}>
         <Box className={styles.flag}>
           <Select placeholder="flag">
             <option value="option1">Option 1</option>
             <option value="option2">Option 2</option>
             <option value="option3">Option 3</option>
           </Select>
         </Box>
         <Box className={styles.dashboard}>
           <Button>
             <i>
               <MdOutlineDashboardCustomize className={styles.dashboard} />
             </i>{" "}
           </Button>
         </Box>
         <Box className={styles.fullscreen}>
           <Button>
             <i>
               <MdFullscreen className={styles.fullscreen} />
             </i>
           </Button>
         </Box>
         <Box className={styles.notification}>
           <Button>
             <i>
               <IoMdNotifications className={styles.notification} />
             </i>
           </Button>
         </Box>
         <Box className={styles.dropdown}>
           <Popover>
             <PopoverTrigger>
               <Button className={styles.trigger}>
                 <Image
                   className={styles.Image}
                   src="https://skote-v-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
                   alt=""
                 />
                 <span>admin</span>
                 <FaChevronDown />
               </Button>
             </PopoverTrigger>
             <PopoverContent
               style={{
                 border: "1px solid black",
                 width: "150px",
                 marginTop: "5px",
               }}
             >
               <PopoverArrow />
               <PopoverCloseButton />
               <PopoverBody className={styles.dropdownItem}>
                 <Link to="/profile">
                   <Box className={styles.link}>
                     <i>
                       <CgProfile className={styles.icon} />
                     </i>
                     Profile
                   </Box>
                 </Link>
                 <Box className={styles.link}>
                   <i>
                     <FaWallet className={styles.icon} />
                   </i>
                   Wallet
                 </Box>
                 <Link to="/setting">
                   <Box className={styles.link}>
                     <i>
                       <IoMdSettings className={styles.icon} />
                     </i>
                     Setting
                   </Box>
                 </Link>
                 <Box className={styles.link}>
                   <i>
                     <FaLock className={styles.icon} />
                   </i>
                   LockScreen
                 </Box>
               </PopoverBody>
               <PopoverFooter>
                 <Button onClick={handlelogout}>
                   <TbLogout />
                   Logout
                 </Button>
               </PopoverFooter>
             </PopoverContent>
           </Popover>
         </Box>
         <Box className={styles.settings}>
           <Button>
             <i>
               <IoMdSettings />
             </i>
           </Button>
         </Box>
       </Box>
     </Flex>
     <Drawer
       isOpen={isOpen}
       placement="left"
       onClose={onClose}
       finalFocusRef={btnRef}
     >
       <DrawerOverlay />
       <DrawerContent>
         <DrawerCloseButton />
         <DrawerHeader></DrawerHeader>

         <DrawerBody>
           <Box className={styles.menu}>
             <Text>Menu</Text>
           </Box>
           <Box className={styles.fullscreen}>
             <Button>
               <i>
                 <MdFullscreen className={styles.fullscreen} />
               </i>
             </Button>
           </Box>
           <Box className={styles.dashboard}>
             <Button>
               <i>
                 <MdOutlineDashboardCustomize className={styles.dashboard} />
               </i>{" "}
             </Button>
           </Box>
           <Box className={styles.flag}>
             <Select placeholder="flag">
               <option value="option1">Option 1</option>
               <option value="option2">Option 2</option>
               <option value="option3">Option 3</option>
             </Select>
           </Box>
           <Box className={styles.settings}>
             <Button>
               <i>
                 <IoMdSettings />
               </i>
             </Button>
           </Box>
         </DrawerBody>
         <DrawerFooter></DrawerFooter>
       </DrawerContent>
     </Drawer>
   </div>
 );
}

export default Navbar
