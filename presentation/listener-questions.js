import React from "react";
import { createRoot } from "react-dom/client";
import {
  CodePane,
  Deck,
  Heading,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import "normalize.css";

import theme from "../themes/default";

import dataComputedMethods from "../code-examples/data-computed-methods.example";
import sjButton from "../code-examples/sj-button.example";
import vueData from "../code-examples/vue-data.example";
import vueComputed from "../code-examples/vue-computed.example";
import vueWatch from "../code-examples/vue-watch.example";
import vueMethod from "../code-examples/vue-method.example";
import vueProps from "../code-examples/vue-props.example";

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading>Data vs Computed vs Watch vs Methods</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [3, 5],
          [6, 10],
          [11, 15],
          [16, 20],
        ]}
      >
        {dataComputedMethods}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Data</Heading>
      <CodePane language="javascript">{vueData}</CodePane>
    </Slide>
    <Slide>
      <Heading>Data</Heading>
      <UnorderedList>
        <ListItem>Stores local data</ListItem>
        <ListItem>Reactive</ListItem>
        <ListItem>Cached</ListItem>
        <ListItem>No side effects</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Computed</Heading>
      <CodePane language="javascript">{vueComputed}</CodePane>
    </Slide>
    <Slide>
      <Heading>Computed</Heading>
      <UnorderedList>
        <ListItem>Computes local data from other properties</ListItem>
        <ListItem>Reactive</ListItem>
        <ListItem>Cached</ListItem>
        <ListItem>No side effects (please)</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Watch</Heading>
      <CodePane language="javascript">{vueWatch}</CodePane>
    </Slide>
    <Slide>
      <Heading>Watch</Heading>
      <UnorderedList>
        <ListItem>Does NOT store data</ListItem>
        <ListItem>Reactive</ListItem>
        <ListItem>Cached</ListItem>
        <ListItem>Side effects</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Watch</Heading>
      <Text>Deep watching and arguements to watch</Text>
    </Slide>
    <Slide>
      <Heading>Method</Heading>
      <CodePane language="javascript">{vueMethod}</CodePane>
    </Slide>
    <Slide>
      <Heading>Method</Heading>
      <UnorderedList>
        <ListItem>Does NOT store data</ListItem>
        <ListItem>NOT Reactive</ListItem>
        <ListItem>NOT cached</ListItem>
        <ListItem>Side effects</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Discovering Vue Components</Heading>
    </Slide>
    <Slide>
      <Heading>Discovering Documented Vue Components</Heading>
      <UnorderedList>
        <ListItem>Hidden Pages</ListItem>
        <ListItem>Storybook</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Discovering Unocumented Vue Components</Heading>
      <UnorderedList>
        <ListItem>Finding current uses</ListItem>
        <ListItem>Looking at the props</ListItem>
        <ListItem>Vue Dev Tools for existing DOM elements</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Find Current Uses</Heading>
      <CodePane language="javascript">{sjButton}</CodePane>
    </Slide>
    <Slide>
      <Heading>Looking at the props</Heading>
      <CodePane language="javascript">{vueProps}</CodePane>
    </Slide>
    <Slide>
      <Heading>Questions or comments?</Heading>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
