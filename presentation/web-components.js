import React from "react";
import { createRoot } from "react-dom/client";
import {
  CodePane,
  Deck,
  FlexBox,
  Heading,
  Image,
  Notes,
  Slide,
} from "spectacle";

import "normalize.css";
import theme from '../themes/default';

import webComponents from "../assets/webcomponents-ar21.png";
import butWhy from "../assets/but-why.gif";
import htmlSpec from "../assets/html-spec.png";

import attributes from "../code-examples/web-component-attributes.example";
import cssVariables from "../code-examples/web-component-css-variables.example";
import cssUsage from "../code-examples/web-component-css-usage.example";
import events from "../code-examples/web-component-events.example";
import htmlUsage from "../code-examples/web-component-html-usage.example";
import jsUsage from "../code-examples/web-component-js-usage.example";
import api from "../code-examples/web-component-api.example";
import unitTest from "../code-examples/web-component-unit-test.example";
import shadowDOM from "../code-examples/shadow-dom.example";
import template from "../code-examples/template.example";
import slot from "../code-examples/slot.example";

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading>Web Components</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={webComponents} width="65%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Why Web Components?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={butWhy} width="60%" />
      </FlexBox>
      <Notes>
        So why does it make sense for us to talk about Web Components?
      </Notes>
    </Slide>
    <Slide>
      <Heading>Why Web Components?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={htmlSpec} width="100%" />
      </FlexBox>
      <Notes>It&apos;s part of the spec!</Notes>
    </Slide>
    <Slide>
      <Heading>How do I use a web component?</Heading>
      <CodePane language="html">{htmlUsage}</CodePane>
    </Slide>
    <Slide>
      <Heading>How do I use a web component?</Heading>
      <CodePane language="javascript">{jsUsage}</CodePane>
    </Slide>
    <Slide>
      <Heading>How do I use a web component?</Heading>
      <CodePane language="javascript">{cssUsage}</CodePane>
    </Slide>
    <Slide>
      <Heading>How do I implement a web component?</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [1, 1],
          [2, 2],
          [4, 4],
          [6, 6],
          [7, 7],
          [8, 8],
          [9, 9],
        ]}
      >
        {api}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Attributes</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [1, 1],
          [2, 2],
          [4, 6],
          [8, 11],
          [13, 16],
          [18, 22],
          [24, 26],
        ]}
      >
        {attributes}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Events</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [4, 7],
          [9, 11],
          [13, 15],
          [17, 19],
        ]}
      >
        {events}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Shadow DOM</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [5, 5],
          [7, 8],
          [10, 11],
          [13, 14],
        ]}
      >
        {shadowDOM}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Templates</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [5, 10],
          [12, 13],
        ]}
      >
        {template}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Slots</Heading>
      <CodePane language="html">{slot}</CodePane>
    </Slide>
    <Slide>
      <Heading>How do I style a web component?</Heading>
      <CodePane
        language="css"
        highlightRanges={[
          [1, 3],
          [5, 7],
        ]}
      >
        {cssVariables}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>How do I test a web component?</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [1, 1],
          [3, 3],
          [4, 6],
          [8, 11],
          [13, 15],
        ]}
      >
        {unitTest}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Questions?</Heading>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
