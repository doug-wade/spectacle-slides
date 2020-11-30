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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  tc39: require("../assets/tc39.png"),
  crystalBall: require("../assets/Crystal-ball.jpg"),
  babel: require("../assets/babel.png"),
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
            <ListItem>At Skilljar almost two months</ListItem>
            <ListItem>I'm about soccer, D&D and beer</ListItem>
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
            proposals, like Observable and Temporal, which are likely to fundamentally change the way you write Javascript.  Not
            all mentioned proposals match all criteria; I'll call them out as we go along.  We'll go stage by stage.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>Stage 3</Heading>
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
`}
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
          <Heading size={6}><Code>BigInt</Code></Heading>
          <CodePane lang="javascript" source={`
const myBigNumber = BigInt(Number.MAX_SAFE_INTEGER) * 123n
// 1107885508333141893n

typeof 123;
// → 'number'
typeof 123n;
// → 'bigint'
          `}>
          </CodePane>
          <Notes>
            Next are BigInts.  BigInt is a new, arbitrary precision integer class that we can use to represent really
            big numbers.  You define a BigInt by using the n character after an integer value, as I do with 123 here, 
            or use the BigInt constructor, as I do with MAX_SAFE_INTEGER.  Using it with a decimal will yield a 
            SyntaxError (the constructor throws a RangeError).  Note this is a new type altogether, so typeof === number 
            will return false.  Babel parses BigInt but doesn't transpile them, so you can't use them yet.
          </Notes>
        </Slide>        
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}><Code>Array.prototype.&#123;flat, flatmap&#125;</Code></Heading>
          <CodePane lang="javascript" source ={`
[1, [2], [[3]]].flat(2);
// [1,2,3]
[{a: 'a', b: [1, 2]}, {a: 'b', b: [3, 4]}].flatMap((x) => x.b)
// [1, 2, 3, 4]
          `}>
          </CodePane>
          <Notes>
            These two methods are for working with nested arrays.  Flat takes a single argument -- the depth to flatten to.
            It defaults to one and in this case, we have to provide two to successfully retrieve the 3 from its doubly-nested
            position.  Flatmap, on the other hand, always works at a depth of one and can't be deepened.  It's exactly
            equivalent to a map, followed by a flat with no arguments.  This is included in babel-polyfill and can be used today.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Instance Fields</Heading>
          <CodePane lang="javascript" source={`
class Example {
  x = 0

  constructor() {
    this.y = 0 // old style
  }

  incrementX() {
    this.x++
  }
}
          `}>
          <Notes>
            One thing that is difficult when working with Javascript is that fields can be declared anywhere -- in a method,
            in the constructor, even outside of the class.  See, for instance, the y variable here, declared in the 
            constructor in the old style.  The field listed above it, x, is easier to find, especially for Java programmers,
            who are used to an enumeration of all fields at the head of the class.
          </Notes>
          </CodePane>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Private Methods and Fields</Heading>
          <CodePane lang="javascript" source={`
const x = Symbol('x')
const clicked = Symbol('clicked')
class ClickCounter extends DomElement {
  constructor() {
    this.onclick = this[clicked]
    this[x] = 0
  }

