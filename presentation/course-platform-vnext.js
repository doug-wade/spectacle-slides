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

import nightOwl from "react-syntax-highlighter/dist/esm/styles/prism/night-owl";

require("normalize.css");

const theme = {
  colors: {
    primary: "#4D94DB",
    secondary: "#CCE0F5",
    orange: "#FB7544",
    purple: "#6150AC",
    white: "#ffffff",
    yellow: "#F4C050",
    green: "#63CE9A",
    turquoise: "#47C1BF",
    red: "#FB4451",
    tertiary: "#001429",
  },
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

import butWhy from "../assets/but-why.gif";
import cssBoxModel from "../assets/css-box-model.png";
import breakingChange from "../assets/cp-breaking-change.png";
import headerHtmlInput from "../assets/header-html-input.png";
import htmlBlock from "../assets/html-blocks.png";
import htmlBoxes from "../assets/html-boxes.drawio.png";
import mdnWebComponentDocs from "../assets/mdn-web-component-docs.png";
import pageBuilderComposer from "../assets/page-builder-composer.png";
import shadowDom from "../assets/shadow-dom.jpg";
import skilljarLogo from "../assets/skilljar_logo.svg";
import themeInput from "../assets/theme-input.png";
import twoSearchBoxes from "../assets/two-search-boxes.png";
import webComponents from "../assets/webcomponents-ar21.png";
import whatGoesIntoAComponent from "../assets/what-goes-into-a-component.drawio.png";

const announcementBanner =
  require("raw-loader!../code-examples/announcement-banner.example").default;
const helloSayerComponent =
  require("raw-loader!../code-examples/hello-sayer-component.example").default;
const legacyAnnouncementBanner =
  require("raw-loader!../code-examples/legacy-announcement-banner.example").default;
const searchBoxHtml =
  require("raw-loader!../code-examples/search-box-html.example").default;
const styledButtonComponent =
  require("raw-loader!../code-examples/styled-button-component.example").default;

const tinyCodeTheme = {
  ...nightOwl,
  'code[class*="language-"]': {
    ...nightOwl['code[class*="language-"]'],
    fontSize: ".5em",
  },
  'pre[class*="language-"]': {
    ...nightOwl['pre[class*="language-"]'],
    lineHeight: ".5",
  },
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading>Course Platform v.next</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={skilljarLogo} width="40%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Hi I'm Doug!</Heading>
          <UnorderedList>
            <ListItem>On the Frontend team</ListItem>
            <ListItem>At Skilljar two years</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading>Agenda</Heading>
          <OrderedList>
            <ListItem>Technical Overview</ListItem>
            <ListItem>FAQ</ListItem>
            <ListItem>Questions</ListItem>
          </OrderedList>
        </Slide>
        <Slide>
          <Heading>Web developers draw boxes</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={cssBoxModel} width="40%"></Image>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>We use HTML elements to do it</Heading>
          <CodePane language="html">{`
<form class="input-form">
  <input type="text"></input>
  <button></button>
</form>
          `}</CodePane>
        </Slide>
        <Slide>
          <Heading>We can add custom elements</Heading>
          <CodePane language="html">{`
<skilljar-hero-image 
  src="http://www.skilljar.com/logo" 
  alt-text="the skilljar logo">
</skilljar-hero-image>
<proserv-announcement-banner background-color="rebeccapurple">
  This is an announcement
</proserv-announcement-banner>
          `}</CodePane>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={htmlBoxes} width="40%"></Image>
          </FlexBox>
        </Slide>
        <Slide>
          <FlexBox alignItems="flex-start" justifyContent="flex-start">
            <div>
              <Text>Future code</Text>
              <CodePane language="html" theme={tinyCodeTheme}>
                {announcementBanner}
              </CodePane>
            </div>
            <div>
              <Text>Current code</Text>
              <CodePane language="html" theme={tinyCodeTheme}>
                {legacyAnnouncementBanner}
              </CodePane>
            </div>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Custom components are standards</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={webComponents} width="65%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Custom components are well-documented</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={mdnWebComponentDocs} width="65%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Custom components are available on every page</Heading>
          <Text>
            We can allow clients to use our custom components anywhere they can
            input html
          </Text>
        </Slide>
        <Slide>
          <Heading>Custom components can be protected</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={shadowDom}></Image>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>But why?</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={butWhy} width="60%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Customer DOM access slows development</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={breakingChange} width="60%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Two Search Boxes</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={twoSearchBoxes} width="60%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Search Box html</Heading>
          <CodePane language="html" theme={tinyCodeTheme}>
            {searchBoxHtml}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>How can clients customize with closed DOM?</Heading>
          <Text>
            <UnorderedList>
              <ListItem>Html blocks</ListItem>
              <ListItem>Attributes</ListItem>
              <ListItem>Slots</ListItem>
              <ListItem>Theme values</ListItem>
              <ListItem>Wrap our custom components</ListItem>
              <ListItem>Provide their own custom components</ListItem>
            </UnorderedList>
          </Text>
        </Slide>
        <Slide>
          <Heading>Html Blocks</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={htmlBlock} width="60%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Attributes</Heading>
          <CodePane language="html">{`<skilljar-hero-image url="www.custom-domain.com/my-image"></skilljar-hero-image>`}</CodePane>
        </Slide>
        <Slide>
          <Heading>Slots</Heading>
          <CodePane language="html">{`<skilljar-announcement-banner><h1 slot="top-left">My custom text</h1></skilljar-announcement-banner>`}</CodePane>
        </Slide>
        <Slide>
          <Heading>Theme values</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={themeInput} width="60%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Clients can define their own custom elements</Heading>
          <Text>
            Currently, we allow custom components with the prefix "proserv-" on
            catalog pages; we can add a client namespace as well.
          </Text>
        </Slide>
        <Slide>
          <Heading>Defining a custom component</Heading>
          <CodePane
            language="javascript"
            highlightRanges={[
              [1, 1],
              [2, 4],
              [5, 7],
              [9, 9],
            ]}
          >
            {helloSayerComponent}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Using a custom component</Heading>
          <CodePane language="html">{`<hello-sayer name="Doug"></hello-sayer>`}</CodePane>
        </Slide>
        <Slide>
          <Heading>Styling a custom component</Heading>
          <CodePane
            language="javascript"
            highlightRanges={[
              [3, 10],
              [11, 11],
              [12, 17],
              [18, 18],
              [21, 21],
            ]}
          >
            {styledButtonComponent}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>Using a custom component</Heading>
          <CodePane language="html">{`<styled-button></styled-button>`}</CodePane>
        </Slide>
        <Slide>
          <Heading>Wrapping a custom component</Heading>
          <CodePane language="javascript">{`customElements.define('client-hero-image', CustomHeroImage);`}</CodePane>
        </Slide>
        <Slide>
          <Heading>Clients can redefine our custom elements</Heading>
          <Text>
            If clients define an element with the same name as an existing
            component, it will take precedence
          </Text>
        </Slide>
        <Slide>
          <Heading>Clients can redefine our custom elements</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={whatGoesIntoAComponent} width="40%" />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Redefining a custom component</Heading>
          <CodePane language="javascript">{`customElements.define('skilljar-hero-image', CustomHeroImage);`}</CodePane>
        </Slide>
        <Slide>
          <Heading>FAQ</Heading>
          <OrderedList>
            <ListItem>
              What if we have a customer that wants to customize everything?
            </ListItem>
            <ListItem>
              How are we going to merge "legacy" + builder pages?
            </ListItem>
            <ListItem>
              What if a customer wants to be able to modify one thing that we
              can't?
            </ListItem>
            <ListItem>What if a customer wants to add one field?</ListItem>
            <ListItem>Bring your own template?</ListItem>
          </OrderedList>
        </Slide>
        <Slide>
          <Heading>
            What if we have a customer that wants to customize everything?
          </Heading>
          <Text>
            We have no plan to deprecate "legacy" pages. Customers can continue
            to add custom html/js/css to catalog pages using "legacy" pages
          </Text>
        </Slide>
        <Slide>
          <Heading>How are we going to merge "legacy" + builder pages?</Heading>
          <Text>
            All custom components from page builder will be available on
            "legacy" pages for reuse.
          </Text>
        </Slide>
        <Slide>
          <FlexBox alignItems="center" justifyContent="center">
            <div>
              <Text>"Legacy" pages</Text>
              <Image src={headerHtmlInput} width="50%" />
            </div>
            <div>
              <Text>Builder pages</Text>
              <Image src={pageBuilderComposer} width="100%" />
            </div>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>
            What if a customer wants to be able to modify one thing that we
            can't?
          </Heading>
          <Text>
            Customers can "swizzle" or "bring their own template" by defining
            their own custom components that wrap existing components.
          </Text>
        </Slide>
        <Slide>
          <Heading>Bring your own template?</Heading>
          <Text>
            Customers can "swizzle" or "bring their own template" by defining
            their own custom components that have whatever contents they like.
            Clients can also add custom html blocks.
          </Text>
        </Slide>
        <Slide>
          <Heading>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
