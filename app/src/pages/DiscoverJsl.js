import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image as ChakraImage, // Alias Image from Chakra UI
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getdiscoverjsl,
  deleteDiscoverjsl,
  postDiscover,
} from "../redux/App/action";
import { FaEdit, FaArchive, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../pages/Discover.module.css";

const DiscoverJsl = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const finalRef = useRef();
  const [imageFile, setImageFile] = useState(""); // Changed state variable name to imageFile
  const [Title, setTitle] = useState("");
  const [Introduction, setIntroduction] = useState("");
  const [Vision, setVision] = useState("");
  const [Mission, setMission] = useState("");
  const dispatch = useDispatch();
  const jsldiscover = useSelector((state) => state.App.discover);

  const handleDelete = (item) => {
    dispatch(deleteDiscoverjsl(item.id)).then(() => dispatch(getdiscoverjsl()));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const payload = {
      Image: imageFile,
      Title,
      Introduction,
      Vision,
      Mission,
    };
    dispatch(postDiscover(payload)).then(() => dispatch(getdiscoverjsl()));
  };

  useEffect(() => {
    let timeoutId;
    const handleDispatch = () => {
      if (jsldiscover.length === 0) {
        dispatch(getdiscoverjsl());
      }
    };

    const debounceDispatch = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleDispatch, 500); // Adjust the delay time as needed
    };

    debounceDispatch();

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [jsldiscover.length, dispatch]);

  return (
    <div className={styles.discoverjsl}>
      <Flex
        style={{
          width: "100%",
          height: "45px",
          marginTop: "15px",
        }}
      >
        <Box
          style={{
            height: "100%",
            width: "200px",
            alignContent: "center",
            fontFamily: "sans-serif",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          <h1>DISCOVER JSL</h1>
        </Box>
        <Spacer />
        <Box
          style={{
            height: "100%",
            width: "200px",
            backgroundColor: "#556ee6",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <Button
            style={{
              border: "1px solid black",
              height: "100%",
              width: "100%",
              backgroundColor: "#556ee6",
              color: "white",
              borderRadius: "5px",
            }}
            onClick={onOpen}
          >
            Add-Discoverjsl
          </Button>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <form onSubmit={handleAdd}>
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Image</FormLabel>
                    <Input
                      type="file"
                      accept="Image/*"
                      name="Image"
                      placeholder="enter the image from the file"
                      onChange={(e) => setImageFile(e.target.files[0])}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      type="text"
                      placeholder="Title"
                      name="Title"
                      value={Title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Introduction</FormLabel>
                    <Input
                      type="text"
                      value={Introduction}
                      name="Introduction"
                      onChange={(e) => setIntroduction(e.target.value)}
                      placeholder="Introduction"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Vision</FormLabel>
                    <Input
                      type="text"
                      value={Vision}
                      name="Vision"
                      onChange={(e) => setVision(e.target.value)}
                      placeholder="Vision"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mission</FormLabel>
                    <Input
                      type="text"
                      value={Mission}
                      name="Mission"
                      onChange={(e) => setMission(e.target.value)}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button type="submit" variant="ghost">
                    Save
                  </Button>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>
        </Box>
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>S.no</Th>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {jsldiscover.length > 0 &&
              jsldiscover.map((item, index) => (
                <Tr key={item.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <ChakraImage // Use ChakraImage instead of Image
                      src={item.Image}
                      alt="Image"
                      width={300}
                      height={150}
                    />
                  </Td>
                  <Td>{item.Title}</Td>
                  <Td>
                    <Flex className={styles.view}>
                      <Link to={`/viewdiscover/${item.id}`}>
                        <Button
                          width={"50px"}
                          height={"100%"}
                          _hover={{ bg: "#7487e8", color: "white" }}
                          bg={"#ebf4fc"}
                          color={"#7487e8"}
                          border={"#ebf4fc"}
                          marginLeft={"2px"}
                        >
                          <FaRegEye fontSize={"16px"} />
                        </Button>
                      </Link>
                      <Spacer />
                      <Link to={`/service/${item.id}/edit`}>
                        <Button
                          width={"50px"}
                          height={"100%"}
                          _hover={{ bg: "#a8d1f5", color: "white" }}
                          bg={"#edeffb"}
                          color={"#a8d1f5"}
                          border={"#edeffb"}
                          marginLeft={"2px"}
                        >
                          <FaEdit />
                        </Button>
                      </Link>
                      <Spacer />
                      <Button
                        width={"50px"}
                        height={"100%"}
                        _hover={{ bg: "red", color: "white" }}
                        bg={"#fceeef"}
                        color={"#fae1e2"}
                        border={"#fceeef"}
                        marginLeft={"2px"}
                        onClick={() => handleDelete(item)}
                      >
                        <FaArchive />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DiscoverJsl;
