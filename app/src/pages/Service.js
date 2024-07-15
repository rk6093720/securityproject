import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image as ChakraImage, // Renaming the imported Image component
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
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
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaArchive, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  deleteSERVICEjsl,
  getSERVICEjsl,
  postSERVICE,
} from "../redux/Service/action";
import styles from "../pages/Service.module.css";
const Service = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const finalRef = useRef();
  const [imageState, setImageState] = useState(""); // Renaming the state variable
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const dispatch = useDispatch();
  const jslservice = useSelector((state) => state.Service.service);

  const handleDelete = (item) => {
    dispatch(deleteSERVICEjsl(item.id)).then(() => dispatch(getSERVICEjsl()));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const payload = {
      Image: imageState,
      Title,
      Content
    };
    console.log(payload)
    dispatch(postSERVICE(payload)).then(() => dispatch(getSERVICEjsl()));
  };

  useEffect(() => {
    let timeoutId;
    const handleDispatch = () => {
      if (jslservice.length === 0) {
        dispatch(getSERVICEjsl());
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
  }, [jslservice.length, dispatch]);

  return (
    <div className="service">
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
          <h1>SERVICE JSL</h1>
        </Box>
        <Spacer />
        <Box
          style={{
            border: "1px solid black",
            height: "100%",
            width: "200px",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          <Button
            style={{
              border: "1px solid black",
              height: "100%",
              width: "100%",
              backgroundColor: "blue",
              color: "white",
            }}
            onClick={onOpen}
          >
            Add-ServiceJSL
          </Button>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>ADD SERVICE</ModalHeader>
              <ModalCloseButton />
              <form onSubmit={handleAdd}>
                <ModalBody>
                  <FormControl>
                    <FormLabel>Image</FormLabel>
                    <Input
                      type="file"
                      accept="Image/*"
                      name="Image"
                      placeholder="enter the Image from the file"
                      onChange={(e) => setImageState(e.target.files[0])}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      type="text"
                      placeholder="Title"
                      value={Title}
                      name="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Content</FormLabel>
                    <Textarea
                      type="text"
                      value={Content}
                      name="Content"
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Content"
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
              </form>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {jslservice.length > 0 &&
              jslservice.map((item) => (
                <Tr key={item.id}>
                  <Td>
                    <ChakraImage
                      src={item.Image}
                      alt="Image"
                      width={300}
                      height={150}
                    />
                  </Td>
                  <Td>{item.Title}</Td>
                  <Td>
                    <Flex className={styles.view}>
                      <Link to={`/viewservices/${item.id}`}>
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

export default Service;
