import React from "react";

import {
  CodePane,
  Deck,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Notes,
  Stepper,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

require("normalize.css");

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

import webComponents from "../assets/webcomponents-ar21.png";
import butWhy from "../assets/but-why.gif";
import htmlSpec from "../assets/html-spec.png";
//import flavorOfTheWeek from "../assets/flavor-of-the-week.jpeg";

const attributes =
  require("raw-loader!../code-examples/web-component-attributes.example").default;
const cssVariables =
  require("raw-loader!../code-examples/web-component-css-variables.example").default;
const cssUsage =
  require("raw-loader!../code-examples/web-component-css-usage.example").default;
const events =
  require("raw-loader!../code-examples/web-component-events.example").default;
const htmlUsage =
  require("raw-loader!../code-examples/web-component-html-usage.example").default;
const jsUsage =
  require("raw-loader!../code-examples/web-component-js-usage.example").default;
const api =
  require("raw-loader!../code-examples/web-component-api.example").default;
const unitTest =
  require("raw-loader!../code-examples/web-component-unit-test.example").default;
const shadowDOM =
  require("raw-loader!../code-examples/shadow-dom.example").default;
const template =
  require("raw-loader!../code-examples/template.example").default;
const slot = require("raw-loader!../code-examples/slot.example").default;

export default class Presentation extends React.Component {
  render() {
    return (
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
          <Notes>It's part of the spec!</Notes>
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
  }
}
