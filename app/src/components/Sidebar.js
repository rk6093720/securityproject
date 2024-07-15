import React, { useState } from "react";
import styles from "../components/Sidebar.module.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleAccordionChange = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div className={styles.sidebar}>
      <Box>
        <Image
          className={styles.jslimage}
          src="https://www.jslindia.org/web_root/front_root/img/logo-free.png"
        />
      </Box>
      <Link to="/Dashboard">
        <Text className={styles.text}>Menu</Text>
      </Link>
      <Accordion
        allowMultiple={false}
        className={styles.accordion}
        defaultIndex={selectedIndex}
        onChange={handleAccordionChange}
      >
        <AccordionItem className={styles.item}>
          <h2>
            <AccordionButton style={{ border: "none" }}>
              <Box as="span" flex="1" textAlign="left">
                Dashboard
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <Box className={styles.Dashboard}>
              <Link to="/dashboard">
                <Text>DASHBOARD</Text>
              </Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        {/* Other accordion items */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                PROFILE
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <Box className={styles.profile}>
              <Link to="/profile">
                <Text>PROFILE</Text>
              </Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                USER LIST
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <Box className={styles.profile}>
              <Link to="/user-details">
                <Text>USER LIST</Text>
              </Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Discover
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <Box className={styles.profile}>
              <Link to="/discover-jsl">
                <Text>Discover Jsl</Text>
              </Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                News Room
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <Box className={styles.profile}>
              <Link to="/news-room">
                <Text>News Room</Text>
              </Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Services
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <Box className={styles.profile}>
              <Link to="/services">
                <Text>Services</Text>
              </Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Contact
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <Box className={styles.profile}>
              <Link to="/enquiry">
                <Text>Contact</Text>
              </Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidebar;
