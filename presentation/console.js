import React from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  CodePane,
  Deck,
  Heading,
  Image,
  Notes,
  Slide,
  Text,
} from "spectacle";

const images = {
    assertions: require("../assets/assertions.png"),
    commonjs: require("../assets/shamwow.jpg"),
    counting: require("../assets/counting.png"),
    dir: require("../assets/dir.png"),
    groups: require("../assets/groups.png"),
    logLevels: require("../assets/log-levels.png"),
    profiling: require("../assets/profiling.png"),
    stackTraces: require("../assets/stack-traces.png"),
    tables: require("../assets/tables.png"),
    timeline: require("../assets/timeline.png"),
};

const Presentation = () => (
  <Deck>
    <Slide>
        <Heading>Using Chrome&apos;s console</Heading>
        <Heading fontSize="h3">It&apos;s not just console.log anymore</Heading>
        <Text>
            Created by <a href="http://github.com/doug-wade">Doug Wade</a> / <a href="https://mastodon.xyz/@dougwade">@dougwade</a>
        </Text>
    </Slide>

    <Slide>
        <Heading>console.log</Heading>
        <CodePane language="javascript">{`
console.log("Karate, the 'Dane Cook' of martial arts?");
> Karate, the 'Dane Cook' of martial arts?`}
        </CodePane>
        <Image width="400px;" src={images.shamwow} />
    </Slide>

    <Slide>
        <Heading>log levels</Heading>
        <Box>Debug: <CodePane language="javascript">{`console.debug()`}</CodePane></Box>
        <Box>Info: <CodePane language="javascript">{`console.info()`}</CodePane></Box>
        <Box>Info: <CodePane language="javascript">{`console.log()`}</CodePane></Box>
        <Box>Warn: <CodePane language="javascript">{`console.warn()`}</CodePane></Box>
        <Box>Error: <CodePane language="javascript">{`console.error()`}</CodePane></Box>

        <Text>
        <CodePane language="javascript">{`console.debug()`}</CodePane> and
        <CodePane language="javascript">{`console.info()`}</CodePane> are just aliases for
        <CodePane language="javascript">{`console.log()`}</CodePane>
        </Text>

        <CodePane language="javascript">{`
console.debug("Lana");
console.warn("Lana!");
console.error("LANA!!!");
console.info("Danger zone.");`}
        </CodePane>
    </Slide>

    <Slide>
        <Image src={images.logLevels} />
    </Slide>

    <Slide>
        <Heading>Format specifiers</Heading>
        <Text>All log levels support string interpolation using format specifiers that correspond to the remaining parameters to the log function.</Text>
        <CodePane language="javascript">{`
const interjection = "Jeezy-petes!";
console.log('Uses interjection %s', interjection);`}
        </CodePane>
    </Slide>

    <Slide>
        <Heading>Format specifiers</Heading>
        <table>
          <thead>
            <tr>
              <th>Specifier</th>
              <th style={{textAlign: "left"}} >Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>%s</td>
              <td style={{textAlign: "left"}} >String</td>
            </tr>
            <tr>
              <td>%i or %d</td>
              <td style={{textAlign: "left"}} >Integer</td>
            </tr>
            <tr>
              <td>%f</td>
              <td style={{textAlign: "left"}} >Floating point value</td>
            </tr>
            <tr>
              <td>%o</td>
              <td style={{textAlign: "left"}} >DOM element</td>
            </tr>
            <tr>
              <td>%O</td>
              <td style={{textAlign: "left"}} >JavaScript object</td>
            </tr>
            <tr>
              <td>%c</td>
              <td style={{textAlign: "left"}} >Applies CSS style rules as specified by a second parameter</td>
            </tr>
          </tbody>
        </table>
      </Slide>

    <Slide>
        <Heading>Logging groups</Heading>
        <Text>
            <CodePane language="javascript">{`console.group(label)`}</CodePane> starts a logging group, and
            <CodePane language="javascript">{`console.groupEnd()`}</CodePane> ends it.
            <CodePane language="javascript">{`console.groupCollapsed(label)`}</CodePane> begins a logging group that is collapsed by default.
        </Text>
        <CodePane language="javascript">{`
const characters = [
    { name: 'Cyril', age: 45, aliases: ['Odie McCracken'] },
    { name: 'Cheryl', age: 32, aliases: ['Carol', 'Cherlene'] },
    { name: 'Lana', age: 33, aliases: ['Shirley Temper'] },
    { name: 'Archer', age: 37, aliases: ['Duchess', 'Randy'] }
];
characters.forEach((character) => {
    console.group('Logging character ' + character.name);
    console.groupCollapsed('Aliases');
    character.aliases.forEach(alias => console.log('alias %s', alias));
    console.groupEnd();
    console.log('age %i', character.age);
    console.groupEnd();
});`}
        </CodePane>
    </Slide>

    <Slide>
        <Image src={images.groups} />
    </Slide>

    <Slide>
        <Heading>Logging objects</Heading>
        <Text>
            <CodePane language="javascript">{`console.dir(object)`}</CodePane>
             outputs an object and its keys.
            <CodePane language="javascript">{`console.table(array)`}</CodePane>
             outputs a tabular representation of an array of objects.
        </Text>
        <CodePane language="javascript">{`
const characters = [
    { name: 'Krieger', age: 45, aliases: [] },
    { name: 'Cheryl', age: 32, aliases: ['Carol', 'Cherlene'] },
    { name: 'Lana', age: 33, aliases: ['Shirley Temper'] },
    { name: 'Archer', age: 37, aliases: ['Duchess', 'Randy'] }
]
console.dir(characters[3]);
console.table(characters);`}
        </CodePane>
        <Notes>
            Here&apos;s code with dates to show dates
            <CodePane language="javascript">{`
console.dir({ name: 'Archer', age: 37, aliases: ['Duchess', 'Randy'], created: new Date() });
            `}</CodePane>
              <CodePane language="javascript">{`
const characters = [
    { name: 'Krieger', age: 45, aliases: [], created: new Date() },
    { name: 'Cheryl', age: 32, aliases: ['Carol', 'Cherlene'], created: new Date() },
    { name: 'Lana', age: 33, aliases: ['Shirley Temper'], created: new Date() },
    { name: 'Archer', age: 37, aliases: ['Duchess', 'Randy'], created: new Date() }
]
console.table(characters);
            `}</CodePane>
        </Notes>
    </Slide>

    <Slide>
        <Image src={images.dir} />
    </Slide>

    <Slide>
        <Image src={images.tables} />
    </Slide>

    <Slide>
        <Heading>Stack Traces</Heading>
        <Text>Log a stack trace using <CodePane language="javascript">{`console.trace(message)`}</CodePane></Text>
        <CodePane language="javascript">{`
(function one() {
    (function two() {
      (function three() {
        console.trace("I have a stack trace");
      })();
    })();
})();`}
        </CodePane>
    </Slide>

    <Slide>
        <Image src={images.stackTraces} />
    </Slide>

    <Slide>
          <Heading>Assertions</Heading>
          <Text>Perform ad-hoc tests with <CodePane language="javascript">{`console.assert(assertion, message)`}</CodePane></Text>
          <CodePane language="javascript">{`
function KriegerClone (number) {
    this.number = number;
    this.greetKrieger = function(timeOfDay) {
      // should be less than; error intentional so assertion fails.
      return 'Guten ' + (timeOfDay.getHours() > 17 ? 'Tag' : 'Abend')
       + ' Klon-Bruder! Ich bin ' + this.number + '.';
    }
}
const clone = new KriegerClone(42);
const testDate = new Date(2015, 8, 24, 16, 0, 0);
const expected = 'Guten Tag Klon-Bruder! Ich bin 42.';
console.assert(expected === clone.greetKrieger(testDate), "Krieger clone should greet correctly");
          `}</CodePane>
        </Slide>
    <Slide>
        <Image src={images.assertions} />
    </Slide>

    <Slide>
        <Heading>Counting</Heading>
        <Text>Use <CodePane language="javascript">{`console.count(message)`}</CodePane>
             to count the number of times a message is logged.
        </Text>
        <CodePane language="javascript">{`
const clones = new Array(100);
for (let i = 0; i < 100; i++) {
    console.count("cloning Krieger.");
    clones[i] = new KriegerClone(i);
}`}
        </CodePane>
    </Slide>

    <Slide>
        <Image src={images.counting} />
    </Slide>

        <Slide>
          <Heading>Timing</Heading>
          <Text>Wrap a code block in
            <CodePane language="javascript">{`console.time(label)`}</CodePane> and
            <CodePane language="javascript">{`console.timeEnd(label)`}</CodePane> with the same label to time something. Use
            <CodePane language="javascript">{`console.timeStamp(label)`}</CodePane> to mark the timeline with an event.
          </Text>
          <CodePane language="javascript">{`
  function KriegerClone (number) { this.number = number; }

  var label = "Clone Krieger";
  console.time(label);
  var clones = new Array(1000000);
  for (var i = 0; i < 1000000; i++) {
    if (i === 500000) { console.timeStamp("Halfway there!") }
    clones[i] = new KriegerClone(i);
  }
  console.timeEnd(label);
          `}</CodePane>
          <Notes>
            Strangely, time / timeEnd is unlike group / groupEnd and profile / profileEnd, neither of which require label to be passed to the end method.
          </Notes>
        </Slide>
        <Slide>
          <Image src={images.timeline} />
        </Slide>

    <Slide>
        <Heading>Profiling</Heading>
        <Text>Wrap a code block in
            <CodePane language="javascript">{`console.profile(label)`}</CodePane> and
            <CodePane language="javascript">{`console.profileEnd()`}</CodePane>
            to profile a block of code using the browser profiler.
        </Text>
        <CodePane language="javascript">{`
function KriegerClone (number) { this.number = number; }

const label = "Clone Krieger";
console.profile(label);
const clones = new Array(1000000);
for (let i = 0; i < 1000000; i++) {
    clones[i] = new KriegerClone(i);
}
console.profileEnd(label);`}
        </CodePane>
    </Slide>

    <Slide>
        <Image src={images.profiling} />
    </Slide>

      <Slide>
        <Heading>THE END</Heading>
        <Text>
          Get the slides:
            <CodePane language="shell">{`
git clone https://github.com/doug-wade/spectacle-slides`}
            </CodePane>
        </Text>
      </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
