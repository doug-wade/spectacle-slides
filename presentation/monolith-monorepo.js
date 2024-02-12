import React from "react";
import { createRoot } from "react-dom/client";
import {
  CodePane,
  Deck,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import butWhy from "../assets/but-why.gif";

import "normalize.css";
import theme from '../themes/skilljar';

import npmWorkspacesSymlinks from "../assets/npm-workspaces-symlinks.png";
import dag from "../assets/skilljar-dag.drawio.png";
import turboLogs from "../assets/turbo-logs.png";
import thatsAllFolks from "../assets/thats-all-folks.gif";
import fullTurbo from "../assets/full-turbo.png";

import workspacesPackageJson from "../code-examples/workspaces-package-json.example";
import turboJson from "../code-examples/turbo-json.example";

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading>The Monolith Monorepo</Heading>
    </Slide>
    <Slide>
      <Heading>Why?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={butWhy} width="60%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Why use a monorepo at Skilljar</Heading>
      <UnorderedList>
        <ListItem>Use non-Webpack build tools</ListItem>
        <ListItem>
          Use the output of one build step as input to another
        </ListItem>
        <ListItem>Orchestrate processes</ListItem>
        <ListItem>Run dependent steps in topological order</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Use non-Webpack build tools</Heading>
      <Text>
        Since there are multiple compliation units, each one can use a
        separate compiler as long as they compile to a language supported by
        their vm
      </Text>
    </Slide>
    <Slide>
      <Heading>Use the output of one build step as the input</Heading>
      <Text>
        We want to use the output from @skilljar/tokens in
        @skilljar/web-components and @skilljar/vue-components, and use both
        their output in the monolith
      </Text>
    </Slide>
    <Slide>
      <Heading>Detour: The DAG</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={dag} width="50%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Orchestrate processes</Heading>
      <Text>
        We can start all processes required to do development with a single
        command
      </Text>
    </Slide>
    <Slide>
      <Heading>Run dependent steps</Heading>
      <Text>
        We can run all the steps for all the dependencies before running a
        build step
      </Text>
    </Slide>
    <Slide>
      <Heading>Technologies</Heading>
      <UnorderedList>
        <ListItem>npm workspaces</ListItem>
        <ListItem>turborepo</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>npm workspaces: symlinks</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={npmWorkspacesSymlinks} width="70%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>npm workspaces: configuration</Heading>
      <CodePane language="javascript">{workspacesPackageJson}</CodePane>
    </Slide>
    <Slide>
      <Heading>npm workspaces: cli usage</Heading>
      <CodePane language="shell">
        » npm run build -w @skilljar/tokens
      </CodePane>
    </Slide>
    <Slide>
      <Heading>npm workspaces: cli usage</Heading>
      <Text textAlign="center">
        You can, but probably don&apos;t want to, do this (
        <a href="https://github.com/npm/statusboard/issues/517">issue</a>)
      </Text>
      <CodePane language="shell">
        » npm run build --workspaces --if-present
      </CodePane>
    </Slide>
    <Slide>
      <Heading>turborepo: the dag</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={dag} width="50%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>turborepo: configuration</Heading>
      <CodePane language="javascript">{turboJson}</CodePane>
    </Slide>
    <Slide>
      <Heading>turborepo: execution</Heading>
      <Text textAlign="center">It orders and interleaves execution!</Text>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={turboLogs} width="60%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>turborepo: caching</Heading>
      <Text textAlign="center">It does caching!</Text>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={fullTurbo} width="80%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>turborepo: cli usage</Heading>
      <CodePane language="shell">
        » npx turbo run build --filter=@skilljar/tokens
      </CodePane>
    </Slide>
    <Slide>
      <Heading>current modules</Heading>
      <UnorderedList>
        <ListItem>@skilljar/scaffold</ListItem>
        <ListItem>@skilljar/statics</ListItem>
        <ListItem>@skilljar/tokens</ListItem>
        <ListItem>@skilljar/web-components</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>possible future modules</Heading>
      <UnorderedList>
        <ListItem>@skilljar/storybook</ListItem>
        <ListItem>@skilljar/vue-components</ListItem>
        <ListItem>@skilljar/$TEAM (@skilljar/johnny-cache)</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>DAG</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={dag} width="50%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Find out more</Heading>
      <UnorderedList>
        <ListItem>
          npm workspaces docs:
          https://docs.npmjs.com/cli/v7/using-npm/workspaces
        </ListItem>
        <ListItem>turborepo docs: https://turbo.build/repo</ListItem>
        <ListItem>
          internal docs:
          https://skilljar.atlassian.net/wiki/spaces/FE/pages/1374880099/Monorepo
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Questions?</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={thatsAllFolks} width="50%" />
      </FlexBox>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
