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

import butWhy from "../assets/but-why.gif";
import cssBoxModel from "../assets/css-box-model.png";
import breakingChange from "../assets/cp-breaking-change.png";
import htmlBoxes from "../assets/html-boxes.drawio.png";
import shadowDom from "../assets/shadow-dom.jpg";
import skilljarLogo from "../assets/skilljar_logo.svg";
import whatGoesIntoAComponent from "../assets/what-goes-into-a-component.drawio.png";

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
          <Heading>The browser allows us to add custom elements</Heading>
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
        // Add a slide with current world
        <Slide>
          <Heading>These custom elements can be protected</Heading>
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
        // Show the html that has the two labels // Needs a transition slide
        <Slide>
          <Heading>Custom elements are available on every page</Heading>
          <Text>
            We can allow clients to use our custom elements anywhere they can
            input html
          </Text>
        </Slide>
        <Slide>
          <Heading>Clients can define their own custom elements</Heading>
          <Text>
            Currently, we allow custom components with the prefix "proserv-" on
            catalog pages
          </Text>
        </Slide>
        // show two examples
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
          <Heading>FAQ</Heading>
          <OrderedList>
            <ListItem>
              What if we have a customer that wants to customize everything?
            </ListItem>
            <ListItem>
              How are we going to merge legacy + builder pages?
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
            We have no plan to deprecate legacy pages. Customers can continue to
            add custom html/js/css to catalog pages using "legacy" pages
          </Text>
        </Slide>
        <Slide>
          <Heading>How are we going to merge legacy + builder pages?</Heading>
          <Text>
            All custom components from page builder will be available on legacy
            pages for reuse.
          </Text>
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
        // code sample
        <Slide>
          <Heading>Swizzling</Heading>
          <CodePane language="html">{`
<sjwc-video src="http://www.skilljar.com/my-video"></sjwc-video>
<proserv-announcement-banner>This is great!</proserv-announcement-banner>
<palantir-eye-of-sauron></palantir-eye-of-sauron>
          `}</CodePane>
        </Slide>
        <Slide>
          <Heading>Swizzling</Heading>
          <CodePane language="html">{`
<palantir-eye-of-sauron>
    <sjwc-video src="http://www.skilljar.com/my-video"></sjwc-video>
</palantir-eye-of-sauron>
          `}</CodePane>

          <Text>vs.</Text>

          <CodePane language="html">{`
<palantir-eye-of-sauron>
    <video src="http://www.skilljar.com/my-video"></video>
</palantir-eye-of-sauron>
          `}</CodePane>
        </Slide>
        <Slide>
          <Heading>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