  [clicked]() {
    this[x]++
  }
}
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
          <Heading size={4}>Private Methods and Fields</Heading>
          <CodePane lang="javascript" source={`
class ClickCounter extends DomElement {
  #x = 0
  
  constructor() {
    this.onclick = this.#clicked
  }

  #clicked() {
    this.#x++
  }
}
          `}>
          </CodePane>
          <Notes>
            Just add a octothorpe in front of a class member (field or property), and it will be private (only accessible
            to this class instance)!  Note the field declaration is different, not in the constructor; this is technically
            a separate proposal.  These features are implemented in Babel, so you can use it today.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" >
          <Heading size={4}>Static Methods and Fields</Heading>
          <CodePane lang="javascript" source={`
class MyComponent extends React.Component {
  render () {
    return <div>Javascript from the future is {this.props.adjective}!</div>
  }
}
MyComponent.propTypes = {
  adjective: PropTypes.string,
}
          `}>
          </CodePane>
          <Notes>
            You may not have stopped to think about it, but you use static methods and fields all the time.  Anytime you 
            directly attach a property to a class object, you're defining a static member.  For instance, for all the
            prop type definitions, you define static class members.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" >
          <Heading size={4}>Static Methods and Fields</Heading>
          <CodePane lang="javascript" source={`
class MyComponent extends React.Component {
  render () {
    return <div>Javascript from the future is {this.props.adjective}!</div>
  }

  static propTypes = {
    adjective: PropTypes.string,
  }
}
          `}>
          </CodePane>
          <Notes>
            With the new static class members, you can define static methods and fields inline.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" >
          <Heading size={4}>Static Methods and Fields</Heading>
          <CodePane lang="javascript" source={`
class ColorFinder {
  static #red = "#ff0000";
  static #blue = "#00ff00";
  static #green = "#0000ff";
  
  static colorName(name) {
    switch (name) {
      case "red": return ColorFinder.#red;
      case "blue": return ColorFinder.#blue;
      case "green": return ColorFinder.#green;
      default: throw new RangeError("unknown color");
    }
  }
}
          `}>
          </CodePane>
          <Notes>
            Here's an example with both static methods and fields.  These features are implemented in Babel, so you can use it today.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" >
          <Heading size={4}><Code>Object.fromEntries</Code></Heading>
          <CodePane lang="javascript" source={`
const objA = Object.fromEntries([['a', 0], ['b', 1]]); 
// { a: 0, b: 1 }

const map = new Map([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]);
const objB = Object.fromEntries(map);
// { a: 1, b: 2, c: 3 }

const query = Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'));
// { foo: "bar", baz: "qux" }
          `}>
          </CodePane>
          <Notes>
            Object fromEntries is a new way to construct objects from arrays of keys followed by values.  This makes it easier to 
            transform data from other forms, like lists of objects, url params, maps and others.  This is included in babel polyfill
            and can be used today.
          </Notes>
        </Slide>  
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps><Code>Stage 2</Code></Heading>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}><Code>Numeric separators</Code></Heading>
          <CodePane lang="javascript" source={`
1_000_000_000           // Ah, so a billion
101_475_938.38          // And this is hundreds of millions

let fee = 123_00;       // $123 (12300 cents, apparently)
let fee = 12_300;       // $12,300 (woah, that fee!)
let amount = 12345_00;  // 12,345 (1234500 cents, apparently)
let amount = 123_4500;  // 123.45 (4-fixed financial)
let amount = 1_234_500; // 1,234,500
          `}>
          </CodePane>
          <Notes>
            Numeric separators are purely intended to make it easier to communicate with your team and with yourself in the future.
            Using numeric separators doesn't have any change in behavior, only in appearance.  I recognize the top use case; the
            further use cases are from the proposal itself.  There is a Babel plugin for this, so you can use it today. 
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}><Code>Decorators</Code></Heading>
          <CodePane lang="javascript" source={`
class MyComponent extends React.Component {
  @autobind
  #clickHandler() {
    fetch('/my-data').then(this.props.handler)
  }

  @time
  render() {
    return <button onclick={this.#clickHandler}></button>
  }
}
          `}>
          </CodePane>
          <Notes>
            Decorators are a proposal that has been in progress for some time, and has gone through some changes, but it is stage 2,
            and it is fairly useful.  The two decorators here are autobind and time, preceded with the @.  Decorators are a way to
            augment the behavior of classes, methods, functions and fields.
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
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Throw Expressions</Heading>
          <CodePane lang="javascript" source={`
function getEncoder(encoding) {
  const encoder = encoding === "utf8" ? new UTF8Encoder()
                : throw new Error("Unsupported encoding");
}
class Product {
  get id() { return this.#id; }
  set id(value) { this.#id = value || throw new Error("Invalid value"); }
}
          `}>
          </CodePane>
          <Notes>
            This one takes a moment to explain, because we need to understand some language theory, specifically the difference between
            a statement and an expression.  Consider the difference between an if statement and a ternary expression -- both have the
            same basic if/else structure, but you can assign the result of the ternary expression to a variable, which you can't do for
            an if statement.  Previously, throw was a statement, like if, and you couldn't throw in some places; now its an expression 
            and you can.  I've included two such locations; there are many more.  There is a Babel plugin for this, so you can use it
            today.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>New Set methods</Heading>
          <CodePane lang="javascript" source={`
const x = new Set(['a', 'b'])
const y = new Set(['b', 'c'])
x.union(y) // Set('a', 'b', 'c')
x.intersection(y) // Set('b')
x.difference(y) // Set('a')
x.symmetricDifference(y) // Set('a', 'c')
          `}>
          </CodePane>
          <Notes>
            This one is fairly simple; there's a stage 2 proposal to add union, intersection, difference and symmetricDifference to the
            Set in Javascript. intersection creates new Set instance by set intersection operation; union creates new Set instance by 
            set union operation; difference creates new Set without elements present in iterable; symmetricDifference returns Set of 
            elements found only in either this or in iterable.  These methods are added by Babel polyfill, and are available today.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps><Code>Stage 1</Code></Heading>
          <Notes>
            Note that stage 1 is entering the realm where I can no longer in good conscience recommend that you use these professionally.
            At and after stage 2, proposals are much more stable than before stage 2.  I used the decorator proposal with a library
            called MobX on a side project, and that project is stuck on an older version of Babel for the forseeable future while the
            decorator plugin and polyfill are rewritten, after which I'll have to wait for the framework to migrate and may have to do
            some migration myself.  On the other hand, if you want new Javasript features to work like you want and expect, its important
            to use them early and provide feedback (usually in the form of issues on proposal repositories), which you can only do for
            proposals that you have tried.  Consider using them in side projects or hackathon projects, or, in careful consultation with
            your team, in work projects with the understanding that there may be some extra work involved in the long run.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Optional chaining</Heading>
          <CodePane lang="javascript" source={`
if(specimen && specimen.arms && specimen.arms.length > 2)
  console.log("This is probably an octopus");

// This is the same as
if(specimen?.arms?.length > 2)
    console.log("This is probably an alien");

// The operator is ?.
var firstArm = specimen?.arms?.[0]; //CORRECT
var secondArm = specimen?.arms?[1]; //WRONG
          `}>
          </CodePane>
          <Notes>
            This is optional chaining, which makes it easy to handle checking for null or undefined in deeply nested objects.  If
            specimen or arms are undefined, then the whole check will evaluate to undefined.  This means no more "Cannot read 
            property arms of undefined" when you're programming.  Note that the operator is ?., so there are some strange looking
            expressions that result, for instance the arm access at ll 9.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Nullish coalescing</Heading>
          <CodePane lang="javascript" source={`
specimen?.arms?.length ?? 2
const headerText = response.settings?.headerText ?? 'Hello, world!'; // '' evaluates to false
const animationDuration = response.settings?.animationDuration ?? 300; // 0 evaluates to false
const showSplashScreen = response.settings?.showSplashScreen ?? true; // False evaluates to false
          `}>
          </CodePane>
          <Notes>
            This is nullish coalescing.  Often, we use || to express alternatives or defaults, but it can have surprising results as there
            are many falesy values -- false, null, undefined, the empty string, 0.  Nullish coalescing allows you to provide defaults only
            when a value is not provided.  This is available in Babel today.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Collections Of and From</Heading>
          <CodePane lang="javascript" source={`
const mySet = Set.of(1,2,3)
const myOtherSet = Set.from([1,2,3])
const myMap = Map.of(["key", "value"], ["key2", "value2"])
const myWeakSet = WeakSet.of("a", "b", "c")
const myWeakMap = WeakMap.from([["key1", "value1"], ["key2", "value2"]])
          `}>
          </CodePane>
          <Notes>
            These methods, of and from, make constructing collections much easier.  The method of takes a list of arguments and uses that
            to construct a new collection, either a list of key value pairs for maps, or values for sets.  This is in Babel polyfill, so
            you can use it today.
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
          <Heading size={4}><Code>do</Code> expressions</Heading>
          <CodePane lang="javascript" source={`
const myComponent () => (
  <nav>
    <Home />
    {
      do {
        if (loggedIn) {
          <LogoutButton />
        } else {
          <LoginButton />
        }
      }
    }
  </nav>
)
          `}>
          </CodePane>
          <Notes>
            do expressions are especially awesome in React, where you can render values conditionally.  This is available in Babel today.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}><Code>Array.prototype.lastItem</Code></Heading>
          <CodePane lang="javascript" source={`
const lastItem = [1,2,3,4].lastItem // 4
[1,2,3].lastItem = 5 // [1,2,5]
[1,2,3].lastIndex // 2

// Previously
const myArr = [1,2,3,4]
const lastItem = myArr[myArr.length - 1] // 4
          `}>
          </CodePane>
          <Notes>
            It gets the last item from an array!  It's really easy! You can't even off by one error!  You can set things and get indices!
            It's available in Babel today!
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4}>Logical assignment</Heading>
          <CodePane lang="javascript" source={`
// "Or Or Equals"
a ||= b;
a || (a = b);

// "And And Equals"
a &&= b;
a && (a = b);

// "QQ Equals"
a ??= b;
a ?? (a = b);
          `}>
          </CodePane>
          <Notes>
            I think the most interesting of these is the or equals, which sets the value of a to b if and only if a is not already defined.
            We've talked a lot about setting defaults, and this is another way you can do it.
          </Notes>
        </Slide>
        <Slide>
        <Heading size={6} textColor="secondary" caps>But wait there's more</Heading>
          <List>
            <ListItem>Observable</ListItem>
            <ListItem>Regexp changes</ListItem>
            <ListItem><Code>global</Code></ListItem>
            <ListItem>Pattern Matching</ListItem>
            <ListItem><Code>function.sent</Code></ListItem>
            <ListItem>Top-level <Code>await</Code></ListItem>
            <ListItem>WeakRefs</ListItem>
            <ListItem>Realms</ListItem>
            <ListItem><Code>=>*</Code> Generator arrow functions</ListItem>
            <ListItem><Code>Promise.try</Code></ListItem>
            <ListItem>Error stacks</ListItem>
            <ListItem>Temporal</ListItem>
            <ListItem>Pipeline Operator</ListItem>
            <ListItem>Partial Application</ListItem>
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
