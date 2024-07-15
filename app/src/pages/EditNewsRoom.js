import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editNEWSROOM, getNEWSROOMjsl } from "../redux/NewsRoom/action";
const EditNewsRoom = () => {
  const { id } = useParams();
  const [Image, setImage] = useState("");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [currentData, setCurrentData] = useState({});
  const dispatch = useDispatch();
  const jslnewsroom = useSelector((state) => state.NewsRoom.newsroom);
  const handleEditDiscover = (e) => {
    e.preventDefault();
    const payload = {
      Image,
      Title,
      Content
    };
    dispatch(editNEWSROOM(id, payload)).then(() => dispatch(getNEWSROOMjsl()));
  };
  //first useffect
  useEffect(() => {
    let timeoutId;
    const handleDispatch = () => {
      if (jslnewsroom.length === 0) {
        dispatch(getNEWSROOMjsl());
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
  }, [jslnewsroom.length, dispatch]);
  //second useEffect of update the value;
  useEffect(() => {
    if (id) {
      const discoverbyid = jslnewsroom.find((item) => item.id === Number(id));
      discoverbyid && setCurrentData(discoverbyid);
      discoverbyid && setImage(discoverbyid.Image);
      discoverbyid && setContent(discoverbyid.Content);
      discoverbyid && setTitle(discoverbyid.Title);
    }
  }, [id, jslnewsroom]);
  console.log(jslnewsroom);

  return (
    <div className="discoverjsl">
      <Box style={{ border: "1px solid red" }}>
        <Box>
          <h1>Edit NewsRoom</h1>
        </Box>
        <form onSubmit={handleEditDiscover}>
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
          <Button type="submit">update</Button>
        </form>
      </Box>
    </div>
  );
};

export default EditNewsRoom;
