import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Box, Flex, Text, Textarea, Heading, Input, Button, Select, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import * as Yup from "yup";
import { useData } from "../../DataContext";  

const validationSchema = Yup.object({
  topic: Yup.string().required("Topic is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  result: Yup.string().required("Result is required"),
  keyInsights: Yup.string().required("Key findings are required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  department: Yup.string().required("Department is required"),
  market: Yup.string().required("Market is required"),
});

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0'); 

  return `${year}-${month}-${day}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 5 + 1)) + 5;
}

function generateUniqueId() {
  const now = new Date();
  const dateString = now.getFullYear().toString() +
                     (now.getMonth() + 1).toString().padStart(2, '0') +
                     now.getDate().toString().padStart(2, '0') +
                     now.getHours().toString().padStart(2, '0') +
                     now.getMinutes().toString().padStart(2, '0') +
                     now.getSeconds().toString().padStart(2, '0') +
                     now.getMilliseconds().toString().padStart(3, '0');
  return dateString;
}

const FormikForm = () => {
  const { jsonData, addData } = useData();

  const handleSubmit = (values, { setSubmitting }) => {
    
    const newEntry = {
      id:  generateUniqueId(),
      topic: values.topic,
      title: values.title,
      department: values.department,
      market: values.market,
      description: values.description,
      result: values.result,
      keyInsights: values.keyInsights,
      name: values.name,
      email: values.email,
      date: getCurrentDate(),
      keyInsight: getRandomNumber(),
      numberOfLikes: "0",
      numberOfComment: "0",
      numberOfShares: "0"
    };

    
    addData(newEntry);

    setSubmitting(false);
  };

  return (
    <Box p="0 40px" maxW={"800px"}>
      <Box pb="12">
        <Heading color={"#3D4998"}>Research Submission Form:</Heading>
        <Text>
          Please provide an overview of your research, including key findings and
          insights.
        </Text>
      </Box>

      <Formik
        initialValues={{
          topic: "",
          title: "",
          description: "",
          result: "",
          keyInsights: "",
          name: "",
          email: "",
          department: "",
          market: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, values, setFieldValue }) => (
          <Form>
            <Text mb="8px" fontWeight="medium">Topic</Text>
            <Select
              name="topic"
              value={values.topic}
              onChange={handleChange}
              placeholder="Select option"
            >
              <option value="AB-test">A/B test</option>
              <option value="user-test">User test</option>
              <option value="survey">Survey</option>
              <option value="campaign">Campaign</option>
            </Select>
            <ErrorMessage name="topic" component="div" />

            <Flex pt="7">
              <Text mb="8px" fontWeight="medium">
                Title&nbsp;
              </Text>
              <Text fontWeight="normal">(e.g Prepaid checkout, Radio commercial)</Text>
            </Flex>
            <Input
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <ErrorMessage name="title" component="div" />

            {/* Department Field */}
            <Text pt="7" mb="8px" fontWeight="medium">
              Department:
            </Text>
            <Select
              name="department"
              value={values.department}
              onChange={handleChange}
              placeholder="Select option"
            >
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="e-commerce">E-commerce</option>
              <option value="development">Development</option>
            </Select>
            <ErrorMessage name="department" component="div" />

            {/* Market Field */}
            <Text pt="7" mb="8px" fontWeight="medium">
              Market:
            </Text>
            <RadioGroup
              name="market"
              onChange={(value) => setFieldValue("market", value)}
              value={values.market}
            >
              <Stack direction="row" spacing="32px">
                <Radio value="NL">NL</Radio>
                <Radio value="FR">FR</Radio>
                <Radio value="DK">DK</Radio>
                <Radio value="DE">DE</Radio>
                <Radio value="UK">UK</Radio>
              </Stack>
            </RadioGroup>
            <ErrorMessage name="market" component="div" />

            <Heading pt="8" color={"#3D4998"} size={"md"}>
              Research details
            </Heading>
            <Flex pt="7">
              <Text mb="8px" fontWeight="medium">
                Description&nbsp;
              </Text>
              <Text fontWeight="normal">(Background / Why did you conduct the research / which methods were used)</Text>
            </Flex>
            <Textarea
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            <ErrorMessage name="description" component="div" />

            <Text pt="7" mb="8px" fontWeight="medium">
              Results/ Outcome
            </Text>
            <Textarea
              name="result"
              value={values.result}
              onChange={handleChange}
            />
            <ErrorMessage name="result" component="div" />

            <Flex pt="7">
              <Text mb="8px" fontWeight="medium">
                Key findings&nbsp;
              </Text>
              <Text fontWeight="normal">(Main insights/ Takeaway from the research)</Text>
            </Flex>
            <Textarea
              name="keyInsights"
              value={values.keyInsights}
              onChange={handleChange}
            />
            <ErrorMessage name="keyInsights" component="div" />

            <Heading pt="8" color={"#3D4998"} size={"md"}>
              Attachments
            </Heading>
            <Button>+ Attach file</Button>

            <Heading pt="8" color={"#3D4998"} size={"md"}>
              Contact details
            </Heading>

            <Text pt="7" mb="8px" fontWeight="medium">
              Name
            </Text>
            <Input
              type="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorMessage name="name" component="div" />

            <Text pt="7" mb="8px" fontWeight="medium">
              Email
            </Text>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <ErrorMessage name="email" component="div" />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>

      <Box mt="4">
        {/* <Heading size="md">Stored Data:</Heading> */}
        {/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */}
      </Box>
    </Box>
  );
};

export default FormikForm;
