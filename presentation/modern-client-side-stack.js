// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
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
  girl: require("../assets/meisje-met-de-parel.jpg"),
  htmlcssjs: require("../assets/htmlcssjs.jpg"),
  cssgrid: require("../assets/css-grid.png"),
  asyncawait: require("../assets/async-await.png"),
  caniusecssgrid: require("../assets/caniuse-css-grid.png"),
  caniuseasyncawait: require("../assets/caniuse-async-functions.png"),
  postcss: require("../assets/postcss.svg"),
  babel: require("../assets/babel.png"),
  webpack: require("../assets/webpack.png"),
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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Modern Client Side Stack
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            developing for the web in 2017 and beyond
          </Text>
          <Notes>
            <ul>
              <li>Hi everyone and welcome</li>
              <li>Thanks to IU organizers for inviting me</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} fit caps textColor="tertiary">
            {"Hi I'm Doug"}
          </Heading>
          <List>
            <ListItem>Front-end Ops Team</ListItem>
            <ListItem>Work from Seattle</ListItem>
            <ListItem>Working on running Node.js at Indeed</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            JavaScript Renaissance
          </Heading>
          <Image src={images.girl} width="50%"/>
          <Notes>
            <p>The reason to be excited about talking about this</p>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>{"What's Coming?"}</Heading>
          <List>
            <ListItem>CSS Feature Queries</ListItem>
            <ListItem>CSS Grid Layout</ListItem>
            <ListItem>CSS native variables</ListItem>
            <ListItem>JS Realms</ListItem>
            <ListItem>BigInt</ListItem>
            <ListItem>Promise.finally</ListItem>
            <ListItem>Decorators</ListItem>
            <ListItem>Private Methods</ListItem>
            <ListItem>And more!</ListItem>
          </List>
          <Notes>
            <ul>
              <li>A lot of cool stuff in the works</li>
              <li>More than we can talk about</li>
              <li>New features enable new, better apis, which lead to new, better libraries</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Yes but why?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Yes but why?
          </Heading>
          <Image src={images.htmlcssjs} width="100%"/>
          <Notes>
            <ul>
              <li>We used to have "Big Bang" releases</li>
              <li>4 years for JS, 9 years for HTML, 13 years for CSS</li>
              <li>Now we have modular releases, like agile vs waterfall</li>
              <li>You can participate! Development happens on github</li>
              <li>Modularity is a big theme, and one we will return to</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Feature in depth: CSS Grid
          </Heading>
          <Text>HTML</Text>
          <CodePane lang="html" source={`<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>`}/>
          <Text>CSS</Text>
          <CodePane lang="css" source={`.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 1;
  grid-row: 2;
}
.three {
  grid-column: 2;
  grid-row: 2;
}`}/>
          <Notes>
            <ul>
              <li>The CSS Grid is made up of many attributes and values</li>
              <li>The slash indicates which columns to span</li>
              <li>fr is a fractional unit</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Feature in depth: CSS Grid
          </Heading>
          <Image src={images.cssgrid} width="100%"/>
          <Notes>
            <p>This is the result (with added coloration)</p>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Feature in depth: Async/Await
          </Heading>
          <CodePane lang="js" source={`async function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(position.coords);
    });
  });
}
const location = await getLocation();
console.log(location);
  `}/>
          <Notes>
            <ul>
              <li>Uses the Geolocation browser api (HTML 5)</li>
              <li>Uses Promises (ES 6)</li>
              <li>Allows for natural control flow (try/catch)</li>
              <li>Makes asynchronous programming easier (we do that a lot)</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Feature in depth: Async/Await
          </Heading>
          <Image src={images.asyncawait} width="100%"/>
          <Notes>
            <p>This is the result (when wrapped in an async main iife)</p>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            So I can use these, right?
          </Heading>
          <Image src={images.caniuseasyncawait} width="70%"/>
          <Image src={images.caniusecssgrid} width="70%"/>
          <Notes>
            <ul>
              <li>For most people in most browsers, yes!</li>
              <li>Indeed still supports these users in these browsers</li>
              <li>So, we cannot use them as-is</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            So I can use these, right?
          </Heading>
          <Image src={images.babel} width="60%"/>
          <Image src={images.postcss} width="35%"/>
          <Notes>
            <ul>
              <li>All is not lost!</li>
              <li>We use transpilers and polyfills</li>
              <li>Transpiler: Fancy word for compiler</li>
              <li>Polyfill: Somethings cannot be transpiled, or require more bytes transpiled</li>
              <li>The frontend team vends libraries that wrap these tools so you do not need to know about them</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Putting it all together
          </Heading>
          <Image src={images.webpack} width="100%"/>
          <Notes>
            <ul>
              <li>Webpack is a client-side module system for the web</li>
              <li>It takes css imports and js imports to create a dependency graph</li>
              <li>It serializes this graph and send it over the network</li>
              <li>It stitches together html, js, css, images, other languages</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            {"That's a lot of stuff"}
          </Heading>
          <Text>
            The front-end core team works to increase the velocity of quality user interface development.
          </Text>
          <Notes>
            <ul>
              <li>We are here to help</li>
              <li>You will have talks on our product suite that abstracts a lot of this away</li>
              <li>frontend-skeleton creates most of what you need</li>
              <li>component libraries in react and soy provide ui building blocks</li>
              <li>frontend-build provides a build system</li>
              <li>We focus on tools that Just Work</li>
              <li>If you are interested, we can help you learn and grow</li>
            </ul>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
