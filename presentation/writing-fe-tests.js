import React from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Notes,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import "normalize.css";
import theme from "../themes/spectrum";

import blackBoxTesting from "../assets/black-box-testing.png";
import thatsAllFolks from "../assets/thats-all-folks.gif";

import basicTest from '../code-examples/ltr-basic-test.example';
import componentsAsFunctions from "../code-examples/components-as-functions.example";
import fakeTimers from '../code-examples/ltr-fake-timers.example';
import fibFinal from "../code-examples/fib-final.example";
import fibrMock from "../code-examples/fibr-mock.example";
import initialFib from "../code-examples/initial-fib.example";
import mockTest from '../code-examples/ltr-mock-test.example';
import namingAndHierarchy from '../code-examples/storybook-naming-hierarchy.example';
import screenQueryTypes from '../code-examples/ltr-screen-query-types.example';
import screenQueries from '../code-examples/ltr-screen-queries.example';
import spiesTest from '../code-examples/ltr-spies-test.example';
import userEvents from '../code-examples/ltr-user-events.example';
import userEventTypes from '../code-examples/ltr-user-event-types.example';
import usingArgs from '../code-examples/using-args.example';
import writingAStory from '../code-examples/writing-a-story.example';

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide>
      <Heading>Writing Frontend Tests</Heading>
      <Heading fontSize="h2" color="primary">
        With @testing-library/react and storybook
      </Heading>
    </Slide>
    <Slide>
      <Heading>Agenda</Heading>
      <UnorderedList>
        <ListItem>Unit and visual testing</ListItem>
        <ListItem>Unit testing theory</ListItem>
        <ListItem>Unit testing with @testing-library/react</ListItem>
        <ListItem>Visual testing with storybook</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fit caps>
        Unit testing and visual testing
      </Heading>
      <UnorderedList>
        <ListItem>Help guarantee correctness</ListItem>
        <ListItem>Faster to write</ListItem>
        <ListItem>Mimics actual user behavior</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fit caps>
        Unit testing vs visual testing
      </Heading>
      <FlexBox>
        <Box>
          <Heading fontSize="h3">Unit tests</Heading>
          <UnorderedList>
            <ListItem>Run on every build</ListItem>
            <ListItem>Behavior only</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading fontSize="h3">Visual tests</Heading>
          <UnorderedList>
            <ListItem>Run on-demand</ListItem>
            <ListItem>Includes appearance</ListItem>
          </UnorderedList>
        </Box>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fit caps>
        Why unit testing?
      </Heading>
      <UnorderedList>
          <ListItem>Safety when making changes</ListItem>
          <ListItem>Write better code</ListItem>
          <ListItem>Form of documentation</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
        <Heading>Components as pure functions</Heading>
        <CodePane language="typescript" highlightRanges={[[1, 4], [5, 7], [9, 14]]}>{componentsAsFunctions}</CodePane>
        <Notes>
            I&apos;m going to get started with something really simple and NOT a component so we can think about unit testing
            independent of React; then we&apos;ll add the particulars of the framework. Note that all three examples are the
            same for the purpose of unit testing -- they are a pure function that takes some input and returns some output.
        </Notes>
    </Slide>
    <Slide>
        <Heading>Getting started</Heading>
        <CodePane language="typescript" highlightRanges={[[1, 7], [9, 13]]}>{initialFib}</CodePane>
        <Notes>
            So here&apos;s a test! It doesn&apos;t really get any simpler than that. I include the
            export because, along with the function definition, it defines the contract
            we have with our client. There&apos;s not a lot to test here, so there&apos;s not a lot
            to distract us from the fact that we are testing inputs and outputs -- 
            in particular that given the same input, we get the same output, and the
            expected output at that. This is simple because this is a &quot;pure&quot; function.
        </Notes>
    </Slide>
    <Slide>
        <Heading>Refactoring</Heading>
        <CodePane language="typescript" highlightRanges={[[1, 12], [14, 16], [18, 23]]}>{fibrMock}</CodePane>
        <Notes>
            We&apos;ve refactored! Note that we don&apos;t have to change our tests, so we can feel confident
            that we haven&apos;t broken anything, and we know that we won&apos;t have to change any of the call
            sites, since the contract hasn&apos;t changed. Also note that we _don&apos;t_ test fibR -- its not
            part of our customer contract, so its just an implementation detail -- there are a lot of
            other ways to implement memoization that are more efficient (but less functional), and if
            we were to switch to one (for instance, hoisting the memo out of the function), we don&apos;t
            want to change the tests.
        </Notes>
    </Slide>
    <Slide>
      <Heading>Black box testing</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={blackBoxTesting} />
      </FlexBox>
    </Slide>
    <Slide>
        <Heading>More refactoring</Heading>
        <CodePane language="typescript" highlightRanges={[[1, 12], [14, 16], [18, 25]]}>{fibFinal}</CodePane>
        <Notes>
            Note that when we refactor a second time, our original unit test still covers the unit
            under test, while our newer test no longer applies.
        </Notes>
    </Slide>
    <Slide>
      <Heading>A basic unit test</Heading>
      <CodePane language="typescript" highlightRanges={[[1, 3], [5, 5], [6, 8], [10, 11], [13, 14]]}>{basicTest}</CodePane>
    </Slide>
    <Slide>
      <Heading>Available Screen Queries</Heading>
      <CodePane language="typescript" highlightRanges={[[1, 2], [3, 3], [4, 4], [5, 5], [6, 6], [8, 9], [10, 10], [12, 13]]}>{screenQueries}</CodePane>
    </Slide>
    <Slide>
      <Heading>Screen Query Types</Heading>
      <CodePane language="typescript" highlightRanges={[[1, 2], [4, 8], [10, 11]]}>{screenQueryTypes}</CodePane>
    </Slide>
    <Slide>
      <Heading>User events</Heading>
      <CodePane language="typescript" highlightRanges={[[2, 2], [4, 5], [7, 7], [9, 9]]}>{userEvents}</CodePane>
    </Slide>
    <Slide>
      <Heading>User Event Types</Heading>
      <CodePane language="typescript" highlightRanges={[[1, 9], [11, 12], [14, 15], [17, 25], [27, 31], [33, 34], [36, 37]]}>{userEventTypes}</CodePane>
    </Slide>
    <Slide>
      <Heading>Mocks</Heading>
      <CodePane language="typescript" highlightRanges={[[5, 7], [11, 12], [17, 18]]}>{mockTest}</CodePane>
    </Slide>
    <Slide>
      <Heading>Mocks: What to mock?</Heading>
      <UnorderedList>
        <ListItem>Unit tests should mock every import</ListItem>
        <ListItem>Integration tests only mock side-effects</ListItem>
        <ListItem>Both approaches have merits and drawbacks</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Spies</Heading>
      <CodePane language="typescript" highlightRanges={[[6, 8], [10, 11], [13, 14]]}>{spiesTest}</CodePane>
    </Slide>
    <Slide>
      <Heading>Faking Timers</Heading>
      <Text>When your code uses timers (<CodeSpan>setTimeout</CodeSpan>, <CodeSpan>setInterval</CodeSpan>, <CodeSpan>clearTimeout</CodeSpan>, <CodeSpan>clearInterval</CodeSpan>), use fake timers</Text>
      <CodePane language="typescript" highlightRanges={[[6, 6], [2, 4], [8, 11]]}>{fakeTimers}</CodePane>
    </Slide>
    <Slide>
      <Heading>Running the unit tests</Heading>
      <CodePane language="shell">
        yarn test --coverage
      </CodePane>
    </Slide>
    <Slide>
      <Heading fit caps>
        Why visual testing?
      </Heading>
      <UnorderedList>
        <ListItem>Safety when making changes</ListItem>
        <ListItem>Form of documentation</ListItem>
        <ListItem>Ship smaller changesets</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Writing a story</Heading>
      <CodePane language="typescript" highlightRanges={[[1, 2], [4, 6], [8, 8], [10, 10], [12, 14], [16, 18]]}>{writingAStory}</CodePane>
    </Slide>
    <Slide>
      <Heading>Using args</Heading>
      <CodePane language="typescript" highlightRanges={[[7, 10], [16, 20]]}>{usingArgs}</CodePane>
    </Slide>
    <Slide>
      <Heading>Naming and hierarchy</Heading>
      <CodePane language="typescript" highlightRanges={[[3, 3], [6, 6], [13, 13]]}>{namingAndHierarchy}</CodePane>
    </Slide>
    <Slide>
      <Heading>Mocking</Heading>
      <Text>We will want to mock network requests, but are yet to set up the infrastructure.</Text>
      <Text>Reach out if you need this and we can coordinate.</Text>
    </Slide>
    <Slide>
      <Heading>Viewing storybook</Heading>
      <CodePane language="shell">yarn storybook</CodePane>
    </Slide>
    <Slide>
        <Heading>Questions?</Heading>
        <FlexBox alignItems="center" justifyContent="center">
          <Image src={thatsAllFolks} width="50%" />
        </FlexBox>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
