import {
  Box,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getdiscoverjsl } from "../redux/App/action";

const ViewDiscover = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const discover = useSelector((state) => state.App.discover);
  const [currentLease, setCurrentLease] = useState({});
  useEffect(() => {
    if (discover.length === 0) {
      dispatch(getdiscoverjsl());
    }
  }, [dispatch, discover.length]);
  useEffect(() => {
    if (id) {
      const currentLease = discover.find((lands) => lands.id === Number(id));
      currentLease && setCurrentLease(currentLease);
    }
  }, [id, discover]);
  console.log(currentLease);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Information</Tab>
          {/* <Tab>Properties</Tab>
          <Tab>Document</Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel>
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
                textOverflow="ellipsis"
                height="400px"
              >
                Introduction:{currentLease.Introduction}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                Vision:{currentLease.Vision}
              </Box>
              <Box border="1px solid black" alignItems="center" height="400px">
                Mission:{currentLease.Mission}
              </Box>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ViewDiscover;
