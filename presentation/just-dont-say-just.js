// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

// see also https://css-tricks.com/words-avoid-educational-writing/
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            {"Just don't say just"}
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            talking and writing about technical solutions
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>What you say</Heading>
          <Heading size={1} textColor="secondary" fit>{"Why don't we just..."}</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>What I hear</Heading>
          <Heading size={1} textColor="secondary" fit>{"You're dumb for not thinking of..."}</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>What I feel</Heading>
          <Image src="http://i.dailymail.co.uk/i/pix/2012/05/27/article-0-1351D180000005DC-524_468x340.jpg" height="50vh" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>What you probably actually mean</Heading>
          <Heading size={1} textColor="secondary" fit>{"I want to casually discuss a possible solution"}</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>{"What you might not want to say"}</Heading>
          <List>
            <ListItem>Obviously</ListItem>
            <ListItem>Basically</ListItem>
            <ListItem>Simply</ListItem>
            <ListItem>Clearly</ListItem>
            <ListItem>Self-evident</ListItem>
            <ListItem>Easy</ListItem>
            <ListItem>Everyone knows</ListItem>
            <ListItem>Of course</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>{"What you might say instead"}</Heading>
          <List>
            <ListItem>{"In the past I've..."}</ListItem>
            <ListItem>{"I've seen other projects..."}</ListItem>
            <ListItem>{"Have you considered..."}</ListItem>
            <ListItem>{"It seems to me..."}</ListItem>
            <ListItem>{"It might be easier to..."}</ListItem>
            <ListItem>{"What about..."}</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>{"This goes the other way too"}</Heading>
          <Heading size={1} textColor="secondary" fit>{"Don't sell yourself short"}</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Be excellent to each other. And... PARTY ON, DUDES!</Quote>
            <Cite>Abraham Lincoln</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
