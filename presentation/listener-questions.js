import React from "react";

import {
  CodePane,
  Deck,
  Heading,
  ListItem,
  Slide,
  UnorderedList,
} from "spectacle";

require("normalize.css");

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

const sjButton =
  require("raw-loader!../code-examples/sj-button.example").default;
const vueData = require("raw-loader!../code-examples/vue-data.example").default;
const vueComputed =
  require("raw-loader!../code-examples/vue-computed.example").default;
const vueWatch =
  require("raw-loader!../code-examples/vue-watch.example").default;
const vueMethod =
  require("raw-loader!../code-examples/vue-method.example").default;
const vueProps =
  require("raw-loader!../code-examples/vue-props.example").default;

export default class Presentation extends React.Component {
  render() {
    return (
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
            {mountVsShallowMount}
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
            <ListItem>Side effects</ListItem>
          </UnorderedList>
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
      </Deck>
    );
  }
}
