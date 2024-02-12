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
import provideInject from "../code-examples/provide-inject.example";
import redesignDataTableExample from "../code-examples/initial-data-table.example";

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
        <ListItem>Skilljar</ListItem>
        <ListItem>Indeed</ListItem>
        <ListItem>Redfin</ListItem>
        <ListItem>Amazon</ListItem>
        <ListItem>Epic Systems</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Epic Systems</Heading>
      <UnorderedList>
        <ListItem>Industry: Electronic Health Record</ListItem>
        <ListItem>Projects: ETL, Product dashboard</ListItem>
        <ListItem>Focus: data warehousing</ListItem>
        <ListItem>Tech: C#, SQL, MUMPS</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Amazon</Heading>
      <UnorderedList>
        <ListItem>Industry: Consumer Goods</ListItem>
        <ListItem>Projects: New website, Sign up in India</ListItem>
        <ListItem>Focus: Automated failure handling and recovery</ListItem>
        <ListItem>Tech: Java, Ruby, Rails, Angular, React</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Redfin</Heading>
      <UnorderedList>
        <ListItem>Industry: Real Estate</ListItem>
        <ListItem>Projects: React Server, Lerna</ListItem>
        <ListItem>Focus: Backend platform and build</ListItem>
        <ListItem>Tech: Javascript, Python, React, Java</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Indeed</Heading>
      <UnorderedList>
        <ListItem>Industry: Jobs</ListItem>
        <ListItem>Projects: Hardening Node.js, Resume Preview</ListItem>
        <ListItem>Focus: Resumes and infrastructure</ListItem>
        <ListItem>Tech: Java, Javascript, Node.js, React, Koa</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Possible Finance</Heading>
      <UnorderedList>
        <ListItem>Industry: FinTech</ListItem>
        <ListItem>Projects: Compiling for the web, Design system</ListItem>
        <ListItem>Focus: Feature development</ListItem>
        <ListItem>Tech: Javascript, Node.js, React Native</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Skilljar</Heading>
      <UnorderedList>
        <ListItem>Industry: Customer education</ListItem>
        <ListItem>Projects: Page Builder, Api Rate Limiting</ListItem>
        <ListItem>Focus: Frontend platform and design systems</ListItem>
        <ListItem>Tech: Python, Javascript, Vue, Web Components</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Background</Heading>
      <UnorderedList>
        <ListItem>Needed to support a feature team
          <UnorderedList>
            <ListItem>For a Custom Report project</ListItem>
            <ListItem>I was Frontend Lead</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>My team had to write new frontend components</ListItem>
        <ListItem color={"yellow"}>Had to rewrite data frame</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is a data frame?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={dataFrame} width="65%" />
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
      <Heading>Why did we need a rewrite?</Heading>
      <UnorderedList>
        <ListItem>State cannot be synchronized with charts</ListItem>
        <ListItem>Lack of Separation of Concerns</ListItem>
        <ListItem>Hard to understand</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>My approach</Heading>
      <OrderedList>
        <ListItem>Write spike code</ListItem>
        <ListItem>Write a slide deck and design doc</ListItem>
        <ListItem>Present a Lunch and Learn</ListItem>
        <ListItem>Do a design review</ListItem>
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
      <Heading>My approach</Heading>
      <OrderedList>
        <ListItem>Write spike code</ListItem>
        <ListItem>Write a slide deck and design doc</ListItem>
        <ListItem>Present a Lunch and Learn</ListItem>
        <ListItem>Do a design review</ListItem>
        <ListItem color={"yellow"}>Consensus reached</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Challenges Begin</Heading>
      <OrderedList>
        <ListItem>Project kickoff is delayed many months</ListItem>
        <ListItem>Implementation begins</ListItem>
        <ListItem>New requirements discovered</ListItem>
        <ListItem color={"yellow"}>Redesign required</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Rejected Design</Heading>
      <Text>
        We discovered new requirements around dynamically updating columns and 
        controls in flyouts.
      </Text>
      <Text> 
        The feature needed to be redesigned to accommodate these new requirements.
      </Text>
    </Slide>
    <Slide>
      <Heading>What made this challenging?</Heading>
      <UnorderedList>
        <ListItem>Missed launch for customer conference</ListItem>
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
        highlightRanges={[[1, 13], [15, 25], [2, 2], [3, 5], [6, 6],[7, 9]]}>
          {redesignDataTableExample}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Redesign</Heading>
      <CodePane 
        language="javascript" 
        highlightRanges={[[2, 2], [4, 4], [6, 9], [6, 10], [14, 14], [16, 19]]}>
        {provideInject}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Ship early and often</Heading>
      <Text>
        Ship code that is pre-MVP to get feedback from feature teams 
        as early as possible.
      </Text>
      <Text>
        Do integrations on hidden pages and in storybook 
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
        samples.
      </Text>
      <Text> 
        Provide documentation both in programming languages and human 
        languages for clarity.
      </Text>
    </Slide>
    <Slide>
      <Heading>Pair/mob programming</Heading>
      <Text>
        Pair or mob program with feature teams to understand their needs and 
        to help them understand how to use the new data frame. 
      </Text>
      <Text>
        Pair even when I think its not strictly related to our integration.
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
      <Heading>Next time</Heading>
      <UnorderedList>
        <ListItem>Designs also experience &quot;code rot&quot;</ListItem>
        <ListItem>Conduct constant check-ins</ListItem>
        <ListItem>People over process</ListItem>
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