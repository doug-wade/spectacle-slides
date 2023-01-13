import React from "react";

import {
  CodePane,
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

require("normalize.css");

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

import butWhy from "../assets/but-why.gif";

const scatteredProps =
  require("raw-loader!../code-examples/scattered-props.example").default;
const imperativeDom =
  require("raw-loader!../code-examples/imperative-dom.example").default;
const tybaltName =
  require("raw-loader!../code-examples/tybalt-name.example").default;
const tybaltCss =
  require("raw-loader!../code-examples/tybalt-css.example").default;
const tybaltHelloSayer =
  require("raw-loader!../code-examples/tybalt-hello-sayer.example").default;
const tybaltProps =
  require("raw-loader!../code-examples/tybalt-props.example").default;
const tybaltRender =
  require("raw-loader!../code-examples/tybalt-render.example").default;
const tybaltSetup =
  require("raw-loader!../code-examples/tybalt-setup.example").default;
const tybaltShadowMode =
  require("raw-loader!../code-examples/tybalt-shadowmode.example").default;
const tybaltSwitch =
  require("raw-loader!../code-examples/tybalt-switch.example").default;
const tybaltTemplate =
  require("raw-loader!../code-examples/tybalt-template.example").default;
const testingAttributes =
  require("raw-loader!../code-examples/testing-attributes.example").default;
const testingClasses =
  require("raw-loader!../code-examples/testing-classes.example").default;
const testingExists =
  require("raw-loader!../code-examples/testing-exists.example").default;
const wrappingValidators =
  require("raw-loader!../code-examples/wrapping-validators.example").default;
const composingValidators =
  require("raw-loader!../code-examples/composing-validators.example").default;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading>Tybalt</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Text size={4}>
              <i>for the interested</i>
            </Text>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Why?</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={butWhy} width="60%" />
          </FlexBox>
          <Notes>Why would you spend so much time writing a toolkit?</Notes>
        </Slide>
        <Slide>
          <Heading>Props definitions are scattered</Heading>
          <CodePane
            language="javascript"
            highlightRanges={[
              [1, 3],
              [6, 8],
              [13, 16],
              [19, 21],
              [23, 27],
              [29, 31],
            ]}
          >
            {scatteredProps}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Updating the DOM is imperative</Heading>
          <CodePane language="javascript">{imperativeDom}</CodePane>
        </Slide>
        <Slide>
          <Heading>The reconciler</Heading>
          <Text>
            We need a reconciler that allows for customers to attach a listener
            to our components without overwriting them.
          </Text>
        </Slide>
        <Slide>
          <Heading>@tybalt/core</Heading>
        </Slide>
        <Slide>
          <Heading>Component names</Heading>
          <CodePane language="javascript">{tybaltName}</CodePane>
        </Slide>
        <Slide>
          <Heading>Shadow Mode</Heading>
          <CodePane language="javascript">{tybaltShadowMode}</CodePane>
        </Slide>
        <Slide>
          <Heading>Template</Heading>
          <CodePane language="javascript">{tybaltTemplate}</CodePane>
        </Slide>
        <Slide>
          <Heading>Props</Heading>
          <CodePane language="javascript">{tybaltProps}</CodePane>
        </Slide>
        <Slide>
          <Heading>Render</Heading>
          <CodePane language="javascript">{tybaltRender}</CodePane>
        </Slide>
        <Slide>
          <Heading>Setup</Heading>
          <CodePane language="javascript">{tybaltSetup}</CodePane>
        </Slide>
        <Slide>
          <Heading>CSS</Heading>
          <CodePane language="javascript">{tybaltCss}</CodePane>
        </Slide>
        <Slide>
          <Heading>Putting It All Together</Heading>
          <CodePane
            language="javascript"
            highlightRanges={[
              [1, 2],
              [4, 14],
              [17, 17],
              [18, 18],
              [19, 24],
              [25, 29],
              [30, 34],
              [35, 37],
            ]}
          >
            {tybaltHelloSayer}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Available components</Heading>
          <CodePane language="javascript" highlightRanges={[8, 12]}>
            {tybaltSwitch}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>@tybalt/validator</Heading>
        </Slide>
        <Slide>
          <Heading>premade validators</Heading>
          <UnorderedList>
            <ListItem>matchesPattern</ListItem>
            <ListItem>oneOf</ListItem>
            <ListItem>required</ListItem>
            <ListItem>string</ListItem>
            <ListItem>url</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>wrapping validators</Heading>
          <CodePane language="javascript">{wrappingValidators}</CodePane>
        </Slide>
        <Slide>
          <Heading>composing validators</Heading>
          <CodePane language="javascript">{composingValidators}</CodePane>
        </Slide>
        <Slide>
          <Heading>@tybalt/test-utils</Heading>
        </Slide>
        <Slide>
          <Heading>Exists</Heading>
          <CodePane language="javascript">{testingExists}</CodePane>
        </Slide>
        <Slide>
          <Heading>Classes</Heading>
          <CodePane language="javascript">{testingClasses}</CodePane>
        </Slide>
        <Slide>
          <Heading>Attributes</Heading>
          <CodePane language="javascript">{testingAttributes}</CodePane>
        </Slide>
        <Slide>
          <Heading>Questions?</Heading>
          <Text>
            Find out more:
            <UnorderedList>
              <ListItem>The docs: https://doug-wade.github.io/tybalt</ListItem>
              <ListItem>
                The examples:
                https://github.com/doug-wade/tybalt/tree/master/packages/example/src
              </ListItem>
              <ListItem>
                This presentation: https://github.com/doug-wade/spectacle-slides
              </ListItem>
              <ListItem>The Discord: https://discord.gg/FHpfstT7Dw</ListItem>
            </UnorderedList>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
