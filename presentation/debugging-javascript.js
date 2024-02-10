import React from "react";
import { createRoot } from "react-dom/client";
import {
  CodePane,
  Deck,
  FlexBox,
  Heading,
  Image,
  Notes,
  Slide,
  Text,
} from "spectacle";

import "normalize.css";

import theme from "../themes/default";

import breakpoint from "../assets/breakpoint.png";
import breakpointRebinds from "../assets/const-rebinds-in-console.png";
import debuggerSidebar from "../assets/debugger-sidebar.png";
import openOverridesTab from "../assets/open-overrides-tab.png";
import overridesTab from "../assets/overrides-tab.png";
import saveForOverrides from "../assets/save-for-overrides.png";
import selectFolderForOverrides from "../assets/select-folder-for-overrides.png";

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading>Debugging Javascript</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Text>What to do when you don&apos;t know what to do</Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>The console global</Heading>
      <CodePane language="javascript">
        {`
console.log('foo');
console.log('foo', { bar: 'baz' });
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>console.log and friends</Heading>
      <CodePane language="javascript">
        {`
console.log('foo');
console.warn('foo', { bar: 'baz' });
console.error('foo', new Error('this is a message'));
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>console.table</Heading>
      <CodePane language="javascript">
        {`
console.table([
{ x: 123, y: -12 },
{ x: 321, y: 100 },
{ x: 222, y: 9 },
])
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>console.assert</Heading>
      <CodePane language="javascript">
        {`
console.assert(1 === 1, '1 === 1')
console.assert(1 === 2, '1 === 2')
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>console.count</Heading>
      <CodePane language="javascript">
        {`
console.count('foo')
console.count('foo')
console.count('foo')
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>console.time</Heading>
      <CodePane language="javascript">
        {`
console.time('bar')
setTimeout(() => console.timeEnd('bar'), 1000)
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>console.trace</Heading>
      <CodePane language="javascript">
        {`
console.trace(new Error())
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>console.dir</Heading>
      <CodePane language="javascript">
        {`
console.dir({ bar: 'bar', deeply: { nested: { value: 'foo' }}})
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>console groups</Heading>
      <CodePane language="javascript">
        {`
console.log('This is the outer level')
console.group()
console.log('Level 2')
console.group()
console.log('Level 3')
console.warn('More of level 3')
console.groupEnd()
console.log('Back to level 2')
console.groupEnd()
console.log('Back to the outer level')
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Debugger</Heading>
    </Slide>
    <Slide>
      <Heading>Debugger keyword</Heading>
      <CodePane language="javascript">
        {`
const quux = 'quux'
console.log('foo')
debugger
console.log('bar')
      `}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Debugger sidebar</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={debuggerSidebar} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Breakpoint</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={breakpoint} width="75%" />{" "}
      </FlexBox>
      <Notes>Use dashboard.js since it has source maps</Notes>
    </Slide>
    <Slide>
      <Heading>const rebinds in console</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={breakpointRebinds} width="75%" />{" "}
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Overrides folder</Heading>
    </Slide>
    <Slide>
      <Heading>Open Overrides Tab</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={openOverridesTab} />{" "}
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Select folder for overrides</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={selectFolderForOverrides} />{" "}
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Overrides tab</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={overridesTab} />{" "}
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Save changes for overrides</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={saveForOverrides} />{" "}
      </FlexBox>
    </Slide>
    <Slide>
      <Heading size={1}>Questions?</Heading>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
