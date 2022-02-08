// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  ListItem,
  Notes,
  Progress,
  Quote,
  Slide,
  Text,
  UnorderedList,
} from 'spectacle';

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

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

// Require CSS
require('normalize.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
};

// see also https://css-tricks.com/words-avoid-educational-writing/
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} template={template}>
        <Slide>
          <Heading fit caps lineHeight={1}>
            {"Just don't say just"}
          </Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Text fit bold>
              talking, writing, and thinking about technical solutions
            </Text>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading caps>OR</Heading>
          <Heading fit>SIMPLE IS DIFFICULT</Heading>
        </Slide>
        <Slide>
          <Heading caps>Storytime</Heading>
          <Notes>
            One time I was writing the initial version of Lerna and having problems with
            publishing intermediate builds because we'd have conflicts on CI between branches
            incrementing minor versions to the same version. My tech lead suggested we 'just'
            use shasums, and I felt super dumb because it was obvious that I didn't understand
            something that he assumed I should.
          </Notes>
        </Slide>
        <Slide>
          <Heading caps>What you say</Heading>
          <Text fit>{"Why don't we just..."}</Text>
        </Slide>
        <Slide>
          <Heading caps>What I hear</Heading>
          <Text fit>{"You're dumb for not thinking of..."}</Text>
        </Slide>
        <Slide>
          <Heading caps>What I feel</Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <Image src='http://i.dailymail.co.uk/i/pix/2012/05/27/article-0-1351D180000005DC-524_468x340.jpg' />
          </FlexBox>
        </Slide>
        <Slide>
          <Heading caps>What you probably actually mean</Heading>
          <Text fit>{'I want to casually discuss a possible solution'}</Text>
        </Slide>
        <Slide>
          <Heading caps>{'What you might not want to say'}</Heading>
          <UnorderedList>
            <ListItem>Obviously</ListItem>
            <ListItem>Basically</ListItem>
            <ListItem>Simply</ListItem>
            <ListItem>Clearly</ListItem>
            <ListItem>Self-evident</ListItem>
            <ListItem>Easy</ListItem>
            <ListItem>Everyone knows</ListItem>
            <ListItem>Of course</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading caps>{'What you might say instead'}</Heading>
          <UnorderedList>
            <ListItem>{"In the past I've..."}</ListItem>
            <ListItem>{"I've seen other projects..."}</ListItem>
            <ListItem>{'Have you considered...'}</ListItem>
            <ListItem>{'It seems to me...'}</ListItem>
            <ListItem>{'It might be easier to...'}</ListItem>
            <ListItem>{'What about...'}</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <Heading caps>Try to do this when estimating too</Heading>
          <Text fit>Things are rarely as simple as they seem</Text>
          <Notes>
            It is an easy trap to fall into when you're doing estimations -- oh, you just do this
            one thing and then its solved. It's rarely you 'just' any ticket -- if it were easy,
            it would likely already be done. Instead, respect the complexity of tickets -- testing,
            code reviews, understanding the context etc.
          </Notes>
        </Slide>
        <Slide>
          <Heading caps>It's not 'just' a one line change</Heading>
          <Text fit>Test like every change can cause an outage</Text>
          <Notes>
            Even when we have software solutions that seem very simple -- for instance, one-line changes --
            don't allow yourself to be complacent. One-line changes can take down the service the same as a
            1000-line change. Make sure to exercise the code under test in all the common use cases and some
            of the uncommon use cases to make sure it works as anticipated.
          </Notes>
        </Slide>
        <Slide>
          <Heading caps>Make sure to define your terms</Heading>
          <Text fit>Don't assume you know what your audience knows</Text>
          <Notes>
            Defining your terms is a good idea even if you're working with someone that probably does know
            what you're talking about because many terms are ambiguous. For instance, many people use href
            and url interchangeably, so it is worthwhile to distinguish if you use 'href' to mean a string 
            and 'url' to mean a url object.
          </Notes>
        </Slide>
        <Slide>
          <Heading caps>Most importantly!</Heading>
          <Text fit>{"Don't sell yourself short"}</Text>
          <Notes>
            This same mentality comes back to haunt us when it comes time to do reviews or to
            talk about our work with other developers. It is like the joke about the person who
            repairs the rollers at the New York Times -- $1 to hit it with a wrench, $1999 to
            know where to hit it with a wrench.
          </Notes>
        </Slide>
        <Slide>
          <FlexBox alignItems="center" justifyContent="center" flexDirection="column" height="100%">
            <Quote>Be excellent to each other. And... PARTY ON, DUDES!</Quote>
            <Text>- Abraham Lincoln</Text>
          </FlexBox>
        </Slide>
      </Deck>
    );
  }
}
