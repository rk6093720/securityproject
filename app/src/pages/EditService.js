import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editSERVICE, getSERVICEjsl } from "../redux/Service/action";
const EditService = () => {
  const { id } = useParams();
  const [Image, setImage] = useState("");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [currentData, setCurrentData] = useState({});
  const dispatch = useDispatch();
  const jslservice = useSelector((state) => state.Service.service);
  const handleEditService = (e) => {
    e.preventDefault();
    const payload = {
      Image,
      Title,
      Content
    };
    dispatch(editSERVICE(id, payload)).then(() => dispatch(getSERVICEjsl()));
  };
  //first useffect
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
  //second useEffect of update the value;
  useEffect(() => {
    if (id) {
      const discoverbyid = jslservice.find((item) => item.id === Number(id));
      discoverbyid && setCurrentData(discoverbyid);
      discoverbyid && setImage(discoverbyid.Image);
      discoverbyid && setContent(discoverbyid.Content);
      discoverbyid && setTitle(discoverbyid.Title);
    }
  }, [id, jslservice]);
  console.log(jslservice);

  return (
    <div className="discoverjsl">
      <Box style={{ border: "1px solid red" }}>
        <Box>
          <h1>Edit Service</h1>
        </Box>
        <form onSubmit={handleEditService}>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input
              type="file"
              accept="Image/*"
              id="file"
              name="Image"
              placeholder="enter the Image from the file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Title"
              value={Title}
              name="Content"
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
          <Button type="submit">update</Button>
        </form>
      </Box>
    </div>
  );
};

export default EditService;
