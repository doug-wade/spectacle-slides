// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Box,
  Cite,
  Code,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  Notes,
  Progress,
  Quote,
  Slide,
  Text
} from "spectacle";

import blackBoxTesting from "../assets/black-box-testing.png";
import testWarnings from "../assets/test-warnings.png";

const badCounterTest = require("raw-loader!../code-examples/bad-counter-test.example").default;
const emittedEvent = require("raw-loader!../code-examples/emitted-event.example").default;
const fibFinal = require("raw-loader!../code-examples/fib-final.example").default;
const fibrMock = require("raw-loader!../code-examples/fibr-mock.example").default;
const goodCounterTest = require("raw-loader!../code-examples/good-counter-test.example").default;
const initialFib = require("raw-loader!../code-examples/initial-fib.example").default;
const mountVsShallowMount = require("raw-loader!../code-examples/mount-vs-shallow-mount.example").default;
const spyAsArgument = require("raw-loader!../code-examples/spy-as-argument.example").default;
const spyOnApiService = require("raw-loader!../code-examples/spy-on-api-service.example").default;
const stubs = require("raw-loader!../code-examples/stubs.example").default;
const vueInternals = require("raw-loader!../code-examples/vue-internals.example").default;

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

// Require CSS
require("normalize.css");

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck template={template} theme={theme}>
        <Slide>
          <Heading fit caps>
            Unit Testing in Vue
          </Heading>
          <Text fit bold textAlign="center">
            Writing tests effectively
          </Text>
        </Slide>
        <Slide>
          <Heading fit caps>
            A disclaimer
          </Heading>
          <UnorderedList>
              <ListItem>Functional programming examples</ListItem>
              <ListItem>Expected background knowledge</ListItem>
              <ListItem>I've never run this code</ListItem>
              <ListItem>No semicolons</ListItem>
          </UnorderedList>
          <Notes>
              Functional programming = best programming so I'll use it as much as possible
              Everything is the same for OO code, since objects and closures are the same thing
              I assume you know how to do simple things with FE tests, like set props and interact with elements; if not, stop me and ask
              The code is an example; I haven't run it so there might be errors
              We require semicolons because you can get bugs without them but I like the aesthetic
          </Notes>
        </Slide>
        <Slide>
          <Heading fit caps>
            Why unit testing?
          </Heading>
          <UnorderedList>
              <ListItem>Safety when making changes</ListItem>
              <ListItem>Write better code</ListItem>
              <ListItem>Form of documentation</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Components as pure functions</Heading>
            <CodePane language="javascript">
              {`
 Vue.component('lesson-title', {
    props: ['title'],
    template: '<span>{{ title }}</span>'
  })
          `}
          </CodePane>
          <CodePane language="javascript">{`
  function lessonTitle(title) {
    return document.createElement('span').setAttribute('text', title);
  }
          `}
          </CodePane>
          <CodePane language="javascript">{`
const fib = (n) => {
    if (n === 0 || n === 1) {
        return n
    }
    return fib(n-1) + fib(n-2)
}
          `}
          </CodePane>
            <Notes>
                I'm going to get started with something really simple and NOT a component so we can think about unit testing
                independent of Vue; then we'll add the particulars of the framework. Note that all three examples are the
                same for the purpose of unit testing -- they are a pure function that takes some input and returns some output.
                Check out renderElement: https://github.com/skilljar/course-platform/blob/6c87174bb672be5926d603463133de7c922349d3/web-resources/js/pages/courses/expandable-view.js#L141
            </Notes>
        </Slide>
        <Slide>
            <Heading>Getting started</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 7], [9, 13]]}>{initialFib}</CodePane>
            <Notes>
                So here's a test! It doesn't really get any simpler than that. I include the
                export because, along with the function definition, it defines the contract
                we have with our client. There's not a lot to test here, so there's not a lot
                to distract us from the fact that we are testing inputs and outputs -- 
                in particular that given the same input, we get the same output, and the
                expected output at that. This is simple because this is a "pure" function.
            </Notes>
        </Slide>
        <Slide>
            <Heading>Refactoring</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 12], [14, 16], [18, 23]]}>{fibrMock}</CodePane>
            <Notes>
                We've refactored! Note that we don't have to change our tests, so we can feel confident
                that we haven't broken anything, and we know that we won't have to change any of the call
                sites, since the contract hasn't changed. Also note that we _don't_ test fibR -- its not
                part of our customer contract, so its just an implementation detail -- there are a lot of
                other ways to implement memoization that are more efficient (but less functional), and if
                we were to switch to one (for instance, hoisting the memo out of the function), we don't
                want to change the tests.
            </Notes>
        </Slide>
        <Slide>
          <Heading>Black box testing</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={blackBoxTesting} />
          </FlexBox>
        </Slide>
        <Slide>
            <Heading>More refactoring</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 12], [14, 16], [18, 25]]}>{fibFinal}</CodePane>
            <Notes>
                Note that when we refactor a second time, our original unit test still covers the unit
                under test, while our newer test no longer applies.
            </Notes>
        </Slide>
        <Slide>
            <Heading>Components as pure functions</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 6], [8, 17], [19, 25]]}>{badCounterTest}</CodePane>
            <Notes>
                Now we're getting into realistic testing scenarios. Here, we trigger a click handler on a
                button. In a lot of our tests, we mock out the handler and then assert that it will be
                called. However, this means we don't test the actual handler, and we end up testing the
                internals of our component -- our clients will never call the handler directly, so we don't
                want it appearing in our documentation.
            </Notes>
        </Slide>
        <Slide>
            <Heading>Components as pure functions redux</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 6], [8, 17], [19, 24]]}>{goodCounterTest}</CodePane>
            <Notes>
                A much better solution is to exercise the code in the click handler and then test the result.
                This is the same as our fibR example -- its not particularly interesting that we call the
                handler with the right arguments internally; its interesting that we produce the correct DOM.
                This goes back to the idea that we should think of components as pure functions from props to
                DOM.
            </Notes>
        </Slide>
        <Slide>
            <Heading>Spies</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 5], [7, 21], [23, 29]]}>{spyAsArgument}</CodePane>
            <Notes>
                So what do we use spies for, then? Spies are useful when a prop is a function.
                It allows us to check that the callback was executed with the arguments that we
                expect, since passing arguments to a callback is part of our contract with our
                clients; part of our output.
            </Notes>
        </Slide>
        <Slide>
            <Heading>Spies</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 6], [8, 23], [25, 33]]}>{spyOnApiService}</CodePane>
            <Notes>
                So what else do we use spies for, then? Spies are useful when there are side-effects.
                The line between what is output and what is a side-effect can be somewhat blurry at
                times, but the network and console output are both canonical examples of side-effects.
                We have to spy on the ApiService because it can't make real network calls. We do,
                however, need to test that the processing of the response is correct, so we need to
                mock the return value and validate that it has been handled properly by the component.

                Here's a more realistic example of taking a dependency. In this case, we don't have
                any choice but to mock the dependency, because it is _not_ a pure function! It has
                side-effects -- the network. Some functional languages don't allow side-effects for
                for this kind of reason, but thankfully javascript isn't one of them, because it
                requires the most complicated cs idea I've ever encountered -- monads. I do have
                a couple of question marks here as to what we should assert. GET requests should be
                idempotent, so we don't technically need to make the request, but I might anyway.

                Always! Mock! The! Network!
            </Notes>
        </Slide>
        <Slide>
            <Heading>Unit under test</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 12], [14, 16], [18, 25]]}>{fibFinal}</CodePane>
            <Notes>
                One of the hard parts about unit testing is defining what the unit under test is.
                In this case, my tests are actually testing both the fib function, but also the
                func-utils package. This makes it not _actually_ a unit test! It's actually an
                integration test, but integration tests are better. The downside is that fib tests
                will fail if there is a bug introduced in makeAdder, even if the implementation is
                correct. I think this is okay, since the makeAdder tests would also be failing, so
                you can figure out what's happening fairly easily.
            </Notes>
        </Slide>
        <Slide>
            <Heading>Mount vs shallowMount</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 6], [8, 15], [17, 23]]}>{mountVsShallowMount}</CodePane>
            <Notes>
                When we're testing a component, we have a choice whether to mount or shallowMount
                a given component while testing. shallowMounting doesn't render the child components,
                so for example in this code snippet we wouldn't render ChildComponent and so querying
                for "I'm a child" will return nothing. So, which one should we use? For a true unit
                test, you would use shallowMount, the same as you would mock makeAdder. This has the
                added benefit of rendering faster! But I would still use mount here for the same reasons
                that I wouldn't mock makeAdder.
            </Notes>
        </Slide>
        <Slide>
            <Heading>Stubs</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 5], [6, 13], [15, 26]]}>{stubs}</CodePane>
            <Notes>
                When we're testing a component, we have a choice whether to mount or shallowMount
                a given component while testing. shallowMounting doesn't render the child components,
                so for example in this code snippet we wouldn't render ChildComponent and so querying
                for "I'm a child" will return nothing. So, which one should we use? For a true unit
                test, you would use shallowMount, the same as you would mock makeAdder. This has the
                added benefit of rendering faster! But I would still use mount here for the same reasons
                that I wouldn't mock makeAdder.
            </Notes>
        </Slide>
        <Slide>
          <Heading>Don't test Vue internals</Heading>
          <CodePane language="javascript" highlightRanges={[[1, 3], [5, 9], [11, 14], [16, 19]]}>{vueInternals}</CodePane>
        </Slide>
        <Slide>
            <Heading>Emitted events</Heading>
            <CodePane language="javascript" highlightRanges={[[1, 3], [5, 15], [17, 26]]}>{emittedEvent}</CodePane>
            <Notes>
                Emitted events are also part of our contract with our clients, part of our API, so
                we need to test them as well. Here's a quick example. Note that we can directly
                trigger the events by calling them on the Vue instance directly, but we should only
                use that as an escape hatch -- it is much better to interact with the component in
                a way where the event will be emitted, since that exercises the code in realistic
                use cases, documents real-world use cases, and tests that events are emitted in the
                way we expect -- in this case, it doesn't really matter if emitting the event triggers
                the right values, it matters if the click triggers the event.
            </Notes>
        </Slide>
        <Slide>
          <Heading>find vs findComponent</Heading>
          <CodePane language="javascript">{`
import Bar from '@components/Bar'

test('selects ', () => {
  const component = mountMyComponent()

  const foo = component.find('#foo') // if you must
  const bar = component.findComponent(Bar) // preferred
})
          `}</CodePane>
        </Slide>
        <Slide>
          <Heading>Test Warnings</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src={testWarnings} width={"45%"}/>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
