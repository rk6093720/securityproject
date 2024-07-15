import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDiscover, getdiscoverjsl } from "../redux/App/action";
import { useParams } from "react-router-dom";
const EditDiscover = () => {
  const {id} = useParams();
  const [Image, setImage] = useState("");
  const [Title, setTitle] = useState("");
  const [Introduction, setIntroduction] = useState("");
  const [Vision, setVision] = useState("");
  const [Mission, setMission] = useState("");
  const [currentData,setCurrentData]=useState({});
  const dispatch = useDispatch();
  const jsldiscover = useSelector((state) => state.App.discover);
  const handleEditDiscover=(e)=>{
    e.preventDefault();
    const payload={
      Image,
      Title,
      Introduction,
      Vision,
      Mission
    }
   dispatch(editDiscover(id,payload))
   .then(()=>dispatch(getdiscoverjsl()))
  }
  //first useffect
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
  //second useEffect of update the value;
  useEffect(()=>{
    if(id){
      const discoverbyid = jsldiscover.find((item)=> item.id === Number(id));
      console.log(discoverbyid)
      discoverbyid && setCurrentData(discoverbyid)
      discoverbyid && setImage(discoverbyid.Image);
      discoverbyid && setIntroduction(discoverbyid.Introduction);
      discoverbyid && setTitle(discoverbyid.Title);
      discoverbyid && setMission(discoverbyid.Mission);
      discoverbyid && setVision(discoverbyid.Vision);
    }
  },[id, jsldiscover])
  console.log(jsldiscover);

  return (
    <div className="discoverjsl">
      <Box style={{border:"1px solid red"}}>
        <Box>
          <h1>Edit Discover</h1>
        </Box>
        <form onSubmit={handleEditDiscover}>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input
              type="file"
              accept="Image/*"
              id="file"
              name="Image"
              placeholder="enter the image from the file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Introduction</FormLabel>
            <Input type="text" value={Introduction} onChange={(e)=>setIntroduction(e.target.value)} placeholder="Introduction" />
          </FormControl>
          <FormControl>
            <FormLabel>Vision</FormLabel>
            <Input type="text" value={Vision} onChange={(e)=>setVision(e.target.value)} placeholder="Vision" />
          </FormControl>
          <FormControl>
            <FormLabel>Mission</FormLabel>
            <Input type="text" value={Mission} onChange={(e)=>setMission(e.target.value)} placeholder="Mission"/>
          </FormControl>
          <Button type="submit">update</Button>
        </form>
      </Box>
    </div>
  );
};

export default EditDiscover;
