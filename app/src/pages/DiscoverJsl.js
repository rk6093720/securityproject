import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
const DiscoverJsl = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const finalRef = useRef();
  const [image, setImage] = useState("");
  return (
    <div className="discoverjsl">
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
            Add-Discoverjsl
          </Button>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <form>
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Image</FormLabel>
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="enter the image from the file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Introduction</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Vision</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mission</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Save</Button>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>
        </Box>
      </Flex>
    </div>
  );
};

export default DiscoverJsl;
