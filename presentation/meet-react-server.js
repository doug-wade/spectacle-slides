import React from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  Notes,
  Slide,
  Text
} from "spectacle";

const images = {
    reactserverLogomark: require("../assets/reactserver_logomark@2x.png"),
    jsFatigue: require("../assets/js-fatigue.png"),
    mobileVsFixed: require("../assets/mobile-vs-fixed.png"),
    noJs: require("../assets/no-js.jpg"),
    next: require("../assets/next.png"),
    electrode: require("../assets/electrode.png")
};

const Presentation = () => (
    <Deck>
        <Slide>
            <Heading>Meet React Server</Heading>
            <Heading fontSize="h3">Blazing fast page load</Heading>
            <Heading fontSize="h3">buttery-smooth navigation</Heading>
            <Image src={images.reactserverLogomark} />
            <Text>
                Created by <a href="http://dougwade.io">Doug Wade</a> / <a href="http://mastodon.xyz/@dougwade">@dougwade</a>
            </Text>

            <Notes>
                <UnorderedList>
                    <ListItem>Thank Max Stoiber for the intro to css</ListItem>
                    <ListItem>Express excitement to be in Amsterdam</ListItem>
                    <ListItem>Going to talk about my favorite FOSS project, though we&apos;ll see after James Kyle&apos;s talk ;)</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>What&apos;s wrong?</Heading>
            <Heading fontSize="h3">Javascript Fatigue</Heading>
            <Image width="65%" src={images.jsFatigue} />

            <Notes>
                <UnorderedList>
                <ListItem>There are too many tools, and they change too often.</ListItem>
                <ListItem>The tooling is complicated to set up, and inaccessible for &quot;joe and jane developer&quot;.</ListItem>
                <ListItem>it took us many months/tries/mistakes to get a universal react app working well.</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>What&apos;s wrong?</Heading>
            <Heading fontSize="h3">Slow Internet</Heading>
            <Image width="65%" src={images.mobileVsFixed} />
            <Text>Credit/Source: <a href="http://www.itu.int/en/ITU-D/Statistics/Pages/facts/default.aspx">ITU ICT Facts and Figures 2016</a></Text>

            <Notes>
                <UnorderedList>
                    <ListItem>From the The International Telecommunication Union, a branch of the UN</ListItem>
                    <ListItem>Most internet users are on mobile.</ListItem>
                    <ListItem>Most internet users are not in the first world.</ListItem>
                    <ListItem>Most internet users don&apos;t have the patience to wait while your 4 MB bundle downloads</ListItem>
                    <ListItem>(47% of consumers expect a web page to load in 2 seconds or less).</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>What&apos;s wrong?</Heading>
            <Heading fontSize="h3">No Javascript</Heading>
            <Image src={images.noJs} />

            <Notes>
                <UnorderedList>
                    <ListItem>Primarily an SEO problem.</ListItem>
                    <ListItem>Some users blocking because of ads or security.</ListItem>
                    <ListItem>Has the added benefit of maintaining the &quot;document&quot; nature of the web</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>There are solutions!</Heading>
            <Box>
                <Image src={images.next} />
                <Image src={images.electrode} />
                <Image src={images.reactserverLogomark} />
            </Box>

            <Notes>
                <UnorderedList>
                    <ListItem>
                    They&apos;re p similar: they all come with a babel preset,
                    webpack configuration
                    </ListItem>

                    <ListItem>
                    Server
                    Next: custom
                    React Server: express
                    Electrode: hapi koa or express
                    </ListItem>

                    <ListItem>
                    Routing -- Each uses a `Link` component for client-side transitions
                    Next: file system with custom configuration using programmatic api;
                    React Server: routes file;
                    Electrode: React router
                    </ListItem>

                    <ListItem>
                    State management -- They all support redux
                    Next: byo w/ redux example
                    React Server: byo w/ redux bindings
                    Electrode: Redux
                    </ListItem>

                    <ListItem>
                    Service Worker Support
                    Next: Yes
                    React Server: No 😞
                    Electrode: Yes
                    </ListItem>

                    <ListItem>
                    runtime via
                    Next: cdn
                    React Server: bundle
                    Electrode: bundle
                    </ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>React Server</Heading>
            <Heading fontSize="h3">
                Batteries-included framework for universal react applications and
                an ecosystem of associated build tools and middleware
            </Heading>

            <Notes>
                <UnorderedList>
                    <ListItem>An Express middleware</ListItem>
                    <ListItem>Includes an associated build toolchain built on webpack</ListItem>
                    <ListItem>A constellation of modules in a monorepo that evolves together built with Lerna</ListItem>
                    <ListItem><i>just works</i> for beginners (addresses js fatigue)</ListItem>
                    <ListItem>customizable (custom webpack config, custom express middleware) for advanced users</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Server-side + SPA</Heading>
            <Text>Server-side rendering for the first load</Text>
            <Text>Client-side rendering for subsequent loads</Text>

            <Notes>
                <UnorderedList>
                    <ListItem>Addresses slow and js-free internet</ListItem>
                    <ListItem>Do a server-render for the intial page load to get html content fast with no client js</ListItem>
                    <ListItem>Load the code for rendering subsequent pages to get blazing fast page loads afterwards with only incremental data</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Image src={images.shamwow} />

            <Notes>
                <UnorderedList>
                    <ListItem>These things are true of any server-side rendered framework -- electrode, create-react-app, roll your own -- so why react-server?</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Buttery smooth page loads</Heading>
            <Text>Break up the page into logical sections</Text>
            <Text>Stream them as soon as they are ready</Text>

            <Notes>
                <UnorderedList>
                    <ListItem>Address impatient users by getting chunks on the page as soon as possible</ListItem>
                    <ListItem>Prevent users from clicking on the wrong element when the page &quot;jumps&quot; (Dark Pattern)</ListItem>
                    <ListItem>Treat the page like a document that &quot;snaps in&quot; as soon as it is ready</ListItem>
                    <ListItem>The page becomes interactive as soon as above-the-fold content is loaded but no sooner</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Blazing fast</Heading>
            <Text>Precalculate data before client transitions with data bundling</Text>
            <Text>Ensure that you render the same markup to avoid page jank</Text>

            <Notes>
                <UnorderedList>
                    <ListItem>Send a bundle of data + code that was used for server rendering so the DOM render the same.</ListItem>
                    <ListItem>client-side rendering &quot;prequests&quot; that the server ready a data bundle and hold it until the request</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Be kind to your backend server</Heading>
            <Text>
                Send late arrivals in a script tag to avoid making the same request
                on the server and in the browser
            </Text>

            <Notes>
                <UnorderedList>
                    <ListItem>wait for a struggling backend, users might refresh the page or bounce</ListItem>
                    <ListItem>If we send a partial on a timeout, it doubles the load on the server by making the same requests again</ListItem>
                    <ListItem>Instead: leave the http connection open to the browser, and push down late arrivals in script tags</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Page Api</Heading>
            <Heading fontSize="h3">Create pages, endpoints and middleware</Heading>
            <CodePane language="javascript">{`
// routes.js
module.exports = {
  routes: {
    examplepage: {
      path: ['/'],
      method: 'get',
      page: './example'
    }
  }
}

// example.js
export default class ExamplePage {
  // lifecycle methods go here
}
          </CodePane>

          <Notes>
            <UnorderedList>
              <ListItem>The page api is the heart of react server, shared by data endpoints, pages, and middleware</ListItem>
              <ListItem>The routes file links pages, endpoints and middleware to a router</ListItem>
              <ListItem>Pages are classes with lifecycle methods<ListItem>
            </UnorderedList>
          </Notes>
        </Slide>

        <Slide>
          <Heading>Page Api</Heading>
          <Text>lifecycle methods</Text>

          <CodePane>
export default class ExamplePage {
  getTitle() {
    return "Example page"
  }

  getMetaTags() {
    return [
      { name: "example", content: "talk up React Server" },
    ];
  }
}`}
            </CodePane>

            <Notes>
                <UnorderedList>
                    <ListItem>Lifecycle methods are specially named methods that React Server calls as part of the page lifecycle</ListItem>
                    <ListItem>React Server provides &quot;best-guess&quot; defaults for all lifecycle methods</ListItem>
                    <ListItem>This example adds meta tags and a title to the page head</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Page Api</Heading>
            <Text>Elements and routes</Text>

            <CodePane language="javascript">{`
let param;
export default class ExamplePage {
  handleRoute(next) {
    param = this.getRequest().getQuery().param;
    return next();
  }

  getElements() {
    return (<h1>Got param {param}</h1>);
  }
}`}
            </CodePane>

            <Notes>
                <UnorderedList>
                    <ListItem>HandleRoute is called when the route is resolved and determines http status code</ListItem>
                    <ListItem>getElements gets the contents of the body tag</ListItem>
                    <ListItem>This example retrieves a param from the url and displays it in an h1</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
          <Heading>Page Api</Heading>
          <Text>scripts and stylesheets</Text>

          <CodePane language="javascript">{`
export default class ExamplePage {
  getHeadStylesheets() {
    return [
      "/styles/example.css"
    ]
  }

  getBodyClasses() {
    return ["responsive-page", "typography"];
  }

  getScripts() {
    return [
      "/scripts/tracking.js"
    ]
  }
}`}
            </CodePane>

            <Notes>
                <UnorderedList>
                    <ListItem>External synchronous js file can significantly impact perf by blocking</ListItem>
                    <ListItem>devs define css + js in a structured way so they can&apos;t tank perf</ListItem>
                    <ListItem>prepares us for http2 by creating a manifest of js + css to push</ListItem>
                    <ListItem>body classes allow you to add classes to the generated body tag</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>RootElement, RootContainer and TheFold</Heading>
            <CodePane language="javascript">{`
export default class ExamplePage {
  getElements() {
    return (
      <RootContainer>
        <RootElement>
          <Header />
        </RootElement>
        <RootElement when={getMainContentData()}>
          <MainContent />
        </RootElement>
        <TheFold/>
        <RootElement when={getSeoContentData()}>
          <SeoContent />
        </RootElement
       <Footer/>
      </RootContainer>);
  }
}`}
            </CodePane>

            <Notes>
                <UnorderedList>
                    <ListItem>header without any data is emitted immediately</ListItem>
                    <ListItem>main content is emitted when header data is resolved</ListItem>
                    <ListItem>The fold emits a script tag that makes the content currently on page interactive</ListItem>
                    <ListItem>seo content and the footer are emitted when getSeoContentData promise resolves</ListItem>
                    <ListItem>The footer and header are rendered first, but footer is held back to avoid page jank</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Client Transitions</Heading>
            <Heading fontSize="h3">With Link</Heading>
            <CodePane language="javascript">{`
<Link path={path} bundleData={true}>...</Link>
            `}</CodePane>

            <Heading fontSize="h3">Or with navigateTo</Heading>
            <CodePane language="javascript">{`
navigateTo(path, {bundleData: true});
            `}</CodePane>
        </Slide>

        <Slide>
            <Heading>Request Local Storage</Heading>
            <Text>Keep context on a single request</Text>
            <CodePane language="javascript">{`
import {getCurrentRequestContext} from "react-server";
const response = getCurrentRequestContext().getServerStash().res;
const path = getCurrentRequestContext().getCurrentPath();`}
            </CodePane>

            <Notes>
                <UnorderedList>
                    <ListItem>Request Local Storage creates a storage object unique to a request</ListItem>
                    <ListItem>Exposes large parts of the React Server Api</ListItem>
                    <ListItem>For example: attach a request id to track errors emitted in deeply nested callbacks</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>React Server Agent</Heading>
            <Heading fontSize="h3">Make and cache requests</Heading>
            <CodePane language="javascript">{`
import {ReactServerAgent} from 'react-server';
export default class ExamplePage {
  handleRoute(next) {
    this.promise = ReactServerAgent
      .get("/api/endpoint")
      .then(res => res.body);
  }

  getElements() {
    return (<RootElement when={this.promise}>
      <EndpointConsumer />
    </RootElement>);
  }
}`}
            </CodePane>

            <Notes>
                <UnorderedList>
                    <ListItem>RSA is SuperAgent and has methods for normal http verbs: get, head, del, patch, post and put</ListItem>
                    <ListItem>Wrapped in a caching layer</ListItem>
                    <ListItem>Allows extension with plugResponse and plugRequest</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Navigator</Heading>
            <Text>Keep track of navigation and history</Text>
            <CodePane language="javascript">{`
import {getCurrentRequestContext} from "react-server";
const navigator = getCurrentRequestContext();

navigator.on("navigateStart", onNavigateStart);
navigator.on("page", onPage);
navigator.on("navigateDone", onNavigateDone);
navigator.on("loadComplete", onLoadComplete);`}
          </CodePane>

            <Notes>
                <UnorderedList>
                    <ListItem>The navigator gives access to the event lifecycle of client transitions</ListItem>
                    <ListItem>The events are emitted in the order listed</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>A great dx</Heading>
            <Heading fontSize="h3">A cli that handles</Heading>
            <UnorderedList>
                <ListItem>Generating a new project</ListItem>
                <ListItem>Code splitting</ListItem>
                <ListItem>module tagging</ListItem>
                <ListItem>hot reloading</ListItem>
            </UnorderedList>

            <Notes>
                <UnorderedList>
                    <ListItem>Code splitting is done with the SERVER_SIDE constant provided at compile time</ListItem>
                    <ListItem>Module tagging is used to know from what module log lines are emitted</ListItem>
                    <ListItem>hot reloading is started from the cli using the --hot flag</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>What&apos;s next?</Heading>
            <UnorderedList>
                <ListItem>Webpack (and hmr!) on the server</ListItem>
                <ListItem>Clustering</ListItem>
                <ListItem>Multi-site support</ListItem>
                <ListItem>http 2</ListItem>
            </UnorderedList>

            <Notes>
                <UnorderedList>
                    <ListItem>Using pm2 for clustering works, but a clustering api w/ the module tagger for ipc allows better control of workers</ListItem>
                    <ListItem>add starting multilple sites together as a first class abstraction to improve stats collection</ListItem>
                    <ListItem>add better support for Redux by adding a RootProvider to avoid forcing a refresh on state change to synchronize stores</ListItem>
                    <ListItem>renderScripts and renderHeadStylesheets mean upgrading to http2 without changes to client code</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Just focus on writing components and managing state</Heading>
            <Heading fontSize="h3">React Server handles the rest</Heading>

            <CodePane>{`
$ npm install -g react-server-cli # OR yarn global add react-server-cli
$ react-server init
$ react-server add-page '/' Homepage
$ react-server start`}
            </CodePane>

            <Notes>
                Advanced users can get ahold of their express instance and webpack config themselves and have full power.
            </Notes>
        </Slide>

        <Slide>
            <Heading>Questions?</Heading>
            <Text>
                - <a href="http://github.com/doug-wade/spectacle-slides">Get the slides: http://github.com/doug-wade/spectacle-slides</a> <br />
                - <a href="http://react-server.io">Check out the docs site: http://react-server.io</a> <br />
                - <a href="https://react-server.slack.com/">Chat with us on Slack: https://react-server.slack.com/</a> <br />
                - <a href="https://github.com/redfin/react-server">Fork us on github: https://github.com/redfin/react-server</a> <br />
            </Text>

            <Notes>
                The documentation site is the best resource -- it has the docs and is the most sophisticated example site
            </Notes>
        </Slide>
    </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
