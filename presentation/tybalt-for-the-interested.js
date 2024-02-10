import React from "react";
import { createRoot } from "react-dom/client";
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

import "normalize.css";

import theme from "../themes/default";

import butWhy from "../assets/but-why.gif";

import scatteredProps from "../code-examples/scattered-props.example";
import imperativeDom from "../code-examples/imperative-dom.example";
import tybaltName from "../code-examples/tybalt-name.example";
import tybaltCss from "../code-examples/tybalt-css.example";
import tybaltHelloSayer from "../code-examples/tybalt-hello-sayer.example";
import tybaltProps from "../code-examples/tybalt-props.example";
import tybaltRender from "../code-examples/tybalt-render.example";
import tybaltSetup from "../code-examples/tybalt-setup.example";
import tybaltShadowMode from "../code-examples/tybalt-shadowmode.example";
import tybaltSwitch from "../code-examples/tybalt-switch.example";
import tybaltTemplate from "../code-examples/tybalt-template.example";
import testingAttributes from "../code-examples/testing-attributes.example";
import testingClasses from "../code-examples/testing-classes.example";
import testingExists from "../code-examples/testing-exists.example";
import wrappingValidators from "../code-examples/wrapping-validators.example";
import composingValidators from "../code-examples/composing-validators.example";

const Presentation = () => (
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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
