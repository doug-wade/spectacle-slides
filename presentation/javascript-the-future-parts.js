// Import React
import React from "react";

// Import Spectacle Core tags
import {
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

const theme = {
  fonts: {
    primary: "Menlo"
  },
  colors: {
    primary: "#042B35",
    secondary: "#D2A03E",
    tertiary: "#FD853D",
    quartenary: "#A7A7A7",
    code: "#A7A7A7",
    text: "#A7A7A7",
    link: "#D2A03E"
  }
};
// SPECTACLE_CLI_THEME_END

// Require CSS
require("normalize.css");

const images = {
  tc39: require("../assets/tc39.png"),
  crystalBall: require("../assets/Crystal-ball.jpg"),
  babel: require("../assets/babel.png"),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Javascript: The Future Parts
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            what's next in everyone's favorite language
          </Text>
        </Slide>
        <Slide>
          <Heading size={4} fit caps textColor="tertiary">
            {"Hi I'm Doug"}
          </Heading>
          <List>
            <ListItem>SDE on Jimmy Eat Curl</ListItem>
            <ListItem>At Skilljar just over a month</ListItem>
            <ListItem>I'm about soccer, D&D and bicycles</ListItem>
          </List>
          <Notes>
            Note that while this talk is targetted at an intermediate Javascript audience, and we likely have some 
	    Python-only developers in the audience.  Please don't be shy about asking for clarification on anything 
	    that is unclear.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="tertiary">How can you see the future?</Heading>
          <Image src={images.crystalBall} width="75%"/>
          <Notes>
            The first question you might ask yourself is: how can you know the future?  This is due to Javascript's
            "Living Standard."  Some future language features are already in progress in public for us to see.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>TC39</Heading>
          <Image src={images.tc39} width="65%"/>
          <Notes>
            The TC39 committee maintains the ECMA 262 standard, the standard that defines JavaScript.  New proposals for
            adding to the standard go through 4 stages, from 0 to 4.  Each progressive stage has more requirements, adding
            things like a formal proposal document, a reference implementation and unit tests. 
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.babel} width="125%"/>
          <Notes>
            One common implementation is to write a Babel plugin, which allows us to use tomorrow's JavaScript today.  I'll
            try to call out a Babel plugin where one is available, since we use Babel as part of our build.  We are a few
	    minor versions behind, but it shouldn't affect most use cases. There may also be an accompanying polyfill,
            included as part of babel-polyfill, or in our case, babel-runtime (the difference is babel-runtime pollutes
	    global scope, unlike babel-polyfill.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>Stage 3</Heading>
          <Notes>
            So before we jump right into the proposals, let's acknowledge that there are way more proposals than we can ever
            get through in an hour, and I haven't tried to rush through them.  My selection criteria was to try to choose the
            ones that are most likely to affect your life today -- proposals that are easy to understand with only a few minutes
            introduction, ones that are available in Babel today, and proposals that are stage 2 or 3 and therefore unlikely to
            go through big changes before they become part of the standard.  This means we'll skip some of the most exciting
            proposals, like the Standard Library, which are likely to fundamentally change the way you write Javascript.  Not
            all mentioned proposals match all criteria; I'll call them out as we go along.  We'll go stage by stage.
          </Notes>
        </Slide>
	<Slide bgColor="tertiary" textColor="primary">
	  <Heading size={6}><Code>Field Declarations</Code></Heading>
	  <CodePane lang="javascript" source={`
class Counter {
	x = 0
	increment { this.x += 1 }
}
const c = new Counter()
c.intcrement()
console.assert(c.x === 1) // Pass
`} />
	  <Notes>
	    First up is field declarations. Previously you had to set values in a constructor. Now, you can declare class fields
	    anywhere in the class definitions. Neat!
	  </Notes>
	</Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={6}><Code>Private Fields</Code></Heading>
          <CodePane lang="javascript" source={`
class Counter {
	#xValue = 0
	get x() { return #xValue }
	increment { this.#xValue += 1 }
	#reset() { xValue = 0 }
	// ...
}
const c = new Counter()
c.increment()
console.assert(c.x === 1)
x.#xValue = 3 // syntax error
	  `}>
          </CodePane>
          <Notes>
	    Next up is private fields. Unlike Python where all fields are public and private fields are by convention
	    are indicated by leading underscore or underscores, modern JavaScript has private fields. Note the leading
	    hashbang that indicates a private field or method. You also need to declare the private field before using
	    it in a method.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={6}><Code>Class Static Methods</Code></Heading>
          <CodePane lang="javascript" source={`
class ColorFinder {
  static #green = "#00ff00";
  static #blue = "#0000ff";
  
  static colorName(name) {
    switch (name) {
      case "blue": return ColorFinder.#blue;
      case "green": return ColorFinder.#green;
      default: throw new RangeError("unknown color");
    }
  }
}
console.assert(ColorFinder.colorName("blue"), "#0000ff") // Pass
	  `}>
          </CodePane>
          <Notes>
	    This pattern is not strictly required in a functional language like JavaScript, where functions are first-class
	    citizens and can be imported and passed as arguments, but this better meets programmer expectations. Note that
	    class static methods can also be private.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={6}><Code>at()</Code></Heading>
          <CodePane lang="javascript" source={`
const l = [1, 2, 3, 4]
console.assert(l[-2] === 3)
	  `}>
          </CodePane>
          <Notes>
	    This is a method that will be familiar to Python developers. Note that you still can't index directly into the 
	    iterable. This is because every iterable is an instance of object, which can have arbitrary indices that based
	    on dynamic names. `[1,2,3][1]` returns 1 because it is at the property index 1.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>Stage 2</Heading>
          <Notes>
            The next set of proposals are stage 2. These are more speculative, but still stable enough that you should
	    feel comfortable using them in production code.
	  </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={6}><Code>throw expressions</Code></Heading>
          <CodePane lang="javascript" source={`
const encoder = encoding === 'utf8' ? new UTF8Encoder : throw new Error()
function save(filename = throw new TypeError('filename required')
          `}>
          </CodePane>
          <Notes>
	    Next are throw expressions. JavaScript has had the throw statement since the beginning, but statements can
	    only appear in certain parts of the code -- as standalone statement. The difference between statements and
	    expressions is pretty formal, but you can loosely think of it as an expression can go anywhere a statement
	    can go, not vice versa. Note, for instance, that we can have an expression as the right-hand side of an
	    assignment, where an if statement could not go.
          </Notes>
        </Slide>        
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}><Code>New Set methods</Code></Heading>
          <CodePane lang="javascript" source ={`
Set.prototype.intersection(iterable)
Set.prototype.union(iterable)
Set.prototype.difference(iterable)
Set.prototype.symmetricDifference(iterable)
Set.prototype.isSubsetOf(iterable)
Set.prototype.isDisjointFrom(iterable)
Set.prototype.isSupersetOf(iterable)
	  `}>
          </CodePane>
          <Notes>
	    For those of you familiar with Sets, these operations may be familiar. A less familiar one might be
	    symmetricDifference, which are elements only in A and those only in B.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Temporal</Heading>
          <CodePane lang="javascript" source={`
const now = Temporal.now.instant()
const beginningOfTime = Temporal.Instant(0n)
const myBirthday = Temporal.Instant.from('2021-08-24T00:00Z')
const lAEpoch = new Temporal.ZonedDateTime(0n, 'America/Los_Angeles');
const duration = new Temporal.Duration({ months: 1, days: 15 })
	  `}>
          <Notes>
	    Temporal is a really big proposal, and probably the one I'm most excited about. For years, we've known that
	    dates are broken in JavaScript, and for a long time the solution was to use moment.js. But moment is pretty
	    big on the wire, as it has accumulated a lot of features over the years. So we're adding Temporals, which
	    is an api built directly into the browser that solves a lot of headaches. The api surface on this one is
	    pretty big, so I encourage you to review it on your own if you're working with js dates. Oh, and all js
	    Temporals are immutable!
          </Notes>
          </CodePane>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Map.prototype.emplace</Heading>
          <CodePane lang="javascript" source={`
// Instead of
if (!map.hasKey(key)) { 
	map.set(key, value); 
}
map.get(key).doThing();

// Now we can
map.emplace(key, { insert: () => value }).doThing()
          `}>
          </CodePane>
          <Notes>
            If you've been writing object-oriented JavaScript (and most code at Indeed seems to be object-oriented), 
            you've probably written a lot of code like this to get privacy, closing over symbols and using calculated
            keys to define the associated object members?  Good news!  You'll no longer have to allocate a Symbol for
            every private class member; Javascript is adding private methods and fields as first class citizens!
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Tuple and Record</Heading>
          <CodePane lang="javascript" source={`
const proposal = #{
	id: 1234,
	title: "Records and Tuples!"
	keywords: #["ecma", "tc39", "proposal", "record", "tuple"]
}
console.log(proposal.id) // 1234
const proposal2 = #{ ...proposal, "plus": "Doug" }
Object.keys(proposal) // ["id", "title", "keywords"]
          `}>
          </CodePane>
          <Notes>
	    Records and tuples follow a general JavaScript trend towards the safety of immutability. Tuples should be
	    familiar to the Pythonistas amongst us; records are similar except they have properties instead of order.
	    Note that they operate the same as objects or arrays, but immutable
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" >
          <Heading size={4}>Error Causes</Heading>
          <CodePane lang="javascript" source={`
async function doTheNeedful() {
  return await fetch('www.skilljar.com').catch(e => throw new Error('Upload failed', e)
}
try {
  await doTheNeedful()
} catch (e) {
  console.log(e) // Error: Upload failed
  console.log(e.cause) // TypeError: Failed to fetch
}
	  `}>
          </CodePane>
          <Notes>
	    Error caused by is as much a proposal about a convention as it is about changing the JavaScript engine.
	    Currently, we could all set a cause property on our errors, but there is no guarantee that it will be
	    there. This will formalize how the error call stack and debugging take place.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}><Code>Decorators</Code></Heading>
          <CodePane lang="javascript" source={`
class MyComponent {
  @autobind
  #clickHandler() {
    fetch('/my-data').then(this.props.handler)
  }

  @time
  render() {
    return h('button', { onclick: { this.#clickHandler } })
  }
}
          `}>
          </CodePane>
	  <Slide bgColor="tertiary" textColor="primary">
	    <Heading size={4}>Iterator Helpers and <Code>.range</Code></Heading>
	    <CodePane language="javascript" source={`
const odds = Number.range(0, Infinity)
  .take(1000)
  .filter((x) => (x % 2))
  .toArray()
`}/>
	  <Notes>
	    I've combined two proposals here -- the iterator helpers, which adds a lot of fluent methods to iterators like take --
	    and the Number.range and BigInt.range methods to show that you can lazily evaluate iterables to create pipelines that
	    work well with async functions and generators.
	  </Notes>
	  </Slide>
          <Notes>
            Caveat Emptor: those of us who have been following the standards process for a while might cringe a bit by the inclusion
	    of decorators here. Decorators are a proposal that has been in progress for some time, and has gone through some changes, 
	    but it is stage 2, and it is fairly useful.  The two decorators here are autobind and time, preceded with the @.  
            Decorators are a way to augment the behavior of classes, methods, functions and fields through function currying.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}><Code>Decorators</Code></Heading>
          <CodePane lang="javascript" source={`
const time = (wrapped) => {
  return () => {
    console.time('timing wrapped');
    const result = wrapped.apply(this, arguments);
    console.timeEnd('timing wrapped');
    return result;
  }
}

          `}>
          </CodePane>
          <Notes>
            Decorators are fundamentally syntactic sugar for functions.  Here, we define a simple implementation of the time decorator
            that we saw in the preceding code sample.  The render method is wrapped by the time method, which calls the wrapped render
            method itself, before and after calling the built-in timing methods.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>Stage 1</Heading>
          <Notes>
            The next set of proposals are stage 1. These are very speculative, and you should not feel comfortable
	    using them in production code.
	  </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}><Code>do</Code> expressions</Heading>
          <CodePane lang="javascript" source={`
const myResult = do {
  switch (myValue) {
    case 1:
      'a'
    case 2:
      'b'
    case 3:
      'c'
    default:
      'x'
  }
}
          `}>
          </CodePane>
          <Notes>
            do expressions are awesome.  Do expressions turn statements into expressions, and return the result of what would be a statement.
            This allows you to return the result of a switch or if statement and assign it to a variable, or return it for a function.
          </Notes>
        </Slide>
	<Slide bgColor="tertiary" textColor="primary">
	  <Heading size={4}>Slice Notation</Heading>
	  <CodePane lang="javascript" source={`
const arr = ['a', 'b', 'c', 'd']
arr[1:2] // ['b', 'c']
arr[1:] // ['b', 'c', 'd']
arr[-2:] // ['c', 'd']
	  `}>
	  </CodePane>
	  <Notes>
	    This should look pretty familiar. It has the same semantics as the Python equivalent, and as Array.slice.
	  </Notes>
	</Slide>
	<Slide bgColor="tertiary" textColor="primary">
	  <Heading size={4}>Pattern Matching</Heading>
	  <CodePane lang="javascript" source={`
const getLength = vector => case (vector) {
  when { x, y, z } -> Math.hypot(x, y, z)
  when { x, y } -> Math.hypot(x, y)
  when [...etc] -> vector.length
}
getLength({ x: 1, y: 2, z: 3 }) // 3.74165
	`}/>
	  <Notes>
	    When I was studying Scala and Standard ML of New Jersey, one of my favorite features was pattern matching. It seemed (and seems) to
	    me as a more elegant solution to a switch statement, or nested ifs. Note that it uses the same semantics as the existing destructuring
	    syntax, making it more relatable and easier to use.
	  </Notes>
        </Slide>
	<Slide bgColor="tertiary" textColor="primary">
	  <Heading size={4}>Decimal</Heading>
	  <CodePane lang="javascript" source={`
function calculateBill(items, tax) {
  let total = 0m
  for (let { price, count } of items) {
    total += price * BigDecimal(count)
  }
  return BigDecimal.round(total * (1m + tax), { maximumFractionDigits: 2, round: "up"});
	  `}/>
	  <Notes>
	    One of the most common errors, and especially when handling money, is the problem of IEEE 754 floating point numbers. The inability of
	    floating point numbers to represent even whole numbers can lead to costly errors. To resolve this, there is a proposal to add a BigDecimal
	    built-in that, like BigInt, represents larger numbers precisely.
	  </Notes>
	</Slide>
	<Slide>
	  <Heading bgColor="tertiary" textColor="primary">Standard Library</Heading>
	  <CodePane lang="javascript" source={`
import { dedent } from '@std/strings'
	  `}/>
	  <Notes>
	    One of the biggest complaints about JavaScript is its lack of a standard library. Luckily there is a proposal to add a mechansism for
	    adding new libraries and methods to the JavaScript standard library without colliding with existing methods and objects. I personally
	    don't have a lot of hope for this one getting through, since the standards committee has been pushing through changes fairly well
	    without it, but there is hope.
	  </Notes>
	</Slide>
	<Slide>
        <Heading size={6} textColor="secondary" caps>But wait there's more</Heading>
          <List>
            <ListItem>Regexp changes</ListItem>
            <ListItem>Top Level <Code>await</Code></ListItem>
            <ListItem><Code>Atomics.waitAsync</Code></ListItem>
	    <ListItem>Import Assertions</ListItem>
            <ListItem>Realms</ListItem>
            <ListItem><Code>=&gt;*</Code> Generator arrow functions</ListItem>
            <ListItem><Code>Promise.try</Code></ListItem>
            <ListItem>Error stacks</ListItem>
	    <ListItem><Code>Function.sent</Code></ListItem>
          </List>
          <Notes>
             I wish we had time to talk through 100% of all the proposals that are in flight right now, but realistically we just can't
             because there are too many.  Some that we didn't talk about that are most worth investigating might be Observables,
             Pattern Matching and Temporal, an improved Date.  We also didn't have time to touch stage 0 proposals.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1}>Questions?</Heading>
          <Heading size={6}>Slides at https://github.com/doug-wade/slides</Heading>
        </Slide>
      </Deck>
    );
  }
}
