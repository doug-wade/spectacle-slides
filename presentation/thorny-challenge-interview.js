import React from "react";
import { createRoot } from "react-dom/client";
import {
  AnimatedProgress,
  Box,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import "normalize.css";
import theme from "../themes/spectrum";

import corgis from "../assets/corgis.jpg";
import dataFrame from "../assets/data-frame.png";
import spectrumWordmark from "../assets/spectrumai-wordmark.png";

import initialDataTableExample from "../code-examples/initial-data-table.example";

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck template={template} theme={theme}>
    <Slide>
      <Heading>Data Frames &amp; Custom Reports</Heading>
      <Heading fontSize={"h3"} color={"green"}>A presentation for</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={spectrumWordmark} width="75%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Agenda</Heading>
      <UnorderedList>
        <ListItem>Introduction</ListItem>
        <ListItem>Background</ListItem>
        <ListItem>What happened?</ListItem>
        <ListItem>Why was it thorny?</ListItem>
        <ListItem>What did we do?</ListItem>
        <ListItem>Outcomes</ListItem>
        <ListItem>Wrap-up & Questions</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox alignItems="center" justifyContent="center" height={"100%"}>
        <Heading fontSize={"h3"} color={"yellow"}>Stop me at any time with questions</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Hi I&apos;m Doug</Heading>
      <FlexBox alignItems="flex-start">
        <UnorderedList>
          <ListItem>From: Seattle, WA</ListItem>
          <ListItem>Two corgis: Bmo and Mochi</ListItem>
          <ListItem>Interests: D&D, Soccer, Comics</ListItem>
          <ListItem>Website: dougwade.io</ListItem>
          <ListItem>Pronouns: He/him</ListItem>
        </UnorderedList>
        <Image src={corgis} width="30%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Professional Background</Heading>
      <UnorderedList>
        <ListItem>Epic Systems</ListItem>
        <ListItem>Amazon</ListItem>
        <ListItem>Redfin</ListItem>
        <ListItem>Indeed</ListItem>
        <ListItem>Possible Finance</ListItem>
        <ListItem>Skilljar</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Epic Systems</Heading>
      <UnorderedList>
        <ListItem>Industry: Electronic Health Record</ListItem>
        <ListItem>Tech: C#, SQL, MUMPS</ListItem>
        <ListItem>Focus: data warehousing</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Amazon</Heading>
      <UnorderedList>
        <ListItem>Industry: Consumer Goods</ListItem>
        <ListItem>Tech: Java, Ruby, Rails, Angular, React</ListItem>
        <ListItem>Focus: Automated failure handling and recovery</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Redfin</Heading>
      <UnorderedList>
        <ListItem>Industry: Real Estate</ListItem>
        <ListItem>Tech: Javascript, Python, React, Java</ListItem>
        <ListItem>Focus: Backend platform and build</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Indeed</Heading>
      <UnorderedList>
        <ListItem>Industry: Jobs</ListItem>
        <ListItem>Tech: Java, Javascript, Node.js, React, Koa</ListItem>
        <ListItem>Focus: Resumes and infrastructure</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Possible Finance</Heading>
      <UnorderedList>
        <ListItem>Industry: FinTech</ListItem>
        <ListItem>Tech: Javascript, Node.js, React Native</ListItem>
        <ListItem>Focus: Compiling for the web</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Skilljar</Heading>
      <UnorderedList>
        <ListItem>Industry: Customer education</ListItem>
        <ListItem>Tech: Python, Javascript, Vue, Web Components</ListItem>
        <ListItem>Focus: Frontend platform and design systems</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Background</Heading>
      <UnorderedList>
        <ListItem>What is a data frame?</ListItem>
        <ListItem>Why do we need data frames?</ListItem>
        <ListItem>What was the problem with data frames?</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is a data frame?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={dataFrame} width="75%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What is a data frame?</Heading>
      <UnorderedList>
        <ListItem>UI that is displayed in the browser</ListItem>
        <ListItem>Backend classes for storing and retrieving data</ListItem>
        <ListItem>Synchronization on the wire</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Why did we need data frames?</Heading>
      <UnorderedList>
        <ListItem>Display tabular information</ListItem>
        <ListItem>Visually consistent</ListItem>
        <ListItem>Reusable</ListItem>
        <ListItem>Over 200 on the admin dashboard</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What was the problem?</Heading>
      <UnorderedList>
        <ListItem>State cannot be synchronized with charts</ListItem>
        <ListItem>Controls must be nested inside the data frame</ListItem>
        <ListItem>Lack of Separation of Concerns between client and server</ListItem>
        <ListItem>Child components access parent component internal state</ListItem>
        <ListItem>Lack of institutional knowledge</ListItem>
        <ListItem>Files are many thousands of lines</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What happened?</Heading>
      <OrderedList>
        <ListItem>Write spike code</ListItem>
        <ListItem>Write a slide deck and design doc</ListItem>
        <ListItem>Present a Lunch and Learn</ListItem>
        <ListItem>Do a design review</ListItem>
        <ListItem>Implementation?</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Initial design</Heading>
      <UnorderedList>
        <ListItem>Heavily composable-based</ListItem>
        <ListItem>Customizable via use of slots</ListItem>
        <ListItem>Data provider abstraction</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Initial design</Heading>
      <CodePane 
        language="javascript" 
        highlightRanges={[[1, 13], [15, 25], [3, 3], [4, 11], [5, 7],[8, 10], [18, 20], [22, 24]]}>
          {initialDataTableExample}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>What happened?</Heading>
      <OrderedList>
        <ListItem>Initial design reaches consensus</ListItem>
        <ListItem>Project kickoff is delayed many months</ListItem>
        <ListItem>Implementation begins</ListItem>
        <ListItem>New requirements discovered</ListItem>
        <ListItem>Redesign</ListItem>
        <ListItem>Implementation</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Rejected Design</Heading>
      <Text>
        We discovered new requirements around dynamically updating columns.
        The feature needed to be redesigned to accommodate this new requirement.
      </Text>
    </Slide>
    <Slide>
      <Heading>What made this thorny?</Heading>
      <UnorderedList>
        <ListItem>Project delayed</ListItem>
        <ListItem>Complicated technical problems</ListItem>
        <ListItem>Hurt inter-team relations</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What did we do?</Heading>
      <OrderedList>
        <ListItem>Gather requirements</ListItem>
        <ListItem>Redesign</ListItem>
        <ListItem>Ship early and often</ListItem>
        <ListItem>Attend all feature team meetings</ListItem>
        <ListItem>Write copious documentation</ListItem>
        <ListItem>Pair/mob programming</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Gather requirements</Heading>
      <Text>
        Meet with stakeholders to understand their needs, 
        especially the needs of the feature teams, by meeting with
        design, product and engineering.
      </Text>
    </Slide>
    <Slide>
      <Heading>Redesign</Heading>
      <UnorderedList>
        <ListItem>Uses provide/inject syntax</ListItem>
        <ListItem>Exposes fewer slots</ListItem>
        <ListItem>Convention over configuration</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Redesign</Heading>
      <CodePane 
        language="javascript" 
        highlightRanges={[[1, 11], [13, 15], [2, 2], [3, 5], [6, 6],[7, 9]]}>
          {initialDataTableExample}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Ship early and often</Heading>
      <Text>
        Ship code that is pre-MVP to get feedback from feature teams 
        as early as possible. Do integrations on hidden pages and in storybook 
        so customers are not affected.
      </Text>
    </Slide>
    <Slide>
      <Heading>Attend all feature team meetings</Heading>
      <Text>
        Attend feature team stand-ups and weekly syncs, and join feature team 
        slack channels to understand the needs of the feature teams and catch
        disharmonies early.
      </Text>
    </Slide>
    <Slide>
      <Heading>Write copious documentation</Heading>
      <Text>
        Produce design documents, api documentation, storybook stories, and code 
        samples. Provide documentation both in programming languages and human 
        languages for clarity.
      </Text>
    </Slide>
    <Slide>
      <Heading>Pair/mob programming</Heading>
      <Text>
        Pair or mob program with feature teams to understand their needs and 
        to help them understand how to use the new data frame. Pair even when
        I think its not strictly related to our integration.
      </Text>
    </Slide>
    <Slide>
      <Heading>Outcomes</Heading>
      <UnorderedList>
        <ListItem>Custom Reports launched 1/9/24</ListItem>
        <ListItem>Feature teams are using the new data frame</ListItem>
        <ListItem>Legacy data frames are being migrated</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Questions?</Heading>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);