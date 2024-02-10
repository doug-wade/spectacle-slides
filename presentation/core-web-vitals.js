import React from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  ListItem,
  Notes,
  Progress,
  Quote,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import theme from "../themes/default";

import cypressWebVitalsTest from "../code-examples/cypress-web-vitals-test.example";

import cypressOutput from '../assets/cypress-output.png';
import lighthousePerformance from '../assets/lighthouse-performance.png';
import performanceTab from '../assets/performance-tab.png';
import sentryMehIndicator from '../assets/sentry-meh-indicator.png';
import transactionsTable from '../assets/sentry-transactions-table.png';
import webVitalsPage from '../assets/sentry-web-vitals-page.png';
import worstWebVitalsGraph from '../assets/sentry-worst-web-vitals-graph.png';

import "normalize.css";

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
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck template={template} theme={theme}>
    <Slide>
      <Heading>
        Frontend Performance Monitoring
      </Heading>
      <Text fit bold textAlign="center">
        Understanding Frontend Performance
      </Text>
    </Slide>
    <Slide>
        <Heading>Why Core Web Vitals?</Heading>
    </Slide>
    <Slide>
        <Heading>Why Core Web Vitals?</Heading>
        <UnorderedList>
          <ListItem>User-centric</ListItem>
        </UnorderedList>
        <Notes>
          Core Web Vitals are directly tied to behaviors that affect real users
          Core Web Vitals are based on Real User Monitoring
        </Notes>
    </Slide>
    <Slide>
        <Heading>Why Core Web Vitals?</Heading>
        <UnorderedList>
          <ListItem>User-centric</ListItem>
          <ListItem>SEO</ListItem>
        </UnorderedList>
        <Notes>
          Core Web Vitals gathered in the field by Chrome are used by Google to help determine search results
        </Notes>
    </Slide>
    <Slide>
        <Heading>What are the Core Web Vitals?</Heading>
    </Slide>
    <Slide>
      <Heading>Largest Contentful Paint (LCP)</Heading>
      <Quote>The Largest Contentful Paint (LCP) metric reports the render time of the largest image or text block visible within the viewport, relative to when the page first started loading.</Quote>
    </Slide>
    <Slide>
      <Heading>First Input Delay (FID)</Heading>
      <Quote>FID measures the time from when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.</Quote>
    </Slide>
    <Slide>
      <Heading>Cumulative Layout Shift (CLS)</Heading>
      <Quote>CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.</Quote>
    </Slide>
    <Slide>
      <Heading>Cumulative Layout Shift (CLS)</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text><a style={{color: "white"}} href="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability2.webm">
          Watch me!
        </a></Text>
      </FlexBox>
    </Slide>
    <Slide>
        <Heading>How do I check the Core Web Vitals?</Heading>
    </Slide>
    <Slide>
        <Heading>Chrome Dev Tools</Heading>
    </Slide>
    <Slide>
      <Heading>Dev Tools: Lighthouse Tab</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={lighthousePerformance} width="85%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Dev Tools: Performance Tab</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={performanceTab} width="85%" />
      </FlexBox>
    </Slide>
    <Slide>
        <Heading>Sentry</Heading>
    </Slide>
    <Slide>
        <Heading>Sentry: Worst Web Vitals Graph</Heading>
        <FlexBox alignItems="center" justifyContent="center">
          <Image src={sentryMehIndicator} />
        </FlexBox>
    </Slide>
    <Slide>
        <Heading>Sentry: Worst Web Vitals Graph</Heading>
        <FlexBox alignItems="center" justifyContent="center">
          <Image src={worstWebVitalsGraph} />
        </FlexBox>
    </Slide>
    <Slide>
        <Heading>Sentry: Transactions Table</Heading>
        <FlexBox alignItems="center" justifyContent="center">
          <Image src={transactionsTable} width="85%" />
        </FlexBox>
    </Slide>
    <Slide>
        <Heading>Sentry: Web Vitals Page</Heading>
        <FlexBox alignItems="center" justifyContent="center">
          <Image src={webVitalsPage} width="70%" />
        </FlexBox>
    </Slide>
    <Slide>
        <Heading>Cypress</Heading>
    </Slide>
    <Slide>
        <Heading>Cypress: Code</Heading>
        <CodePane language="javascript">{cypressWebVitalsTest}</CodePane>
    </Slide>
    <Slide>
        <Heading>Cypress: Output</Heading>
        <FlexBox alignItems="center" justifyContent="center">
          <Image src={cypressOutput} width="45%" />
        </FlexBox>
    </Slide>
    <Slide>
      <Heading>Questions?</Heading>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
