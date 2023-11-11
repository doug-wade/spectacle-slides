import React from "react";

import {
  Quote,
  CodePane,
  Deck,
  FlexBox,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Notes,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import corgis from '../assets/corgis.jpg';
import deno from '../assets/deno.png';
import thatsAllFolks from "../assets/thats-all-folks.gif";

const denoPr =
  require("raw-loader!../code-examples/deno-pr.example").default;
const dntBuild =
  require("raw-loader!../code-examples/dnt-build.example").default;
const dntBuildLogs =
  require("raw-loader!../code-examples/dnt-build-logs.example").default;
const dntShims = require("raw-loader!../code-examples/dnt-shims.example").default;
  const dntTestFailure =
  require("raw-loader!../code-examples/dnt-build-test-failure.example").default;
const dntTypeCheckFailure =
  require("raw-loader!../code-examples/dnt-build-type-check-failure.example").default;
const dntPublishAction = require("raw-loader!../code-examples/dnt-publish-action.example").default;

require("normalize.css");

const theme = {
  colors: {
    primary: '#f4f1de',
    secondary: '#e07a5f',
    tertiary: '#3d405b',
    quaternary: '#c5e478',
  },
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading>Dual Publishing for Deno and Node.js with dnt</Heading>
          <FlexBox alignItems="center">
            <Image src={deno} width="35%"></Image>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Hi I'm Doug</Heading>
          <UnorderedList>
            <FlexBox alignItems="flex-start">
                <div>
                    <ListItem>Senior Frontend Engineer at Skilljar</ListItem>
                    <ListItem>He/him</ListItem>
                    <ListItem>D&D, Javascript, Soccer, Comics</ListItem>
                    <ListItem>Two corgis: Bmo and Mochi</ListItem>
                </div>
                <Image src={corgis} width="35%" />
            </FlexBox>
            <Notes>
                - I was inspired to write this talk at SeattleJS Conf in August by Kevin Whinnery
            </Notes>
          </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Agenda</Heading>
            <OrderedList>
                <ListItem>What is Deno?</ListItem>
                <ListItem>Why target Deno?</ListItem>
                <ListItem>Transforming Deno to Node.js with dnt</ListItem>
                <ListItem>Publishing to deno.land and npm</ListItem>
            </OrderedList>
        </Slide>
        <Slide>
            <Heading>What is Deno?</Heading>
            <Quote>Deno stands as a secure runtime designed for executing JavaScript and TypeScript.</Quote>
            <Text>- Mayank Choubey, The Internals of Deno</Text>
            <Notes>
                - Announced in 2018
                - Created by Ryan Dahl, the creator of Node.js
            </Notes>
        </Slide>
        <Slide>
            <Heading>What is Deno?</Heading>
            <Text>
                Announced in 2018, and created by Ryan Dahl, the creator of Node.js, 
                Deno is intended to be the successor to Node.js
            </Text>
        </Slide>
        <Slide>
            <Heading>Dahl's Regrets for Node.js</Heading>
            <UnorderedList>
                <ListItem>Promises</ListItem>
                <ListItem>Open access</ListItem>
                <ListItem>npm</ListItem>
                <ListItem>node_modules</ListItem>
                <ListItem>Implicit require</ListItem>
                <ListItem>index.js</ListItem>
            </UnorderedList>
            <Notes>
                - promises: internals extensively use callbacks, an outdated pattern
                - open access: has access to the file system, network, and child processes by default
                - npm: depend on Microsoft to vend packages
                - node_modules: module resolution doesn't match the ecmascript standards
                - implicit require: module loader has to scan various locations to guess what you mean without .js
                - index.js: adds unneccessary complexity to the module loading system 
            </Notes>
        </Slide>
        <Slide>
            <Heading>Advantages for Deno</Heading>
            <UnorderedList>
                <ListItem>Sandboxing</ListItem>
                <ListItem>TypeScript Support</ListItem>
                <ListItem>Single Executable</ListItem>
                <ListItem>Third-party packages</ListItem>
                <ListItem>Standard library</ListItem>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Sandboxing</Heading>
            <Text>
                Sandboxing means isolating the environment a program is 
                running in so that it cannot affect the system or platform 
                it is running on.
            </Text>
            <Notes>
                - For example, you might want to prevent your unit tests from making network requests
            </Notes>
        </Slide>
        <Slide>
            <Heading>Sandboxing: Node.js</Heading>
            <Text>Node.js has added sandboxing behind a flag as of version 20 (now lts!)</Text>
            <CodePane language="shell">node --experimental-permission --allow-fs-read=* --allow-fs-write=* index.js</CodePane>
        </Slide>
        <Slide>
            <Heading>Sandboxing: Deno</Heading>
            <Text>When running programs using Deno, we have to explicity grant permissions.</Text>
            <CodePane language="shell">deno --allow-read --allow-env --allow-net mod.ts</CodePane>
        </Slide>
        <Slide>
            <Heading>TypeScript</Heading>
            <Text>
                TypeScript is a superset of JavaScript that adds type safety. 
                It catches errors at build time instead of run time.
            </Text>
            <Text>
                Deno supports TypeScript out-of-the-box.
            </Text>
        </Slide>
        <Slide>
            <Heading>TypeScript: Node.js</Heading>
            <OrderedList>
                <ListItem>Install TypeScript</ListItem>
                <ListItem>Create a tsconfig</ListItem>
                <ListItem>Configure compile and watch scripts</ListItem>
                <ListItem>Create your file</ListItem>
                <ListItem>Compile your file</ListItem>
                <ListItem>Run your file</ListItem>
            </OrderedList>
        </Slide>
        <Slide>
            <Heading>TypeScript: Deno</Heading>
            <OrderedList>
                <ListItem>Create your file</ListItem>
                <ListItem>Run your file</ListItem>
            </OrderedList>
        </Slide>
        <Slide>
            <Heading>Single Executable</Heading>
            <Text>
                Deno has a suite of development tools bundled into a single toolkit.
                This makes it easier to configure projects and keep consistency across 
                the community. 
            </Text>
        </Slide>
        <Slide>
            <Heading>Single Executable: Node.js v Deno</Heading>
            <FlexBox justifyContent="space-around">
                <UnorderedList>
                    <ListItem>node</ListItem>
                    <ListItem>node inspect</ListItem>
                </UnorderedList>
                <UnorderedList>
                    <ListItem>deno</ListItem>
                    <ListItem>deno bench</ListItem>
                    <ListItem>deno bundle</ListItem>
                    <ListItem>deno coverage</ListItem>
                    <ListItem>deno fmt</ListItem>
                    <ListItem>deno lint</ListItem>
                    <ListItem>deno test</ListItem>
                    <ListItem>and more!</ListItem>
                </UnorderedList>
            </FlexBox>
        </Slide>
        <Slide>
            <Heading>Single Executable: Deno</Heading>
            <CodePane language="yaml" highlightRanges={[
              [3, 7],
              [25, 26],
              [28, 29],
              [31, 32],
              [34, 35]
            ]}>{denoPr}</CodePane>
        </Slide>
        <Slide>
            <Heading>Standard Library</Heading>
            <Text>
                Deno has a much larger standard library than Node.js that 
                is actively maintained by the Deno team. 
            </Text>
            <Text>    
                The standard library is installed separately from the cli 
                and is heavily inspired by Go.
            </Text>
        </Slide>
        <Slide>
            <Heading>Examples of stdlib additions</Heading>
            <UnorderedList>
                <ListItem>uuid</ListItem>
                <ListItem>fetch</ListItem>
                <ListItem>yaml</ListItem>
                <ListItem>jsonc</ListItem>
                <ListItem>dotenv</ListItem>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Standard Library: Deno</Heading>
            <CodePane language="typescript">
{`// import from the standard library
import { assert } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { parse } from "https://deno.land/std@0.205.0/flags/mod.ts";`}
            </CodePane>
        </Slide>
        <Slide>
            <Heading>Third-party packages</Heading>
            <Text>
                Deno doesn't use npm or pnpm or yarn to manage third-party dependencies.
            </Text>
        </Slide>
        <Slide>
            <Heading>Third-party packages</Heading>
            <FlexBox justifyContent="space-around">
                <div>
                    <Heading color="quaternary">Node.js</Heading>
                    <UnorderedList>
                        <ListItem>npm</ListItem>
                        <ListItem>git urls</ListItem>
                        <ListItem>local paths</ListItem>
                        <ListItem>tarball urls</ListItem>
                    </UnorderedList>
                </div>
                <div>
                    <Heading color="quaternary">Deno</Heading>
                    <UnorderedList>
                        <ListItem>npm</ListItem>
                        <ListItem>git urls</ListItem>
                        <ListItem>local paths</ListItem>
                        <ListItem>deno land</ListItem>
                    </UnorderedList>
                </div>
            </FlexBox>
        </Slide>
        <Slide>
            <Heading>Third-party packages: Deno</Heading>
            <CodePane language="typescript">
{`// import from a deno land package
import cliui from "https://deno.land/x/cliui@v8.0.1-deno/deno.ts";

// import from an npm package
import itscalledsoccer from "npm:/itscalledsoccer/";`}
            </CodePane>
        </Slide>
        <Slide>
            <Heading>Except!</Heading>
            <Text>
                There's like, way more code and developers in the Node.js/npm ecosystem!
            </Text>
            <Text>
                What if we could have the benefits of developing for Deno while also supporting Node.js?
            </Text>
        </Slide>
        <Slide>
            <Heading>dnt - Deno to Node.js Transform</Heading>
            <Text>Takes a Deno module and creates an npm package for use in Node.js</Text>
        </Slide>
        <Slide>
            <Heading>dnt steps</Heading>
            <UnorderedList>
                <ListItem>Builds esm and cjs targets</ListItem>
                <ListItem>Type checks the npm package</ListItem>
                <ListItem>Emits TypeScript declaration files</ListItem>
                <ListItem>Runs the tests against the generated code</ListItem>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Build script</Heading>
            <CodePane language="typescript" highlightRanges={[
              [1, 1],
              [3, 7],
              [9, 9],
              [12, 16],
              [17, 17],
              [18, 30],
              [31, 36],
              [37, 40],
              [41, 43]
            ]}>{dntBuild}</CodePane>
        </Slide>
        <Slide>
            <Heading>Shims</Heading>
            <CodePane language="typescript">{`import main from "./main.ts";
main(Deno.args);
`}</CodePane>
            <Text>Becomes</Text>
            <CodePane language="typescript">{`import "./_dnt.polyfills.js";
import * as dntShim from "./_dnt.shims.js";
import main from "./main.js";

main(dntShim.Deno.args);`}</CodePane>
        </Slide>
        <Slide>
            <Heading>Shims</Heading>
            <CodePane language="shell">
                {dntShims}
            </CodePane>
        </Slide>
        <Slide>
            <Heading>Shims</Heading>
            <Text>There is not yet 100% compatibility between Deno and Node.js at the shim layer</Text>
            <Text>
                <Link href="https://github.com/denoland/node_shims/blob/main/packages/shim-deno/PROGRESS.md">Current progress</Link>
            </Text>
        </Slide>
        <Slide>
            <Heading>Build example</Heading>
            <CodePane language="typescript" highlightRanges={[
                [4, 4], 
                [5, 9], 
                [10 ,16], 
                [21, 29], 
                [31, 39]
            ]}>{dntBuildLogs}</CodePane>
            <Notes>
                - The branch is named main
            </Notes>
        </Slide>
        <Slide>
            <Heading>Unit test example</Heading>
            <CodePane language="typescript" highlightRanges={[[16, 22], [28, 37]]}>{dntTestFailure}</CodePane>
            <Notes>
                - The branch is named test-failure
            </Notes>
        </Slide>
        <Slide>
            <Heading>Type check example</Heading>
            <CodePane language="typescript" highlightRanges={[[11, 15]]}>{dntTypeCheckFailure}</CodePane>
            <Notes>
                - The branch is named type-check-failure
            </Notes>
        </Slide>
        <Slide>
            <Heading>Publishing to npm</Heading>
            <Text>
                The resulting, generated package can be published to npm using the npm cli, 
                so however you publish your npm packages today should work.
            </Text>
        </Slide>
        <Slide>
            <Heading>Publishing to Deno</Heading>
            <Text>Deno modules are published to deno.land/x via a GitHub webhook.</Text>
            <Notes>
                - https://deno.com/add_module
            </Notes>
        </Slide>
        <Slide>
            <Heading>Publishing to Deno</Heading>
            <Text>Deno will also fetch code directly from github via import</Text>
            <CodePane language="typescript">{`import main from 'https://raw.githubusercontent.com/doug-wade/lemmy-scorecard/main/main.ts';
  
await main(Deno.args);`}
            </CodePane>
        </Slide>
        <Slide>
            <Heading>Publishing script</Heading>
            <CodePane language="yaml" highlightRanges={[[14, 17], [22, 25], [27, 30], [32, 33], [35, 39]]}>
                {dntPublishAction}
            </CodePane>
        </Slide>
        <Slide>
            <Heading>Publishing demo</Heading>
            <Link href="https://github.com/doug-wade/lemmy-scorecard/pull/4">Pull request</Link>
            <Notes>
                - dpx lemmyscorecard@v0.0.6 -u CombatWombatEsq -i lemmy.world
            </Notes>
        </Slide>
        <Slide>
          <Heading>Questions?</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={thatsAllFolks} width="50%" />
          </FlexBox>
        </Slide>
      </Deck>
    );
  }
}
