import React from "react";
import { createRoot } from "react-dom/client";
import {
  Deck,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Slide,
  Text,
  UnorderedList,
  Quote,
} from "spectacle";

import "normalize.css";

import supportingRun from "../assets/supporting-run.png";
import glueWork from "../assets/glue-work.png";
import problemContinuum from "../assets/problem-continuum.png";
import solutionContinuum from "../assets/solution-continuum.png";
import sweeper from "../assets/5-3-2-sweeper-formation.gif";
import wingers from "../assets/4-3-3-formation.png";
import pieCharts from "../assets/pie-charts.png";
import tent from "../assets/tent.jpg";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading>Glue and Campsite Work</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>Getting work done</Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Campsite Work</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={tent} width="75%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Once upon a time...</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={sweeper} width="25%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>But now...</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={wingers} width="30%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What is Campsite Work?</Heading>
      <Quote>Always leave the campground cleaner than you found it.</Quote>
      <Text>- Scout Handbook</Text>
      <Quote>Leave this world a little better than you found it.</Quote>
      <Text>- Robert Baden-Powell</Text>
    </Slide>
    <Slide>
      <Heading>Examples of Campsite Work</Heading>
      <UnorderedList>
        <ListItem>Adding missing unit tests</ListItem>
        <ListItem>Breaking up long functions</ListItem>
        <ListItem>Changing variable names to be more expressive</ListItem>
        <ListItem>Adding missing comments</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>What is Campsite Work?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Quote>a little better</Quote>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Problems spread!</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>
          Often, developers copy-paste existing code. Campsite work reduces
          copies of the mistakes of the past.
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>A Continuum of problems</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={problemContinuum} width="200%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>A Continuum of solutions</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={solutionContinuum} width="200%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Default</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>Default to cutting a ticket and improving the code.</Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Glue Work</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={glueWork}></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Not the first time</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>
          You can find Nathalie&apos;s version of this talk in the Lunch and
          Learn folder on Google Drive
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Also available in blog form</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>https://noidea.dog/glue</Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>What is glue work?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>
          Any work you do that is isn&apos;t pushing features and fixing bugs
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Examples of glue work</Heading>
      <UnorderedList>
        <ListItem>Unblocking other developers</ListItem>
        <ListItem>PR Reviews</ListItem>
        <ListItem>Pair Programming</ListItem>
        <ListItem>Mentoring</ListItem>
        <ListItem>Updating Documentation</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>How much time?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={pieCharts}></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Supporting runs</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={supportingRun} width="80%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>We need to recognize each other</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>
          To help us realize the benefits of glue work, we need to recognize
          each others&apos; contributions.
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Glue emoji</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={glueWork}></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>When to glue emoji?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>
          Use it whenever someone posts something in Slack you think are
          useful to the team.
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Be effusive with praise</Heading>
      <UnorderedList>
        <ListItem>Post in #roses</ListItem>
        <ListItem>Recognize help in standup</ListItem>
        <ListItem>Tell your manager</ListItem>
        <ListItem>Tell their manager</ListItem>
        <ListItem>Thank them personally</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Space in the kitchen</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>Don&apos;t be daunted! Come join us in helping each other.</Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Questions? Comments?</Heading>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
