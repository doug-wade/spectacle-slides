import React from "react";
import { createRoot } from "react-dom/client";
import {
  Deck,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import "normalize.css";
import theme from '../themes/default';

import biologicalClassification from "../assets/Biological_classification.png";
import carlVonLinne from "../assets/Carl_von_Linné.jpg";
import craniata from "../assets/craniata.png";
import fishEtymology from "../assets/fish-etymology.png";
import lamprey from "../assets/Pacific_lamprey_pair_MadisonCreek_AmandaAnderson_1024.jpg";
import lungfish from "../assets/lungfish.jpg";
import williHennig from "../assets/Willi_Hennig2.jpg";

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading>You might be a pescatarian</Heading>
      <Heading>OR</Heading>
      <Heading>What ARE fish?</Heading>
    </Slide>
    <Slide>
      <Heading>Le mot juste</Heading>
      <FlexBox alignItems="center">
        <Text>(the exact word)</Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Etymology</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={fishEtymology} width="30%"></Image>
      </FlexBox>
      <Text>
        Old English fisc: denoting any animal living exclusively in water
      </Text>
    </Slide>
    <Slide>
      <Heading>Carl Linneaus</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={carlVonLinne} width="30%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Rank-based Codes</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={biologicalClassification} width="15%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Text>
        <Heading>Linnaean Characteristics</Heading>
        <UnorderedList>
          <ListItem>
            Heart: 1 auricle, 1 ventricle. Cold, dark red blood
          </ListItem>
          <ListItem>Gills: external</ListItem>
          <ListItem>Jaw: incumbent</ListItem>
          <ListItem>Eggs: without whites </ListItem>
          <ListItem>
            Organs of Sense: tongue, nostrils?, eyes, ears
          </ListItem>
          <ListItem>Covering: imbricate scales </ListItem>
          <ListItem>Supports: fins. Swims in the Water & Smacks.</ListItem>
        </UnorderedList>
      </Text>
    </Slide>
    <Slide>
      <Heading>Lamprey have no scales!</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={lamprey} width="30%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Lungfish don&apos;t live in the water!</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={lungfish} width="30%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Cladistics</Heading>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={williHennig} width="30%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Text>
        Any clade containing all fish also contains the tetrapods, which are
        not fish
      </Text>
      <FlexBox alignItems="center" justifyContent="center">
        <Image src={craniata} width="35%"></Image>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>From UC Berkeley</Heading>
      <Text fontSize={28}>
        All fishes have a brain protected by a braincase and an obvious head
        region with eyes, teeth, and other sensory organs
      </Text>
      <Text fontSize={28}>
        Most fishes
        <UnorderedList fontSize={28}>
          <ListItem>
            are vertebrates with vertebrae protecting the spinal cord
          </ListItem>
          <ListItem>live in water</ListItem>
          <ListItem>
            breathe primarily with gills rather than lungs
          </ListItem>
          <ListItem>
            have paired limbs, in the form of fins that aid in locomotion
          </ListItem>
          <ListItem>
            are unable to regulate their own internal body temperatures
          </ListItem>
          <ListItem>
            are covered with scales that protect their bodies
          </ListItem>
        </UnorderedList>
      </Text>
    </Slide>
    <Slide>
      <Heading>
        All human classification systems are based on vibes and that&apos;s okay
      </Heading>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
