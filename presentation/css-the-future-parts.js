import React from "react";

import {
  CodePane,
  Deck,
  FlexBox,
  Heading,
  Image,
  Link,
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

import cssModularModel from "../assets/css-modular-model.png";
import newCssFeatures from "../assets/new-css-features.png";
import postcssLogo from "../assets/postcss.svg";
import w3logo from "../assets/w3-logo.jpg";

const containerQueries =
  require("raw-loader!../code-examples/container-queries.example").default;
const cssEnvVariables =
  require("raw-loader!../code-examples/css-environment-variables.example").default;
const cssLayers =
  require("raw-loader!../code-examples/css-layers.example").default;
const cssNesting =
  require("raw-loader!../code-examples/css-nesting.example").default;
const cssNot = require("raw-loader!../code-examples/css-not.example").default;
const cssWhenElse =
  require("raw-loader!../code-examples/css-when-else.example").default;
const customSelectors =
  require("raw-loader!../code-examples/custom-selectors.example").default;
const isPsuedoSelector =
  require("raw-loader!../code-examples/is-psuedo-selector.example").default;
const whyNotCSSVariables =
  require("raw-loader!../code-examples/why-not-css-variables.example").default;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading>CSS: The Future Parts</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={w3logo} width="50%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>CSS Modularization</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={cssModularModel} width="30%" />
          </FlexBox>
          <Text textAlign={"center"} fontSize={"14px"}>
            Credit for image to{" "}
            <a href="https://fantasai.inkedblade.net/">
              https://fantasai.inkedblade.net/
            </a>
          </Text>
        </Slide>
        <Slide>
          <Heading>CSS: The Path to the Standard</Heading>
          <Text textAlign={"center"}>WD → CR → PR → REC</Text>
        </Slide>
        <Slide>
          <Heading>CSS: The Path to the Standard</Heading>
          <Text textAlign={"center"}>WD → CR → PR → REC</Text>
          <Text>Working Draft (WD)</Text>
          <Notes>
            This is the design phase of a W3C spec. The WG iterates the spec in
            response to internal and external feedback. There are two
            sub-stages: “First Public Working Draft” (FPWD) and “Last Call
            Working Draft” (LCWD)
          </Notes>
        </Slide>
        <Slide>
          <Heading>CSS: The Path to the Standard</Heading>
          <Text textAlign={"center"}>WD → CR → PR → REC</Text>
          <Text>Candidate Recommendation (CR)</Text>
          <Notes>This is the testing phase of a W3C spec.</Notes>
        </Slide>
        <Slide>
          <Heading>CSS: The Path to the Standard</Heading>
          <Text textAlign={"center"}>WD → CR → PR → REC</Text>
          <Text>Proposed Recommendation (PR)</Text>
          <Notes>
            During this phase the W3C Advisory Committee must approve the
            transition to REC.
          </Notes>
        </Slide>
        <Slide>
          <Heading>CSS: The Path to the Standard</Heading>
          <Text textAlign={"center"}>WD → CR → PR → REC</Text>
          <Text>Recommendation (REC)</Text>
          <Notes>
            This is the completed state of a W3C spec and represents a
            maintainance phase.
          </Notes>
        </Slide>
        <Slide>
          <Heading>PostCSS</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={postcssLogo} width="30%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>The Features!</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={newCssFeatures} width="50%" />
          </FlexBox>
          <Notes>
            In order of how excited I am descending, in case we run out of time.
          </Notes>
        </Slide>
        <Slide>
          <Heading>Layers</Heading>
          <CodePane
            language="css"
            highlightRanges={[
              [1, 1],
              [3, 7],
              [9, 13],
            ]}
          >
            {cssLayers}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Custom Selectors</Heading>
          <CodePane
            language="css"
            highlightRanges={[
              [1, 1],
              [3, 5],
            ]}
          >
            {customSelectors}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Nesting</Heading>
          <CodePane
            language="css"
            highlightRanges={[
              [1, 9],
              [12, 18],
            ]}
          >
            {cssNesting}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>:has</Heading>
          <CodePane language="css">{`
.course-tile:has(.completed-ribbon) {
  color: rebeccapurple;
}
          `}</CodePane>
        </Slide>
        <Slide>
          <Heading>:not</Heading>
          <CodePane language="css">{cssNot}</CodePane>
        </Slide>
        <Slide>
          <Heading>Container Queries</Heading>
          <CodePane
            language="css"
            highlightRanges={[
              [1, 5],
              [3, 3],
            ]}
          >
            {containerQueries}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Container units</Heading>
          <UnorderedList>
            <ListItem>cqw: 1% of a query container's width</ListItem>
            <ListItem>cqh: 1% of a query container's height</ListItem>
            <ListItem>cqi: 1% of a query container's inline size</ListItem>
            <ListItem>cqb: 1% of a query container's block size</ListItem>
            <ListItem>cqmin: The smaller value of either cqi or cqb</ListItem>
            <ListItem>cqmax: The larger value of either cqi or cqb</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>When/Else Rules</Heading>
          <CodePane
            language="css"
            highlightRanges={[
              [1, 1],
              [3, 3],
              [5, 5],
              [10, 13],
              [14, 21],
              [23, 30],
            ]}
          >
            {cssWhenElse}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>:is()</Heading>
          <CodePane
            language="css"
            highlightRanges={[
              [1, 3],
              [6, 11],
            ]}
          >
            {isPsuedoSelector}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Environment Variables</Heading>
          <CodePane language="css">{cssEnvVariables}</CodePane>
        </Slide>
        <Slide>
          <Heading>Why Not CSS Variables</Heading>
          <CodePane
            language="css"
            highlightRanges={[
              [1, 4],
              [6, 7],
            ]}
          >
            {whyNotCSSVariables}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>clamp</Heading>
          <CodePane language="css">{`
button {
  font-size: clamp(1rem, 2.5vw, 2rem);
}
          `}</CodePane>
        </Slide>
        <Slide>
          <Heading>overscroll-behavior</Heading>
          <CodePane language="css">{`
overscroll-behavior: auto;
overscroll-behavior: contain;
overscroll-behavior: none;
          `}</CodePane>
          <Notes>This is for social media-style pull to refresh</Notes>
        </Slide>
        <Slide>
          <Heading>Questions?</Heading>
          <Text>
            Find out more:
            <UnorderedList>
              <ListItem>
                <Link href="https://github.com/doug-wade/spectacle-slides">
                  This presentation
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://lists.w3.org/Archives/Public/www-style/">
                  www-style mailing list
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/w3c/csswg-drafts">
                  CSS Specification drafts
                </Link>
              </ListItem>
            </UnorderedList>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
