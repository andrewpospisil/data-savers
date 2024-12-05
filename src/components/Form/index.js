// Render Prop
import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Box, Flex, Text, Textarea, Heading, Input, Button } from "@chakra-ui/react";
import * as Yup from 'yup';
const validationSchema = Yup.object({
  topic: Yup.string()
    .required('Topic is required'),
    title: Yup.string()
    .required('Title is required'),
});
const FormikForm = () => (
  <Box p="20" maxW={"60%"}>
    <Box pb="12">
    <Heading color={"#3D4998"}>Research Submission Form:</Heading>
    <Text>Please provide an overview of your research, including key findings and insights. </Text>
    <Text>Be mindful not to include any sensitive or confidential information, such as proprietary data, personal details, or any data not intended for public sharing</Text>
    </Box>
    
    <Heading pb="8" color={"#3D4998"} size={"md"}>Research overview</Heading>
    <Formik
      initialValues={{ topic: '', title: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
           <Text mb='8px' fontWeight="medium">Type of research</Text>
          <Input type="text" name="topic" />
          <ErrorMessage name="topic" component="div" />

          <Flex pt="7">
          <Text  mb='8px' fontWeight="medium">Title&nbsp;</Text>
          <Text fontWeight="normal">(e.g Prepaid checkout, Radio commercial)</Text>
          </Flex>
          <Input type="text" name="title" />
          <ErrorMessage name="title" component="div" />


          <Text pt="7" mb='8px' fontWeight="medium">Department:</Text>
          <Input type="text" name="department" />
          <ErrorMessage name="department" component="div" />

          <Text pt="7" mb='8px' fontWeight="medium">Market:</Text>
          <Input type="text" name="market" />
          <ErrorMessage name="market" component="div" />

          <Heading pt="8" color={"#3D4998"} size={"md"}>Research details</Heading>
          <Flex pt="7">
          <Text  mb='8px' fontWeight="medium"> Description&nbsp;</Text><Text fontWeight="normal">(Background / Why did you conduct the research / which methods were used)</Text>
          </Flex>
          <Textarea type="text" name="description" />
          <ErrorMessage name="description" component="div" />

          <Text pt="7" mb='8px' fontWeight="medium">Results/ Outcome</Text>
          <Textarea type="text" name="result" />
          <ErrorMessage name="result" component="div" />
          <Flex pt="7">
          <Text  mb='8px' fontWeight="medium">Key findings&nbsp;</Text>
          <Text fontWeight="normal">(Main insights/ Takeaway from the research)</Text>
          </Flex>
          <Input type="text" name="keyInsights" />
          <ErrorMessage name="keyInsights" component="div" />

          <Heading pt="8" color={"#3D4998"} size={"md"}>Attachments</Heading>
          <Button>+ Attach file
          </Button>

          <Heading pt="8" color={"#3D4998"} size={"md"}>Contact details</Heading>
         
          <Text pt="7" mb='8px' fontWeight="medium">Name</Text>
          <Input type="name" name="name" />
          <ErrorMessage name="name" component="div" />
         
          <Text pt="7" mb='8px' fontWeight="medium">Email</Text>
          <Input type="email" name="email" />
          <ErrorMessage name="email" component="div" />
         

          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
         
        </Form>
      )}
    </Formik>
  </Box>
);

export default FormikForm;