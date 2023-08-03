import React from "react";

import {
  CodePane,
  Deck,
  FlexBox,
  Heading,
  Image,
  ListItem,
  OrderedList,
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

const customContext =
  require("raw-loader!../code-examples/tybalt-create-context.example").default;
const defineButton =
  require("raw-loader!../code-examples/tybalt-button.example").default;
const unitTest =
  require("raw-loader!../code-examples/tybalt-tests.example").default;
const customValidator =
  require("raw-loader!../code-examples/tybalt-custom-validator.example").default;
const existingValidator =
  require("raw-loader!../code-examples/tybalt-existing-validator.example").default;
const customParser =
  require("raw-loader!../code-examples/tybalt-custom-parser.example").default;
const existingParser =
  require("raw-loader!../code-examples/tybalt-existing-parser.example").default;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading>Tybalt</Heading>
          <Heading fontSize="h2" color="primary">
            A toolkit for building web components
          </Heading>
        </Slide>
        <Slide>
          <Heading>What distinguishes us from other frameworks?</Heading>
          <UnorderedList>
            <ListItem>
              You{" "}
              <a href="https://www.youtube.com/watch?v=b2F-DItXtZs">
                should probably use other frameworks
              </a>
              , tbh!
            </ListItem>
            <ListItem>#UseThePlatform</ListItem>
            <ListItem>Built to solve the problems we see at Skilljar</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>Observables</Heading>
          <Text>
            We use the rxjs implementation of the{" "}
            <a href="https://github.com/tc39/proposal-observable">
              ECMAScript Observable proposal
            </a>
          </Text>
        </Slide>
        <Slide>
          <Heading>@tybalt/core</Heading>
          <FlexBox alignItems="center">
            <Text>The heart of the web component toolkit</Text>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Defining a component</Heading>
          <CodePane
            language="typescript"
            highlightRanges={[
              [1, 1],
              [3, 4],
              [9, 9],
              [20, 20],
              [11, 15],
              [18, 18],
              [19, 19],
              [21, 26],
              [27, 40],
              [41, 51],
              [5, 5],
              [45, 45],
              [7, 7],
              [52, 52],
            ]}
          >
            {defineButton}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Defining a context</Heading>
          <Text>
            this is our implementation of{" "}
            <a href="https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md">
              a community proposal
            </a>
          </Text>
          <CodePane
            language="typescript"
            highlightRanges={[
              [1, 1],
              [3, 8],
            ]}
          >
            {customContext}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>@tybalt/test-utils</Heading>
          <FlexBox alignItems="center">
            <Text>
              A stand-alone set of utilities for unit testing web components
            </Text>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Defining a component</Heading>
          <CodePane
            language="typescript"
            highlightRanges={[
              [4, 11],
              [13, 13],
              [14, 14],
              [16, 16],
            ]}
          >
            {unitTest}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>@tybalt/validator</Heading>
          <FlexBox alignItems="center">
            <Text>A stand-alone library for validating things</Text>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Using existing validators</Heading>
          <CodePane
            language="typescript"
            highlightRanges={[
              [1, 1],
              [3, 3],
              [5, 6],
            ]}
          >
            {existingValidator}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Creating custom validators</Heading>
          <CodePane
            language="typescript"
            highlightRanges={[
              [1, 9],
              [3, 5],
              [6, 6],
              [7, 7],
            ]}
          >
            {customValidator}
          </CodePane>
        </Slide>{" "}
        <Slide>
          <Heading>Using existing validators</Heading>
          <CodePane
            language="typescript"
            highlightRanges={[
              [1, 1],
              [3, 3],
              [5, 6],
            ]}
          >
            {existingValidator}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>@tybalt/parser</Heading>
          <FlexBox alignItems="center">
            <Text>
              A set of parsers for parsing custom web component attributes
            </Text>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Using existing parsers</Heading>
          <CodePane language="typescript">{existingParser}</CodePane>
        </Slide>
        <Slide>
          <Heading>Creating custom parsers</Heading>
          <CodePane language="typescript">{customParser}</CodePane>
        </Slide>
        <Slide>
          <Heading>@tybalt/cli</Heading>
          <Text>Standardize common tasks</Text>
        </Slide>
        <Slide>
          <Heading>Tybalt plugins</Heading>
          <UnorderedList>
            <ListItem>@tybalt/eslint-plugin</ListItem>
            <ListItem>@tybalt/esbuild-plugin</ListItem>
            <ListItem>@tybalt/eleventy-plugin</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>How do you govern a foss project?</Heading>
          <UnorderedList>
            <ListItem>
              <a href="https://github.com/doug-wade/tybalt/blob/master/CODE_OF_CONDUCT.md">
                Code of Conduct
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/doug-wade/tybalt/blob/master/CONTRIBUTING.md">
                CONTRIBUTING.md
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/doug-wade/tybalt/issues">
                Issue tracking
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/doug-wade/tybalt/actions">
                Automation
              </a>
            </ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>Demo!</Heading>
          <UnorderedList>
            <ListItem>
              <a href="https://github.com/doug-wade/tybalt/pull/355">
                release a new version of the website
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/doug-wade/tybalt/pull/354">
                release a new version of the framework
              </a>
            </ListItem>
          </UnorderedList>
        </Slide>
      </Deck>
    );
  }
}
