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
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";


// Import theme
import { theme } from "spectacle-theme-solarized-dark";

// Require CSS
require("normalize.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Unit Testing in Vue
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Writing tests effectively
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Functional Programming alert!!!
          </Heading>
          <Notes>
              Functional programming = best programming so I'll use it as much as possible
              Everything is the same for OO code, since objects and closures are the same thing
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why unit testing?
          </Heading>
          <List>
              <ListItem>Safety when making changes</ListItem>
              <ListItem>Write better code</ListItem>
              <ListItem>Form of documentation</ListItem>
          </List>
        </Slide>
        <Slide>
            <Heading size={4}>Components as pure functions</Heading>
            <CodePane lang="javascript" source={`
 Vue.component('lesson-title', {
    props: ['title'],
    template: '<span>{{ title }}</span>'
  })
          `}
          />
          <CodePane lang="javascript" source={`
  function lessonTitle(title) {
    return renderElement('span', {textContent: title});
  }
          `}
          />
            <CodePane lang="javascript" source={`
const fib = (n) => {
    if (n === 0 || n === 1) {
        return n
    }
    return fib(n-1) + fib(n-2)
}
          `}
          />
            <Notes>
                I'm going to get started with something really simple and NOT a component so we can think about unit testing
                independent of Vue; then we'll add the particulars of the framework. Note that all three examples are the
                same for the purpose of unit testing -- they are a pure function that takes some input and returns some output.
                Check out renderElement: https://github.com/skilljar/course-platform/blob/6c87174bb672be5926d603463133de7c922349d3/web-resources/js/pages/courses/expandable-view.js#L141
            </Notes>
        </Slide>
        <Slide>
            <Heading size={4}>Getting started</Heading>
            <CodePane lang="javascript" source={`
const fib = (n) => {
    if (n === 0 || n === 1) {
        return n
    }
    return fib(n-1) + fib(n-2)
}
export default { fib }

describe('fib', () => {
    it('should calculate fibonacci numbers', () => {
        expect(fib(5)).toBe(8)
    })
})
          `}
          />
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
            <Heading size={4}>Refactoring</Heading>
            <CodePane lang="javascript" source={`
const fibR = (n, memo) => {
    if (memo[n]) {
        return memo[n]
    }
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}
const fib = (n) => {
    return fibR(n, [0,1])
}
export default { fib }

describe('fib', () => {
    it('should calculate fibonacci numbers', () => {
        expect(fib(5)).toBe(8)
    })

    it('should test with mocks', () => {
        const fibRSpy = jest.spyOn(fibR)
        fib(5)
        
        expect(fibRSpy).toHaveBeenCalled()
    })
})
          `}
          />
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
            <Heading size={4}>What is the unit under test?</Heading>
            <CodePane lang="javascript" source={`
import { makeAdder, makeSubtracter } from './func-utils'

// const makeAdder = (x) => (n) => n + x
// const makeSubtracter = (x) => (n) => n - x 

const fib = (n) => {
    if (n === 0 || n === 1) {
        return n
    }
    return makeAdder(fib(makeSubtracter(1)(n) + fib(makeSubtracter(2)(n))(n)
}
export default { fib }

describe('fib', async () => {
    it('should calculate fibonacci numbers', () => {
        expect(fib(5)).toBe(8)
    })
})
          `}
          />
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
            <Heading size={4}>Side-effects</Heading>
            <CodePane lang="javascript" source={`
import ApiService from './ApiService'
const fib = (n) => {
    return ApiService.getFib(n)
}
export default { fib }

describe('fib', async () => {
    it('should calculate fibonacci numbers', async () => {
        const input = 5
        const expectedResult = 8
        const getFibSpy = jest.spyOn(ApiService, 'getFib').mockReturnValue(expectedResult)
        const result = await fib(input)

        expect(result).toBe(expectedResult)
        // expect(getFibSpy).toHaveBeenCalled() ??
        // expect(getFibSpy).toHaveBeenCalledWith(input) ???
    })
})
          `}
          />
            <Notes>
                Here's a more realistic example of taking a dependency. In this case, we don't have
                any choice but to mock the dependency, because it is _not_ a pure function! It has
                side-effects -- the network. Some functional languages don't allow side-effects for
                for this kind of reason, but thankfully javascript isn't one of them, because it
                requires the most complicated cs idea I've ever encountered -- monads. I do have
                a couple of question marks here as to what we should assert. GET requests should be
                idempotent, so we don't techincally need to make the request, but I might anyway.
            </Notes>
        </Slide>
        <Slide>
            <Heading size={4}>Side-effects</Heading>
            <CodePane lang="javascript" source={`
import ApiService from './ApiService'
const fib = (n) => {
    return ApiService.getFib(n)
}
export default { fib }

describe('fib', async () => {
    it('should calculate fibonacci numbers', async () => {
        const input = 5
        const expectedResult = 8
        const getFibSpy = jest.spyOn(ApiService, 'getFib').mockReturnValue(expectedResult)
        const result = await fib(input)

        expect(result).toBe(expectedResult)
        // expect(getFibSpy).toHaveBeenCalled() ??
        // expect(getFibSpy).toHaveBeenCalledWith(input) ???
    })
})
          `}
          />
            <Notes>
                Here's a more realistic example of taking a dependency. In this case, we don't have
                any choice but to mock the dependency, because it is _not_ a pure function! It has
                side-effects -- the network. Some functional languages don't allow side-effects for
                for this kind of reason, but thankfully javascript isn't one of them, because it
                requires the most complicated cs idea I've ever encountered -- monads. I do have
                a couple of question marks here as to what we should assert. GET requests should be
                idempotent, so we don't techincally need to make the request, but I might anyway.
            </Notes>
        </Slide>
        <Slide>
            <Heading size={4}>Components as pure functions again</Heading>
            <CodePane lang="javascript" source={`
 const LessonTitle = Vue.component('lesson-title', {
    props: ['title'],
    template: '<span>{{ title }}</span>'
  })
  test('displays title', () => {
    const title = 'frontend team 4 lyfe'
    const wrapper = mount(LessonTitle, {
      propsData: { title }
    })

    expect(wrapper.text()).toContain(title)
  })
          `}
          />
            <Notes>
                And so we come back to our original example. This is the same as our fib function -- its
                a pure function from props to DOM. When we test it, we give it some stable input and expect
                some stable output. There's a fancy wrapper object around the rendered Vue component that
                allows us convenience methods to interact with it, but fundamentally its still just a pure
                function from props to DOM.
            </Notes>
        </Slide>
        <Slide>
            <Heading size={4}>Vue vs. renderElement</Heading>
            <CodePane lang="javascript" source={`
  function lessonTitle(title) {
    return renderElement('span', {textContent: title});
  }
  test('displays title', () => {
    const title = 'frontend team 4 lyfe'
    const wrapper = lessonTitle(title)

    expect(title.innerText).toContain(title)
  })
          `}
          />
            <Notes>
                This is _exactly_ the same thing as the Vue example.
            </Notes>
        </Slide>
        <Slide>
            <Heading size={4}>Mount vs shallowMount</Heading>
            <CodePane lang="javascript" source={`
<template>
<div>
  <child-component msg="I'm a child" />
  <p>I'm a parent</p>
</div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
  name: 'ParentComponent',
  components: { ChildComponent },
}
</script>
  test('renders correctly', () => {
    //const wrapper = mount(ParentComponent) ???
    //const wrapper = shallowMount(ParentComponent) ???

    expect(wrapper.text()).toContain("I'm a parent")
    //expect(wrapper.text()).toContain("I'm a child") this fails
  })
          `}
          />
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
            <Heading size={4}>Components as pure functions</Heading>
            <CodePane lang="javascript" source={`
<template>
<div>
  <p>{{ value }}</p>
  <button @click="increment">Increment</p>
</div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
      increment() {
          this.value++
      }
  },
}
</script>
  test('increments correctly', () => {
    const incrementSpy = jest.spyOn(Counter.methods, 'increment')
    const wrapper = mount(Counter)
    wrapper.find('button').trigger('click')

    expect(incrementSpy).toHaveBeenCalled()
  })
          `}
          />
            <Notes>
                Now we're getting into realistic testing scenarios. Here, we trigger a click handler on a
                button. In a lot of our tests, we mock out the handler and then assert that it will be
                called. However, this means we don't test the actual handler, and we end up testing the
                internals of our component -- our clients will never call the handler directly, so we don't
                want it appearing in our documentation.
            </Notes>
        </Slide>
        <Slide>
            <Heading size={4}>Components as pure functions redux</Heading>
            <CodePane lang="javascript" source={`
<template>
<div>
  <p>{{ value }}</p>
  <button @click="increment">Increment</p>
</div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
      increment() {
          this.value++
      }
  },
}
</script>
  test('increments correctly', () => {
    const wrapper = mount(Counter)
    wrapper.find('button').trigger('click')

    expect(wrapper.text()).toBe('1')
  })
          `}
          />
            <Notes>
                A much better solution is to exercise the code in the click handler and then test the result.
                This is the same as our fibR example -- its not particularly interesting that we call the
                handler with the right arguments internally; its interesting that we produce the correct DOM.
                This goes back to the idea that we should think of components as pure functions from props to
                DOM.
            </Notes>
        </Slide>
        <Slide>
            <Heading size={4}>Spies</Heading>
            <CodePane lang="javascript" source={`
<template>
<div>
  <button class="button__primary" @click="clickHandler">Click Me!</p>
</div>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    onclick: {
        type: Object
    }
  },
  methods: {
      click() {
          this.onclick()
      }
  },
}
</script>
  test('increments correctly', () => {
    const clickSpy = jest.spy()
    const wrapper = mount(PrimaryButton, { onclick: clickSpy})
    wrapper.find('button').trigger('click')

    expect(clickSpy).toHaveBeenCalled()
  })
          `}
          />
            <Notes>
                So what do we use spies for, then? Spies are useful when a prop is a function.
                It allows us to check that the callback was executed with the arguments that we
                expect, since passing arguments to a callback is part of our contract with our
                clients; part of our output.
            </Notes>
        </Slide>
        <Slide>
            <Heading size={4}>Spies</Heading>
            <CodePane lang="javascript" source={`
<template>
<div>
  <p>{{ value }}</p>
  <button class="button__primary" @click="clickHandler">Click Me!</p>
</div>
</template>

<script>
import ApiService from '../../js/services/ApiService';
export default {
  name: 'PrimaryButton',
  methods: {
      click() {
          ApiService.recordClick().then(resp => this.value = resp)
      }
  },
  data() {
      return {
        value: 0
      }
  }
}
</script>
  test('increments correctly', () => {
    const returnValue = 42
    const recordClickSpy = jest.spyOn(ApiService.methods, 'recordClick').mockReturnValue(returnValue)
    const wrapper = mount(PrimaryButton)
    wrapper.find('button').trigger('click')

    expect(recordClickSpy).toHaveBeenCalled()
    expect(wrapped.find('p').text()).toBe(returnValue)
  })
          `}
          />
            <Notes>
                So what else do we use spies for, then? Spies are useful when there are side-effects.
                The line between what is output and what is a side-effect can be somewhat blurry at
                times, but the network and console output are both canonical examples of side-effects.
                We have to spy on the ApiService because it can't make real network calls. We do,
                however, need to test that the processing of the response is correct, so we need to
                mock the return value and validate that it has been handled properly by the component.
            </Notes>
        </Slide>
        <Slide>
            <Heading size={4}>Emitted events</Heading>
            <CodePane lang="javascript" source={`
<template>
<button class="button__primary" @click="clickHandler">Click me!</button>
</template>

<script>
export default {
  name: 'PrimaryButton',

  methods: { 
    clickHandler() {
      this.$emit('click', 'value-one', 'value-two')
    }
  }
}
</script>
  test('increments correctly', () => {
    const wrapper = mount(PrimaryButton)
    wrapper.find('button').trigger('click')

    const { click } = wrapper.emitted()
    // wrapper.vm.emitEvent() ???

    expect(click[0]).toBe('value-one')
    expect(click[1]).toBe('value-two')
  })
          `}
          />
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
          <Heading>Mock the network</Heading>
        </Slide>
      </Deck>
    );
  }
}
