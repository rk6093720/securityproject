import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const EnquiryContact = () => {
  return (
    <div className="enquiry">
      <Box className="formsection">
          <h1>Enquiry Form</h1>
        <form>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' placeholder='name' />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile-Number</FormLabel>
            <Input type='text' placeholder='name' />
          </FormControl>
          <FormControl>
            <FormLabel>Company-Name</FormLabel>
            <Input type='text' placeholder='name' />
          </FormControl>
          <FormControl>
            <FormLabel>City-Name</FormLabel>
            <Input type='text' placeholder='name' />
          </FormControl>
          <FormControl>
            <FormLabel>Enquiry Message</FormLabel>
            <Textarea/>
          </FormControl>
          <Button type='submit'>Submit</Button>
        </form>
      </Box>
    </div>
  );
}

export default EnquiryContact
