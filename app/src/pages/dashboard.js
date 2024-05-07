import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import styles from "../pages/Dashboard.module.css";
import * as React from 'react';
import { BiCopyAlt } from "react-icons/bi";
import { IoMdArchive } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { BiPurchaseTagAlt } from "react-icons/bi";
import GaugeChart from "react-gauge-chart";
import Graph from './Graph';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapPin ,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import  {Timeline, TimelineConnector,TimelineItem,TimelineContent,TimelineSeparator}  from  "@mui/lab";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/profile")
  }
  return (
    <div className={styles.dashboard}>
      <Box className={styles.heading}>
        <h1>DASHBOARD</h1>
      </Box>
      <Flex className={styles.second}>
        <Box className={styles.left}>
          <Box className={styles.profile}>
            <Flex className={styles.box}>
              <Box className={styles.left1}>
                <h5>Welcome Back ! </h5>
                <p> JSL India.</p>
              </Box>
              <Spacer />
              <Box className={styles.right2}>
                <Image
                  className={styles.image}
                  src="https://skote-v-light.react.themesbrand.com/static/media/profile-img.43b59e598ba15abe6eab.png"
                  alt=""
                />
              </Box>
            </Flex>
            <Flex className={styles.mainbox}>
              <Box className={styles.left2}>
                <Image
                  className={styles.image1}
                  src="https://skote-v-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
                  alt=""
                />
                <h1>Henry Price</h1>
                <p>UI/UX Designer</p>
              </Box>
              <Box className={styles.col}>
                <Flex className={styles.row}>
                  <Box className={styles.box1}>
                    <h5>125</h5>
                    <p>Projects</p>
                  </Box>
                  <Spacer />
                  <Box className={styles.box2}>
                    <h5>$1245</h5>
                    <p>Revenue</p>
                  </Box>
                </Flex>
                <Box className={styles.profile1}>
                  <Button onClick={handleClick}>View Profile</Button>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box className={styles.earning}>
            <Box className={styles.title}>
              <h5>Money Earning</h5>
            </Box>
            <Flex className={styles.stat}>
              <StatGroup className={styles.statleft}>
                <Stat>
                  <StatLabel>This Month</StatLabel>
                  <StatNumber>$ 3,45,670</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    23.36% <Text>From previous period</Text>
                  </StatHelpText>
                </Stat>
              </StatGroup>
              <Spacer />
              <Box className={styles.statright}>
                <GaugeChart
                  className={styles.chart}
                  id="gauge-chart3"
                  nrOfLevels={3}
                  colors={["green", "orange", "red"]}
                  arcWidth={0.3}
                  percent={0.37}
                  textColor={"black"}
                />
              </Box>
            </Flex>
            <Box className={styles.more}>
              <Button>View More</Button>
            </Box>
            <Text className={styles.textp}>
              We craft digital, graphic and dimensional thinking.
            </Text>
          </Box>
        </Box>
        <Spacer />
        <Box className={styles.right}>
          {/* first phase  */}
          <Flex className={styles.flexbox}>
            <Box className={styles.flexbox1}>
              <Flex className={styles.subBox}>
                <Box className={styles.subBoxleft}>
                  <p>Orders</p>
                  <h4>2340</h4>
                </Box>
                <Spacer />
                <Box className={styles.subBoxright}>
                  <BiCopyAlt className={styles.subBoxrighticon} />
                </Box>
              </Flex>
            </Box>
            <Spacer />
            <Box className={styles.flexbox2}>
              <Flex className={styles.subBox}>
                <Box className={styles.subBoxleft}>
                  <p>Revenue</p>
                  <h4>$35, 723</h4>
                </Box>
                <Spacer />
                <Box className={styles.subBoxright}>
                  <IoMdArchive className={styles.subBoxrighticon} />
                </Box>
              </Flex>
            </Box>
            <Spacer />
            <Box className={styles.flexbox3}>
              <Flex className={styles.subBox}>
                <Box className={styles.subBoxleft}>
                  <p>Average Price</p>
                  <h4>$16.2</h4>
                </Box>
                <Spacer />
                <Box className={styles.subBoxright}>
                  <BiPurchaseTagAlt className={styles.subBoxrighticon} />
                </Box>
              </Flex>
            </Box>
          </Flex>
          {/* second phase  */}
          <Box className={styles.secondphase}>
            <Flex className={styles.email}>
              <Box className={styles.emailLeft}>
                <h4>Email Sent</h4>
              </Box>
              <Spacer />
              <Box className={styles.emailRight}>
                <Flex className={styles.emailRight1}>
                  <Box className={styles.emailRight1a}>
                    <p classsName={styles.week}>Week</p>
                  </Box>
                  <Spacer />
                  <Box className={styles.emailRight1b}>
                    <p classsName={styles.month}>Month</p>
                  </Box>
                  <Spacer />
                  <Box className={styles.emailRight1c}>
                    <p classsName={styles.year}>Year</p>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Box className={styles.graph}>
              <Graph />
            </Box>
          </Box> 
        </Box>
      </Flex>
      {/* third phase of dashboard  */}
      <Box className={styles.third}>
        <Flex className={styles.thirdflex}>
          <Box className={styles.thirdflex1}>
            <Box className={styles.container}>
              <h4 className={styles.heading4}>Social Source</h4>
              <Box className={styles.secondpart}>
                <Box className={styles.facebookIconbox}>
                  <FaFacebook className={styles.facebookIcon} />
                </Box>
                <h5 id={styles.facebookhead}>
                  <Link to="/dashboard">
                    Facebook -<span>125 sales</span>
                  </Link>
                </h5>
                <p className={styles.text}>
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus tincidunt.
                </p>
                <Link to={"/dashboard"}>
                  <Button className={styles.facebooklink}>
                    <p>Learn more</p>
                    <IoChevronForward className={styles.facebooklinkIcon} />
                  </Button>
                </Link>
              </Box>
              <Flex className={styles.thirdpart}>
                <Box className={styles.thirdpart1}>
                  <FaFacebook className={styles.thirdpartIcon1} />
                  <p className={styles.thirdpartIconText1}>125 sales</p>
                </Box>
                <Spacer />
                <Box className={styles.thirdpart2}>
                  <FaTwitter className={styles.thirdpartIcon2} />
                  <p className={styles.thirdpartIconText2}>112 sales</p>
                </Box>
                <Spacer />
                <Box className={styles.thirdpart3}>
                  <FaInstagram className={styles.thirdpartIcon3} />
                  <p className={styles.thirdpartIconText3}>104 sales</p>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Spacer />
          <Box className={styles.thirdflex2}>
            <Box className={styles.container}>
              <h4 className={styles.heading4}>Activity</h4>
              <Timeline className={styles.timelinebox}>
                <TimelineItem className={styles.timelineitembox}>
                  <TimelineSeparator className={styles.timelineseparatorbox}>
                    <FaRegArrowAltCircleRight
                      className={styles.timelineseparatorboxIcon}
                    />
                    {/* <TimelineDot /> */}
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Text>22 Nov Responded to need “Volunteer Activities”</Text>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className={styles.timelineitembox}>
                  <TimelineSeparator className={styles.timelineseparatorbox}>
                    <FaRegArrowAltCircleRight
                      className={styles.timelineseparatorboxIcon}
                    />
                    {/* <TimelineDot /> */}
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Text>
                      17 Nov Everyone realizes why a new common language would
                      be desirable... Read More
                    </Text>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className={styles.timelineitembox}>
                  <TimelineSeparator className={styles.timelineseparatorbox}>
                    <FaRegArrowAltCircleRight
                      color={"green"}
                      className={styles.timelineseparatorboxIcon}
                    />
                    {/* <TimelineDot /> */}
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Text>15 Nov Joined the group “Boardsmanship Forum”</Text>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className={styles.timelineitembox}>
                  <TimelineSeparator className={styles.timelineseparatorbox}>
                    <FaRegArrowAltCircleRight
                      className={styles.timelineseparatorboxIcon}
                    />
                    {/* <TimelineDot /> */}
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Text>22 Nov Responded to need “In-Kind Opportunity”</Text>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              <Box className={styles.timelinebutton}>
                <Button>View Profile</Button>
              </Box>
            </Box>
          </Box>
          <Spacer />
          <Box className={styles.thirdflex3}>
            <Box className={styles.locationcontainer}>
              <h4 className={styles.heading4}>Top Cities Selling Product</h4>
              <Box className={styles.locationsecondpart}>
                <Box className={styles.locationIconbox}>
                  <FaMapPin className={styles.locationIcon} />
                </Box>
                <h3 id={styles.locationhead}>1,456</h3>
                <p className={styles.locationtext}>San Francisco</p>
              </Box>
              <TableContainer className={styles.table}>
                <Table>
                  <Tbody>
                    <Tr>
                      <Td>San Francisco</Td>
                      <Td>1,456</Td>
                      <Td>91444</Td>
                    </Tr>
                    <Tr>
                      <Td>Los Angeles</Td>
                      <Td>1,123</Td>
                      <Td>91444</Td>
                    </Tr>
                    <Tr>
                      <Td>San Diego</Td>
                      <Td>1,026</Td>
                      <Td>0.91444</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* fouth phase of dashboard of transaction  */}
      
    </div>
  );
}

export default Dashboard
