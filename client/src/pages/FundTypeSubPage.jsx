import { Box, Button, Form, Text, TextInput } from "grommet";
import { FormSearch } from "grommet-icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HelpDropdown from "../components/HelpDropdown";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const FundTypeSubPage = () => {
  const [search, setSearch] = useState();
  const [open, setOpen] = useState(false);

  const history = useHistory();

  return (
    <Layout>
      <PageHeading
        title="Add new funds - Non pension investments and SIPPs"
        subheading="Enter your asset managers"
      />
      <Text as="p" margin={{ bottom: "medium" }}>
        If you know which asset managers you use, please enter them here.
        <HelpDropdown
          iconText="An asset manager is someone who manages your funds, and makes decisions on what to invest in on your behalf"
          handleClick={() => setOpen(!open)}
          open={open}
        />
      </Text>

      <Form>
        <Box direction="row" gap="medium">
          <TextInput
            placeholder="Type here"
            value={search}
            size="medium"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button
            disabled
            //   label="Search"
            icon={<FormSearch />}
            reverse={true}
          ></Button>
        </Box>
      </Form>
      <Button
        secondary
        margin={{ top: "medium" }}
        onClick={() => history.push("/identify-investments")}
      >
        I don't which funds I have investments in
      </Button>
    </Layout>
  );
};

export default FundTypeSubPage;
