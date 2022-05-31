// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Stepper,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

// Require CSS
require("normalize.css");

const buttonsAndLinks =
  require("raw-loader!../code-examples/buttons-and-links.example").default;
const divsDonts =
  require("raw-loader!../code-examples/divs-donts.example").default;
const landmarkElements =
  require("raw-loader!../code-examples/landmark-elements.example").default;
const headerElements =
  require("raw-loader!../code-examples/header-elements.example").default;
const providedComponents =
  require("raw-loader!../code-examples/provided-components.example").default;
const tabindex =
  require("raw-loader!../code-examples/tabindex.example").default;
const labels = require("raw-loader!../code-examples/labels.example").default;
const alttext = require("raw-loader!../code-examples/alttext.example").default;
const ariaLabel =
  require("raw-loader!../code-examples/aria-label.example").default;

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

import accessibilityTree from "../assets/accessibility-tree.png";
import axePluginOutput from "../assets/axe-plugin-output.png";
import chromeVox from "../assets/chrome-vox.png";
import letsGetColorblind from "../assets/lets-get-colorblind.png";
import lighthouseAccessibility from "../assets/lighthouse-accessibility.png";
import simDaltonism from "../assets/sim-daltonism.png";
import voiceOver from "../assets/voice-over.png";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading>Web Accessibility</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Text>Make the web usable for everyone!</Text>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>What is Accessibility?</Heading>
        </Slide>
        <Slide>
          <Heading>What is Accessibility?</Heading>
          <Text>
            Accessibility is making a website usuable by as many people as
            possible.
          </Text>
        </Slide>
        <Slide>
          <Heading>Why Accessibility?</Heading>
          <UnorderedList>
            <Stepper values={["0"]}>
              {(value, step, isActive) =>
                isActive ? (
                  <ListItem>It's the right thing to do</ListItem>
                ) : null
              }
            </Stepper>
            <Stepper values={["0"]}>
              {(value, step, isActive) =>
                isActive ? <ListItem>It's required by law</ListItem> : null
              }
            </Stepper>
            <Stepper values={["0"]}>
              {(value, step, isActive) =>
                isActive ? (
                  <ListItem>You tend to build better stuff</ListItem>
                ) : null
              }
            </Stepper>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>Ancedata</Heading>
          <UnorderedList>
            <Stepper values={["0"]}>
              {(value, step, isActive) =>
                isActive ? (
                  <ListItem>Using a laptop when a trackpad is broken</ListItem>
                ) : null
              }
            </Stepper>
            <Stepper values={["0"]}>
              {(value, step, isActive) =>
                isActive ? (
                  <ListItem>Using a phone while holding a dog</ListItem>
                ) : null
              }
            </Stepper>
            <Stepper values={["0"]}>
              {(value, step, isActive) =>
                isActive ? (
                  <ListItem>Using a calendar that is broken</ListItem>
                ) : null
              }
            </Stepper>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>Accessibility is our responsibility!</Heading>
          <Text>
            Sometimes, like for copy or one-handed mobile, we need to rely on
            product and design, but as the final stop on the way to prod, we are
            the arbiters of accessibility
          </Text>
        </Slide>
        <Slide>
          <Heading>Accessibility Standards</Heading>
        </Slide>
        <Slide>
          <Heading>Perceivable</Heading>
          <Text>
            Users must be able to perceive the information being presented (it
            can't be invisible to all of their senses).
          </Text>
        </Slide>
        <Slide>
          <Heading>Perceivable</Heading>
          <UnorderedList>
            <ListItem>Provide text alternatives for non-text content.</ListItem>
            <ListItem>
              Provide captions and other alternatives for multimedia.
            </ListItem>
            <ListItem>
              Create content that can be presented in different ways, including
              by assistive technologies, without losing meaning.
            </ListItem>
            <ListItem>
              Make it easier for users to see and hear content.
            </ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>Operable</Heading>
          <Text>
            Users must be able to operate the interface (the interface cannot
            require interaction that a user cannot perform).
          </Text>
        </Slide>
        <Slide>
          <Heading>Operable</Heading>
          <UnorderedList>
            <ListItem>
              Make all functionality available from a keyboard.
            </ListItem>
            <ListItem>Give users enough time to read and use content.</ListItem>
            <ListItem>
              Do not use content that causes seizures or physical reactions.
            </ListItem>
            <ListItem>Help users navigate and find content.</ListItem>
            <ListItem>
              Make it easier to use inputs other than keyboard.
            </ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>Understandable</Heading>
          <Text>
            Users must be able to understand the information as well as the
            operation of the user interface (the content or operation cannot be
            beyond their understanding).
          </Text>
        </Slide>
        <Slide>
          <Heading>Understandable</Heading>
          <UnorderedList>
            <ListItem>Make text readable and understandable.</ListItem>
            <ListItem>
              Make content appear and operate in predictable ways.
            </ListItem>
            <ListItem>Help users avoid and correct mistakes.</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>Robust</Heading>
          <Text>
            Users must be able to access the content as technologies advance (as
            technologies and user agents evolve, the content should remain
            accessible).
          </Text>
        </Slide>
        <Slide>
          <Heading>Robust</Heading>
          <UnorderedList>
            <ListItem>
              Maximize compatibility with current and future user tools.
            </ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>Tips for writing accessible websites</Heading>
        </Slide>
        <Slide>
          <Heading>Semantic HTML</Heading>
          <Text>
            This is important because it gives inherent meaning to elements that
            assisstive technologies can parse.
          </Text>
        </Slide>
        <Slide>
          <Heading>Be careful of divs</Heading>
          <Text>
            If you use a div with an onclick handler, for instance, then screen
            readers don't know that you can click on it.
          </Text>
          <Text>
            When you use the wrong element, you have to reimplement much of the
            associated functionality, like keyboard interactions.
          </Text>
        </Slide>
        <Slide>
          <Heading>Be careful of divs</Heading>
          <CodePane language="html">{divsDonts}</CodePane>
        </Slide>
        <Slide>
          <Heading>Buttons vs links</Heading>
          <Text>
            Links move you around the internet, and buttons perform actions.
          </Text>
          <Text>
            Users employing screenreaders can't see that you styled your link as
            a button.
          </Text>
        </Slide>
        <Slide>
          <Heading>Buttons vs links</Heading>
          <CodePane language="html">{buttonsAndLinks}</CodePane>
        </Slide>
        <Slide>
          <Heading>Landmark Elements</Heading>
          <Text>
            When we use landmark elements, users don't have to tab through
            everything to get to the part that you want.
          </Text>
        </Slide>
        <Slide>
          <Heading>Landmark Elements</Heading>
          <CodePane language="html">{landmarkElements}</CodePane>
        </Slide>
        <Slide>
          <Heading>Headers</Heading>
          <Text>
            Most non-sighted users jump through all the headers first to
            understand the page hierarchy.
          </Text>
        </Slide>
        <Slide>
          <Heading>Headers</Heading>
          <CodePane language="html">{headerElements}</CodePane>
        </Slide>
        <Slide>
          <Heading>Use provided UI components</Heading>
          <Text>
            Use components out of the Skilljar component library. We spend a lot
            of time making them accessible!
          </Text>
        </Slide>
        <Slide>
          <Heading>Use provided UI components</Heading>
          <CodePane language="html">{providedComponents}</CodePane>
        </Slide>
        <Slide>
          <Heading>tabindex</Heading>
          <Text>
            Make sure that your feature can be used and accessed with the
            keyboard only.
          </Text>
        </Slide>
        <Slide>
          <Heading>tabindex</Heading>
          <CodePane language="html">{tabindex}</CodePane>
        </Slide>
        <Slide>
          <Heading>Use labels for controls</Heading>
          <Text>
            Screenreaders can't describe what a control is for without a label.
          </Text>
        </Slide>
        <Slide>
          <Heading>Use labels for controls</Heading>
          <CodePane language="html">{labels}</CodePane>
        </Slide>
        <Slide>
          <Heading>alt text</Heading>
          <Text>Clearly describe what's happening in an image.</Text>
        </Slide>
        <Slide>
          <Heading>alt text</Heading>
          <CodePane language="html">{alttext}</CodePane>
        </Slide>
        <Slide>
          <Heading>ARIA</Heading>
          <Text>ARIA lets you fill in gaps in the accessibility tree.</Text>
        </Slide>
        <Slide>
          <Heading>ARIA label</Heading>
          <Text>
            Provides something for the screen reader to say when there is no
            associated label.
          </Text>
        </Slide>
        <Slide>
          <Heading>ARIA label</Heading>
          <CodePane language="html">{ariaLabel}</CodePane>
        </Slide>
        <Slide>
          <Heading>Tools</Heading>
        </Slide>
        <Slide>
          <Heading>Color Blindness: Let's Get Colorblind</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={letsGetColorblind} width="45%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Color Blindness: Sim Daltonism</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={simDaltonism} width="55%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Screen Reader: Chrome Vox</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={chromeVox} width="50%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Screen Reader: VoiceOver</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={voiceOver} width="65%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Developer Tools</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={accessibilityTree} width="65%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Auditing Tools: Lighthouse</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={lighthouseAccessibility} width="75%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Auditing Tools: aXe plugin</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={axePluginOutput} width="65%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
