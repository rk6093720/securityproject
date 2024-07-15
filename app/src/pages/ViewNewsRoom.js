import {
  Box,
  Image,
  SimpleGrid
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNEWSROOMjsl } from "../redux/NewsRoom/action";

const ViewNewsRoom = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Newsroom = useSelector((state) => state.NewsRoom.newsroom);
  const [currentLease, setCurrentLease] = useState({});
  useEffect(() => {
    if (Newsroom.length === 0) {
      dispatch(getNEWSROOMjsl());
    }
  }, [dispatch, Newsroom.length]);
  useEffect(() => {
    if (id) {
      const currentLease = Newsroom.find((lands) => lands.id === Number(id));
      currentLease && setCurrentLease(currentLease);
    }
  }, [id, Newsroom]);
  console.log(currentLease);
  return (
    <div>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Box
          border="1px solid black"
          alignItems="center"
          height="80px"
          key={currentLease.id}
        >
          Id:{currentLease.id}{" "}
        </Box>
        <Box border="1px solid black" alignItems="center" height="300px">
          <Image
            src={currentLease.Image}
            alt="Image"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box border="1px solid black" alignItems="center" height="80px">
          Title:{currentLease.Title}
        </Box>
        <Box
          border="1px solid black"
          alignItems="center"
          textOverflow="revert-layer"
          height="400px"
        >
          Content:{currentLease.Content}
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default ViewNewsRoom;
