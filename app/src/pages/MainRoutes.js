import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard'
// import Login from './Login'
import Signup from './Signup'
// import ReqAuth from '../components/ReqAuth'
import Profile from './Profile'
import Setting from '../components/Setting'
import UserDetails from './UserDetails'
import DiscoverJsl from './DiscoverJsl'
import NewsRoom from './NewsRoom'
import Service from './Service'
import EditDiscover from './EditDiscover'
import EditNewsRoom from './EditNewsRoom'
import EditService from './EditService'
import EnquiryContact from './EnquiryContact'
import ViewDiscover from './ViewDiscover'
import ViewNewsRoom from './ViewNewsRoom'
import ViewService from './ViewService'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/user-details" element={<UserDetails />} />
      <Route path="/discover-jsl" element={<DiscoverJsl />} />
      <Route path="/news-room" element={<NewsRoom />} />
      <Route path="/services" element={<Service />} />
      <Route path="/discover/:id/edit" element={<EditDiscover />} />
      <Route path="/newsroom/:id/edit" element={<EditNewsRoom />} />
      <Route path="/service/:id/edit" element={<EditService />} />
      <Route path='/viewdiscover/:id' element={<ViewDiscover/>}/>
      <Route path='/viewnewsroom/:id' element={<ViewNewsRoom/>}/>
      <Route path='/viewservices/:id' element={<ViewService/>}/> 
      <Route path="/enquiry" element={<EnquiryContact/>}/>
    </Routes>
  ); 
}

export default MainRoutes
