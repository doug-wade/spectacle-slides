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
  Notes,
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
            talking, writing, and thinking about technical solutions
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>OR</Heading>
          <Heading size={1} textColor="secondary" fit>SIMPLE IS DIFFICULT</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Storytime</Heading>
          <Notes>
            One time I was writing the initial version of Lerna and having problems with
            publishing intermediate builds because we'd have conflicts on CI between branches
            incrementing minor versions to the same version. My tech lead suggested we "just"
            use shasums, and I felt super dumb because it was obvious that I didn't understand
            something that he assumed I should.
          </Notes>
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
          <Heading size={6} textColor="primary" caps>Try to do this when estimating too</Heading>
          <Heading size={1} textColor="secondary" fit>Things are rarely as simple as they seem</Heading>
          <Notes>
            It is an easy trap to fall into when you're doing estimations -- oh, you just do this
            one thing and then its solved. It's rarely you "just" any ticket -- if it were easy,
            it would likely already be done. Instead, respect the complexity of tickets -- testing,
            code reviews, understanding the context etc.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>It's not "just" a one line change</Heading>
          <Heading size={1} textColor="secondary" fit>Test like every change can cause an outage</Heading>
          <Notes>
            Even when we have software solutions that seem very simple -- for instance, one-line changes --
            don't allow yourself to be complacent. One-line changes can take down the service the same as a
            1000-line change. Make sure to exercise the code under test in all the common use cases and some
            of the uncommon use cases to make sure it works as anticipated.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Make sure to define your terms</Heading>
          <Heading size={1} textColor="secondary" fit>Don't assume you know what your audience knows</Heading>
          <Notes>
            Defining your terms is a good idea even if you're working with someone that probably does know
            what you're talking about because many terms are ambiguous. For instance, many people use href
            and url interchangeably, so it is worthwhile to distinguish if you use "href" to mean a string 
            and "url" to mean a url object.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Most importantly!</Heading>
          <Heading size={1} textColor="secondary" fit>{"Don't sell yourself short"}</Heading>
          <Notes>
            This same mentality comes back to haunt us when it comes time to do reviews or to
            talk about our work with other developers. It is like the joke about the person who
            repairs the rollers at the New York Times -- $1 to hit it with a wrench, $1999 to
            know where to hit it with a wrench.
          </Notes>
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
