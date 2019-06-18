// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
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
import { theme } from "spectacle-theme-solarized-dark";

// Require CSS
require("normalize.css");

const images = {
  commonjs: require("../assets/common-js.jpg"),
  dag: require("../assets/dag.png"),
  doctorWho: require("../assets/doctor-who.gif"),
  downloads: require("../assets/webpack-downloads.png"),
  javascript: require("../assets/javascript.png"),
  kat: require("../assets/kat.png"),
  butWhy: require("../assets/but-why.gif"),
  parceljs: require("../assets/parcel-js.png"),
  requirejs: require("../assets/require-js.png"),
  rollupjs: require("../assets/rollup-js.jpg"),
  searchResults: require("../assets/search-results.png"),
  webpackIcon: require("../assets/webpack-icon.png"),
  webpack: require("../assets/webpack.png"),
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={4} fit caps textColor="tertiary">
            {"Hi I'm Doug"}
          </Heading>
          <List>
            <ListItem>Your Team</ListItem>
            <ListItem>At Indeed about a two and a half years</ListItem>
            <ListItem>I want you to be successful</ListItem>
          </List>
          <Notes>
            Hi and thanks to Phil for inviting me. I have geared this talk to an
            audience with pretty minimal knowledge of JavaScript, as I have encountered
            a lot of Java-only developers at Indeed; I apologize if I spend too much
            time explaining things everyone already knows. Also, there are a lot of
            people who are way better at talking about Webpack than me that have
            Youtube videos out there; the benefit to having me speak rather than
            pressing play on one of them is that you can stop me and ask questions;
            please do not be shy about shouting out or raising your hand or asking.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.webpackIcon} width="50%"/>
          <Heading size={3} textColor="tertiary">
            Webpack for Humans
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.butWhy} width="100%"/>
          <Notes>
            So why does it make sense for us to talk about Webpack?
          </Notes>
        </Slide>
        <Slide>
          <Image src={images.searchResults} width="100%"/>
          <Text size={6} textColor="tertiary" italic>
            2158 projects at Indeed use webpack
          </Text>
          <Notes>
            <div><ul>
              <li>This may not be the best screenshot, the number is at the top right</li>
              <li>With the usual "probably a bunch of these aren't real" caveats</li>
              <li>You probably are or will be on a team that uses webpack</li>
            </ul></div>
          </Notes>
        </Slide>
        <Slide>
          <Image src={images.downloads} width="100%"/>
          <Text size={6} textColor="tertiary" italic>
            Webpack was downloaded 7.3 million times last week
          </Text>
          <Notes>
            <div><ul>
              <li>This number is actually way smaller than it has any right to be</li>
              <li>Most coporations, like Indeed, run a private registry, and only install each new webpack version once</li>
              <li>Should you leave Indeed, you will probably go to a company that uses webpack</li>
            </ul></div>
          </Notes>
        </Slide>
        <Slide>
          <Image src={images.butWhy} width="100%"/>
          <Notes>
            <div><ul>
              <li>Hopefully I have convinced you that this is worth knowing about</li>
              <li>Why is webpack so successful?</li>
            </ul></div>
          </Notes>
        </Slide>
        <Slide>
          <Image src={images.doctorWho} width="100%"/>
          <Notes>
            <div><ul>
              <li>Let us go back in time to the good old days</li>
            </ul></div>
          </Notes>
        </Slide>
        <Slide>
          <a href="https://www.cameronsworld.net/">Geocities</a>
          <Notes>
            <div>
              <ul>
                <li>1990: the first website</li>
                <li>1993: the first browser</li>
                <li>1994: Geocities</li>
              </ul>
            </div>
            <div>
              and there were web rings,
              and there was the dancing baby,
              and there were visitor trackers,
              and every site had an under construction banner
              and it was good.
            </div>
            <div>
              Webmasters would copy-paste snippets of html and css into
              a single large index.html using frontpage, and it was awesome
            </div>
          </Notes>
        </Slide>
        <Slide>
          <Image src={images.javascript} />
          <a href="https://www.spacejam.com/archive/spacejam/movie/jam.htm">Space Jam</a>
          <Notes>
            <div>
              And things stayed that way for a long time.  Webmasters used iFrames
              to segment their pages into reusable functionality.  Javascript was
              invented and was gently sprinkled on the page for a little interactivity
              or reactivity.
            </div>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">
            Ordered Script Tags
          </Heading>
          <CodePane lang="html" source={`
<script src="https://unpkg.com/prop-types@15/prop-types.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.js"></script>
<script src="https://unpkg.com/spectacle@^4/dist/spectacle.js"></script>
<script src="https://unpkg.com/spectacle@^4/lib/one-page.js"></script>
<script src="https://unpkg.com/prop-types@15/prop-types.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.js"></script>
<script src="https://unpkg.com/spectacle@^4/dist/spectacle.js"></script>
<script src="https://unpkg.com/spectacle@^4/lib/one-page.js"></script>
            `} />
          <Notes>
            <div>
              But little by little, we loaded more and more javascript to make our
              pages more and more interactive.  The problem is that browsers only have
              six connections that are available at a time, so when you had 15 or 30
              script tags, you had to do the TLS three way hand shake over and over
              again sequentially, and things were slow
            </div>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">
            Script Concatenation
          </Heading>
          <CodePane lang="javascript" source={`
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src([
      './vendor/first.js',
      './vendor/second.js',
      './vendor/third.js',
      './lib/first.js',
      './lib/second.js',
      './lib/third.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
`} />
          <Notes>
            So what we did was we concatenated our scripts into larger JavaScript
            files.  But this was brittle -- what happened when a developer introduced
            a new dependency on third.js from first.js?  And it was susceptible to
            bugs, for instance from variable hoisting or global mutable state.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary" caps>
            Meanwhile
          </Heading>
          <Image src={images.commonjs} />
          <div>
            <Code>var clefs = require('clefs');</Code>
          </div>
          <Notes>
            In the meantime, a guy named Ryan Dahl had had this great idea to pull
            the JavaScript engine, called V8, out of Chrome and add some OS and
            file system bindings to it and call it node.js.  And as part of it,
            a working group had pulled together a standard called common.js, which
            defined a module system for JavaScript.  This was awesome, because you
            did not have to write everything in one giant file, or concatenate all
            of the javascript in a single file.  But it did not really work in the
            browser, because it did not handle network loading and its associated
            asynchrony.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary" caps>
            Modules
          </Heading>
          <CodePane lang="javascript" source={`
const qs = require('query-string');
// const qs = require('qs');

const { myParam } = qa.parse(location.search);
            `} />
            <CodePane lang="sass" source={`
@import '~/@indeed/frontend-style/foundations/typography';
// @import '~/@indeed/frontend-style-janus/foundations/typography';

.myHeadline {
    @include set-type-headline(md, bold);
}
              `} />
            <Notes>
              Modules are independent, interchangeable chunks of code that implement
              only one aspect of your functionality.  The idea of a module is not
              specific to any one language, though the implementation details do
              vary from language to language.  Note in these examples that we can
              switch between TJ's implementation and Sindre's implementation without
              refactoring our code, or we can switch between legacy and Janus styles
              without a refactor.  JavaScript's love affair for small modules dates
              back to the days when we copy-pasted from view source (and later from
              stack overflow) tiny snippets to cobble together to make webpages; 
              modules formalized this process.
            </Notes>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary" caps>
            And so
          </Heading>
          <Image src={images.requirejs} width="25%" />
          <div>
            <CodePane lang="javascript" source={`
//Calling define with a dependency array and a factory function
define(['dep1', 'dep2'], function (dep1, dep2) {

    //Define the module value by returning a value.
    return function () {};
});
`} />
          </div>
          <Notes>
            The DOJO team, who vended a UI widget library, came up with an incredible
            solution called require.js that used an alternative module syntax called
            AMD.  AMD allowed them to load modules asynchronously, so if one javascript
            came back before its dependencies, it was okay.  And the require.js loader
            used the module name and a baseUrl to automatically resolve the dependencies
            for you.  It was magical!  Except you could not use javascript isomorphically,
            meaning on the server and in the browser, and you still had the many small
            files problem.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.webpackIcon} width="50%"/>
          <Heading size={6} textColor="tertiary">
            which is where Webpack comes in
          </Heading>
          <Notes>
            Webpack was actually one of many second-generation module bundlers, along
            with webmake and my favorite, browserify.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.parceljs} width="50%"/>
          <Image src={images.rollupjs} width="50%"/>
          <Heading size={5} textColor="tertiary">
            Third generation module bundlers
          </Heading>
          <Notes>
            I feel that it is important to put this in historical context not only
            in what it replaced, but what is replacing it.  Already, for developing
            JavaScript libraries, Rollup is preferred over Webpack as it produces
            a smaller output than Webpack.  And, parcel.js is quickly gaining popularity,
            and may replace Webpack for general purpose use.

            What is important to take from my talk, then, is not configuration options,
            but first principles -- graph traversal, dependency management, module definitions.
            And a reminder that all code is temporary.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.webpack} width="100%" />
          <Notes>
            So, having looked back through history, we can now see webpack and understand
            what module bundling is and why we want it.  Module bundling is the act of taking
            lots of small modules from many different languages and packaging them up so
            they are ready to ship to a browser.  We want module bundling to increase
            performance (solve the many small modules problem), and we want it done
            by a bundler because maintaining concatenatation is tedious.  But how does it
            work?
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} textColor="primary">Dependency Graph</Heading>
          <Image src={images.dag} width="75%" />
          <Notes>
            The core idea behind a module bundler relies on an understanding of
            graphs.  We can imagine each module as a node in a graph, and each
            require or import as an edge that goes from the calling module to the
            module that is loaded.  Building a bundle, then, becomes a graph
            traversal problem.  For instance, to build a bundle for the module G,
            we only need to include D, E and F in our bundle to have a correct
            bundle, whereas if we build a bundle for module A, we need B, C, D, E and F.
            These groups of modules are called a dependency closure.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Entry points
          </Heading>
          <CodePane lang="javascript" source={`
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  }
};
            `}
          />
          <Notes>
            In webpack, these are called entry points.  You have to provide an entry
            point that has in its dependency closure all of the files that you want
            to make your page work (this is especially important when considering
            things like CSS and images).  When you run webpack with an entry point,
            it produces a bundle that contains the full dependency closure of that
            module.

            We will look at how this works: (simple example)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Loaders
          </Heading>
          <CodePane lang="javascript" source={`
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
 module: {
   rules: [
     {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
     }
   ]
 }
          `}
          />
          <a href="https://github.com/doug-wade/yodel/blob/master/gulpfile.js">its like this</a>
          <Notes>
            When we looked at Gulp historically, we say that there were tasks that slurped up
            groups of files, and then streamed them through a set of plugins. Rules are just
            like this, and loaders are the set of plugins that each file gets passed through.
            Each one adds some functionality, and some plugins expect other plugins to run
            before them, like style-loader expectes css-loader to run first.  It turns out
            that under the cover, Webpack is just a plugin system, like babel and eslint.

            We can see this in an example (styles)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Cache busting
          </Heading>
          <CodePane lang="javascript" source={`
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};
          `}
          />
          <Notes>
            Cache busting is a super important idea in frontend dev.  When you serve static
            assets, you can add a header that indicated to the browser how long to wait before
            requesting a new version of that asset. We could set something short, like 30 seconds,
            but then mobile users would have to pay a lot for wasted bandwidth.  We could set something
            long, like 9999 years, but then users would never get new versions of our website.  So
            instead what we do is specify a very long cache time, like 9999 years, and then change the
            url to something new every time we redeploy the app.  If the static is the same, it computes
            the same hash; if not, the odds of a hash collision are like sand on the beach or stars in the
            sky.

            We can see this in an example (cache-busting)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Chunks
          </Heading>
          <CodePane lang="javascript" source={`
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
          `}
          />
          <Notes>
            Chunks are crucial to a well functioning app.  While your application
            code often experiences high churn, your vendor code, the dependencies
            you install from npm, change much more rarely.  By splitting them out
            into a separate "chunk" that is loaded independently, we can improve
            the performance of our application by reducing how much code has to
            be re-downloaded with every new release.

            Similarly, you can split out code that is used on more than one page
            into a commons chunk, so that it is not refetched for every page.

            We can see this in an example (vendor-chunk)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Production builds
          </Heading>
          <CodePane lang="javascript" source={`
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};
          `}
          />
          <Notes>
            One of the most common mistakes new web devs make is shipping the development
            build of their application and its dependencies into prod, or adding and
            removing debug and timing points while developing.  Instead, you can provide
            an enviroment to the application, and key off of that.  React, for instance,
            is 14.7 kb as a development build, and 2.9 kb as a production build.  You
            are not limited to only injecting process.env.NODE_ENV (which is a node.js
            convention adopted by many js libraries); you can inject any variable
            you want available at build time.

            We can see this in an example (environment)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Code splitting
          </Heading>
          <CodePane lang="javascript" source={`
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
          `}
          />
          <Notes>
            Code splitting will give you super powers performance-wise.  You will
            melt your teammates faces with your awesomeness.  In an ideal world, on
            initial load, only the JavaScript necessary for the first paint should
            be loaded, so that perceived performance is really good.  Then, while
            the user processes the content and moves their mouse to click, we should
            load the code necessary to add interactivity.  Code splitting allows this.
            Even better, you can delay loading some code until the user indicates they
            want to use the associated functionality, if it is used by only a small
            portion of users, and only then fetch the code, obviating the need for that
            code for most users.  It uses dynamic requires, and does not require any
            extra configuration.

            We can see this in an example (code-split)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Dynamic requires
          </Heading>
          <CodePane lang="javascript" source={`
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
          `}
          />
          <Notes>
            Dynamic requires are a thing you can do, but something you should be
            careful with.  When you do a dynamic require, webpack loads all of the
            code that you could possibly require and includes it in the bundle, so
            be careful to limit them to as few things as possible.

            We can see this in an example (dynamic-require)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">
            frontend-build
          </Heading>
          <Notes>
            We can see how frontend-build works in an example (dynamic-require)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">
            Webpack dev server
          </Heading>
          <Heading size={5} textColor="secondary">
            Hot module reloading
          </Heading>
          <Notes>
            <ul>
              <li>It uses an express server, so you can add extra stuff as middleware</li>
              <li>It uses socket.io to communicate changes to the browser</li>
              <li>It uses the in-browser module system to recompute the full closure of the changed module</li>
              <li>Hot module reloading is the "killer app" that got webpack to beat browserify</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            {"That's a lot of stuff"}
          </Heading>
          <Text>
            The front-end team works to increase the velocity of quality user interface development.
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
