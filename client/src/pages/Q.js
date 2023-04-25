import { React, useState } from "react";
import { Box, Heading, Input } from "@chakra-ui/react";
import { ADD_RESPONSE } from "../mutations/responseMutations";
import { useMutation } from "@apollo/client";
import { Button } from "react-bootstrap";

function Q(props) {
  const [formState, setFormState] = useState({
    name: "",
    yesno: "",
    day: "T",
    location: "",
    venue: "",
  });
  const [addResponse, { error }] = useMutation(ADD_RESPONSE);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addResponse({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }

    localStorage.setItem("submitted", "true");
    setSubmitted(true);
    props.setSubmitted(true);

    setFormState({
      name: "",
      yesno: "",
      day: "",
      location: "",
      venue: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Box className="qh1" mx="auto" mt={8} textAlign="center">
        <h1>amDown && (letsParty)</h1>
      </Box>
      <Box className="qForm" mx="auto" mt={8} textAlign="center">
        <form onSubmit={handleSubmit}>
          <Box mb={4}>
            <Heading as="h3" mb={2}>
              Name
            </Heading>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              mx="auto"
              value={formState.name}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <Heading as="h3" mb={2}>
              Would you attend a graduation party?
            </Heading>
            <Box mb={4} w={["100%", "100%", "35%"]} mx="auto">
              <select
                name="yesno"
                value={formState.yesno}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </Box>
          </Box>
          <Box mb={4}>
            <Heading as="h3" mb={2}>
              Which day would you prefer?
            </Heading>
            <Box mb={4} w={["100%", "100%", "35%"]} mx="auto">
              <select
                name="day"
                value={formState.day}
                onChange={handleChange}
                className="form-select"
                mx="auto"
              >
                <option value="">Select</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </Box>
          </Box>
          <Box mb={4}>
            <Heading as="h3" mb={2}>
              Which borough is most convenient for you?
            </Heading>
            <Box mb={4} w={["100%", "100%", "35%"]} mx="auto">
              <select
                name="location"
                value={formState.location}
                onChange={handleChange}
                className="form-select"
                mx="auto"
              >
                <option value="">Select</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Queens">Queens</option>
                <option value="Bronx">Bronx</option>
                <option value="Staten Island">Staten Island</option>
              </select>
            </Box>
          </Box>
          <Box mb={4}>
            <Heading as="h3" mb={2}>
              Suggest a venue (optional)
            </Heading>
            <Input
              type="text"
              name="venue"
              placeholder="Venue"
              value={formState.venue}
              onChange={handleChange}
              mx="auto"
            />
          </Box>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="solid"
            className="btn btn-primary"
          >
            Submit
          </Button>
        </form>
        {error && <div>Something went wrong...</div>}
      </Box>
    </>
  );
}

export default Q;
