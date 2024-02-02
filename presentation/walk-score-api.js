import React from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import "normalize.css";

const images = {
    moreLess: require("../assets/more-less.gif"),
};

const Presentation = () => (
    <Deck>
        <Slide>
            <Heading>Walk Score public APIs</Heading>
            <Image src={images.moreLess}></Image>
            <Text>
                Created by <a href="http://github.com/doug-wade">Doug Wade</a> / <a href="https://mastodon.xyz/@dougwade">@dougwade</a>
            </Text>
        </Slide>

        <Slide>
          <Heading>Agenda</Heading>
          <UnorderedList>
            <ListItem>Available endpoints</ListItem>
            <ListItem>Code sample: Making a request</ListItem>
            <ListItem>Code sample: Google Geocoding</ListItem>
            <ListItem>Drawing polygons with Google Maps</ListItem>
            <ListItem>Wrap-up & Questions</ListItem>
          </UnorderedList>
          <Heading fontSize="h3">Stop me at any time with questions</Heading>
        </Slide>

        <Slide>
          <Heading>Available Endpoints</Heading>
          <Box style={{textAlign: "left", fontSize: "20px"}}>
            <Box>
              <Box><a href="https://www.walkscore.com/professional/api.php">api.walkscore.com</a></Box>
              <table align="left">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>score</td>
                    <td>/</td>
                    <td>Returns the Walk Score for a given location.</td>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Box>
              <Box style={{clear: "left"}}>
                <a href="https://www.walkscore.com/professional/public-transit-api.php">transit.walkscore.com</a>
              </Box>
              <table align="left">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>score</td>
                    <td>/transit/score/</td>
                    <td>Returns the Transit Score for a given location.</td>
                  </tr>
                  <tr>
                    <td>stop search</td>
                    <td>/transit/search/stops/</td>
                    <td>Returns information about stops near a given location.</td>
                  </tr>
                  <tr>
                    <td>network search</td>
                    <td>/transit/search/network/</td>
                    <td>Returns connected stops and routes near a given location.</td>
                  </tr>
                  <tr>
                    <td>stop detail</td>
                    <td>/transit/stop/ID/</td>
                    <td>Returns details for a single stop.</td>
                  </tr>
                  <tr>
                    <td>route detail</td>
                    <td>/transit/route/ID/</td>
                    <td>Returns details for a single route.</td>
                  </tr>
                  <tr>
                    <td>supported cities</td>
                    <td>/transit/supported/cities/</td>
                    <td>Returns a list of cities for which scores are available.</td>
                  </tr>
                </tbody>
              </table>
            </Box>

            <Box>
              <Box><a href="https://www.walkscore.com/professional/travel-time-http-api.php">api2.walkscore.com</a></Box>
              <table align="left">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>traveltime</td>
                    <td>/api/v1/traveltime/json</td>
                    <td>Returns the travel time for a given location.</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>
        </Slide>

        <Slide>
            <Heading>Getting the walk score</Heading>
            <CodePane language="javascript">{`
function getWalkScore(address, location) {
  let deferred = Q.defer();
  let url = 'http://api.walkscore.com/score?format=json&address='
    + address + '&lat=' + location.lat + '&lon=' + location.lng
    + '&wsapikey=' + globalKeys.walkScoreApiKey;

  http.get(url, deferred.resolve);

  return deferred.promise;
}

router.get('/api/walk/:address', function *(next) {
  let address = this.params.address;
  let location = ???
  let walkScore = yield getWalkScore(address, location);

  this.body = walkScore;
});`}
            </CodePane>
        </Slide>

        <Slide>
            <Text>I have an address, say:</Text>
            <Box>  2025 1st Ave, Suite 500</Box>
            <Box>  Seattle, WA</Box>
            <Box>  98121</Box>
            <Text>How do I get its latitude and longitude?</Text>
        </Slide>

        <Slide>
            <Heading>Google Geocoding</Heading>
            <CodePane language="javascript">{`
function getLocationFromGoogle(address) {
  let deferred = Q.defer();
  let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
    + address + '&key=' + globalKeys.googleApiKey;

  https.get(url, getJsonBody(function(payload) {
    let location = payload.results[0].geometry.location;
    deferred.resolve(location);
  }));

  return deferred.promise;
}
// Example usage:
router.get('/api/walk/:address', function *(next) {
  let address = this.params.address;
  let location = yield getLocationFromGoogle(address);
  let walkScore = yield getWalkScore(location);

  this.body = walkScore;
});`}
            </CodePane>
        </Slide>

        <Slide>
            <CodePane language="javascript">{`
function getJsonBody(callback) {
  return function(response) {
    let body = '';

    response.on('data', function(data) {
      body += data;
    });

    response.on('end', function() {
      let payload = JSON.parse(body);
      callback(payload);
    });
  }
}`}
            </CodePane>
        </Slide>

        <Slide>
            <Heading>Demo</Heading>
        </Slide>

        <Slide>
            <CodePane language="shell">{`
» curl localhost:3000/api/walk/2025%201st%20Avenue%20Suite%20500,%20Seattle,%20WA%2098121
{
    "status": 1, 
    "walkscore": 96, 
    "description": "Walker's Paradise", 
    "updated": "2015-06-01 19:14:17.776200", 
    "logo_url": "https://cdn.walk.sc/images/api-logo.png", 
    "more_info_icon": "https://cdn.walk.sc/images/api-more-info.gif", 
    "more_info_link": "https://www.redfin.com/how-walk-score-works", 
    "ws_link": "https://www.walkscore.com/score/2025-1st-Avenue-Suite-500-Seattle-WA-98121/lat=47.6114682/lng=-122.3438233/?utm_source=redfin.com&utm_medium=ws_api&utm_campaign=ws_api", 
    "help_link": "https://www.redfin.com/how-walk-score-works", 
    "snapped_lat": 47.6115, 
    "snapped_lon": -122.3445
}`}
            </CodePane>
        </Slide>

        <Slide>
            <Heading>Using the Transit apis</Heading>
            <CodePane language="javascript">{`
// Example usage:
// curl localhost:3000/api/stop/fb1522a4c2ba626561...
let http = require('http');

function getStop(id) {
  let deferred = Q.defer();
  let url = 'http://transit.walkscore.com/transit/stop/' + id +
    '?format=json&wsapikey=' + walkScoreApiKey;

  http.get(url, deferred.resolve);

  return deferred.promise;
}

router.get('/api/stop/:id', function *() {
  let id = this.params.id;
  let stop = yield getStop(id);

  this.body = stop;
});`}
            </CodePane>
        </Slide>

        <Slide>
            <Heading>Demo</Heading>
        </Slide>

        <Slide>
            <CodePane language="javascript">{`
» curl localhost:3000/api/stops/\
> 2025%201st%20Avenue%20Suite%20500,%20Seattle,%20WA%2098121
[{
    "distance": 0.0437115618187228
  , "name": "1ST AVE & LENORA ST"
  , "summary_text": "1ST AVE & LENORA ST (0.0 mi)\t99, 121"
  , "summary_html": "<span class="walkscore"><span class="stop">1ST AVE &amp; LENORA ST</span> <span class="distance">(0.0 mi)</span> <span class="Bus">99, 121</span></span>"
  , "route_summary": [
      {
        "category": "Bus"
      , "agency_url": "http://metro.kingcounty.gov"
      , "agency": "Metro Transit"
      , "id": "6fffc9e7af7a9a444b12fd2ae2685281ab42bc1e"
      , "name": "99"
    } ...
  ]
  , "lon": -122.3442
  , "lat": 47.6120987
  , "id": "fb1522a4c2ba6265619b2e7054a9f4c74ea11479"
}, ...`}
            </CodePane>
        </Slide>

        <Slide>
            <CodePane language="shell">{`
» curl localhost:3000/api/stop/fb1522a4c2ba6265619b2e7054a9f4c74ea11479
{
  "lat": 47.612098699999997,
  "route_ids": [
      "6fffc9e7af7a9a444b12fd2ae2685281ab42bc1e",
      "4044a2ef14d364ccd302c29cbe1357fda79190f7"
  ],
  "lon": -122.3442,
  "id": "fb1522a4c2ba6265619b2e7054a9f4c74ea11479",
  "name": "1ST AVE & LENORA ST"
}`}
            </CodePane>
        </Slide>

        <Slide>
            <CodePane language="shell">{`
» curl localhost:3000/api/route/6fffc9e7af7a9a444b12fd2ae2685281ab42bc1e
{
  "category": "Bus",
  "agency": "Metro Transit",
  "name": "99",
  "geometry_wkt": "LINESTRING(-122.322449 47.598351,-122.323097 47.598351,-122.323761 47.598351,-122.323753 47.599190,-122.324394 47.599194,-122.325058 47.599194,-122.326363 47.599194,-122.327011 47.599194,-122.327667 47.599201,-122.327927 47.599194,-122.328064 47.599201,-122.328995 47.599201,-122.329102 47.599201,-122.329216 47.599201,-122.329681 47.599201,-122.330223 47.599205,-122.330276 47.599201,-122.331581 47.599205,-122.332886 47.599205,-122.333023 47.599205,-122.334183 47.599205,-122.334183 47.599270,-122.334183 47.599339,-122.334183 47.600044,-122.334183 47.600079,-122.334183 47.600887,-122.334183 47.601513,-122.334183 47.601726,-122.334175 47.602440,-122.334282 47.602558,-122.334351 47.602627,-122.334801 47.603119,-122.334885 47.603203,-122.334938 47.603275,-122.335228 47.603577,-122.335281 47.603638,-122.335594 47.603981,-122.336235 47.604691,-122.336891 47.605404,-122.337479 47.606049,-122.337547 47.606117,-122.338203 47.606834,-122.339104 47.607826,-122.340019 47.608822,-122.340088 47.608898,-122.340919 47.609817,-122.340973 47.609867,-122.341347 47.610272,-122.341423 47.610371,-122.342613 47.611072,-122.343910 47.611839,-122.345207 47.612606,-122.346519 47.613373,-122.347710 47.614078,-122.347809 47.614136,-122.347832 47.614155,-122.348747 47.614697,-122.349693 47.615246,-122.350616 47.615799,-122.351547 47.616352,-122.352509 47.616920,-122.352928 47.616589,-122.353363 47.616253,-122.354225 47.615585,-122.354790 47.615158,-122.354843 47.615101,-122.354866 47.615055,-122.354881 47.615013,-122.354858 47.614952,-122.354797 47.614883,-122.354019 47.614429)",
  "agency_url": "http://metro.kingcounty.gov",
  "stop_ids": [
      "4acb42872963cfc997727e58fba6bdf43d2fbf2d",
      ...
      "82ce6a3d3c303dd8368b3e5de9d5791636e3b01b"
  ],
  "id": "6fffc9e7af7a9a444b12fd2ae2685281ab42bc1e"
}`}
            </CodePane>
        </Slide>

        <Slide>
            <Heading>Using the polygon data</Heading>
            <CodePane language="javascript">{`
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 47.61, lng: -122.34 },
    zoom: 14
  });

  getRoute().then(function(payload) {
    var routeCoords = linestringToCoordinates(payload.geometry_wkt);
    var route = new google.maps.Polyline({
        path: routeCoords,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2
      });
    route.setMap(map);
  });
}`}
            </CodePane>
        </Slide>

        <Slide>
            <CodePane language="javascript">{`
function getRoute() {
  var url = "/api/route/6fffc9e7af7a9a444b12fd2ae2685281ab42bc1e";
  var deferred = Q.defer();
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    deferred.resolve(JSON.parse(this.responseText));
  });
  xhr.open("get", url, true);
  xhr.send();

  return deferred.promise;
}`}
            </CodePane>
        </Slide>

        <Slide>
            <CodePane language="javascript">{`
function linestringToCoordinates(linestring) {
  return linestring
    .replace(/LINESTRING(/i, '')
    .replace(/)/i, '')
    .split(',')
    .map(function(coord) {
      var parts = coord.split(' ');
      return { lat: parseFloat(parts[1]), lng: parseFloat(parts[0]) };
    });
}`}
            </CodePane>
        </Slide>

        <Slide>
            <Image src={images.route} />
        </Slide>

        <Slide>
            <Heading>Travel Time API</Heading>
            <CodePane language="javascript">{`
// Example usage:
// curl localhost:3001/api/travel/2025%201st%20Avenue%20Suite%20500,%20Seattle,%20WA%2098121
function getTravelTimePolygon(origin) {
  let deferred = Q.defer();
  let url = 'http://api2.walkscore.com/api/v1/traveltime_polygon/json?wsapikey=' + globalKeys.walkScoreApiKey
    + '&origin=' + origin.lat + '%2C' + origin.lng + '&mode=bike&time=20';

  http.get(url, deferred.resolve);

  return deferred.promise;
}
router.get('/api/travel/:address', function *(next) {
  let address = this.params.address;
  let origin = yield getLocationFromGoogle(address);
  let polygon = yield getTravelTimePolygon(origin);

  this.body = polygon;
  this.set({ "Content-Type": "application/json" });
})`}
            </CodePane>
        </Slide>

        <Slide>
            <Heading>Demo</Heading>
        </Slide>

        <Slide>
            <CodePane language="shell">{`
» curl localhost:3000/api/travel/\
  2025%201st%20Avenue%20Suite%20500,%20Seattle,%20WA%2098121
{
    "status": "OK"
  , "response": {
      "origin": "47.6114682,-122.3438233"
    , "geometry": {
        "type": "MultiPolygon"
      , "coordinates": [[[
          [
            -122.35287965477173
          , 47.65320077612875
          ]
           ...
        ]]]
    }
    , "mode": "bike"
    , "precision": 3
    , "time": 20
  }
}`}
            </CodePane>
        </Slide>

        <Slide>
            <Heading>Travel time polygon</Heading>
            <CodePane language="javascript">{`
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 47.61, lng: -122.34 },
    zoom: 13
  });

  getTravelTimePolygon().then(function(payload) {
    var polyCoords = convertCoordinates(payload.response.geometry.coordinates);
    var polygon = new google.maps.Polyline({
        path: polyCoords,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2
      });
    polygon.setMap(map);
  });
}`}
            </CodePane>
        </Slide>

        <Slide>
            <CodePane language="javascript">{`
function getTravelTimePolygon() {
  var url = "/api/travel/2025%201st%20Avenue%20Suite%20500,%20Seattle,%20WA%2098121";
  var deferred = Q.defer();
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    deferred.resolve(JSON.parse(this.responseText));
  });
  xhr.open("get", url, true);
  xhr.send();

  return deferred.promise;
}`}
            </CodePane>
        </Slide>

        <Slide>
            <CodePane language="javascript">{`
function convertCoordinates(walkscoreCoords) {
  var coords = walkscoreCoords[0][0];
  return coords
    .map(function(coord) {
      console.log(coord);
      return { lat: parseFloat(coord[1]), lng: parseFloat(coord[0]) };
    });
}`}
            </CodePane>
        </Slide>

        <Slide>
            <Image src={images.polygon} />
        </Slide>

        <Slide>
            <Heading>Getting Started</Heading>
            <OrderedList>
                <ListItem><a href="https://www.walkscore.com/professional/api-sign-up.php">Get a Walk Score API key</a></ListItem>
                <ListItem><a href="https://console.developers.google.com/">Get a Google Maps key</a></ListItem>
                <ListItem>Check the docs:
                    <UnorderedList>
                        <ListItem><a href="https://www.walkscore.com/professional/api.php">Walk</a></ListItem>
                        <ListItem><a href="https://www.walkscore.com/professional/public-transit-api.php">Transit</a></ListItem>
                        <ListItem><a href="https://www.walkscore.com/professional/travel-time-http-api.php">Travel Time</a></ListItem>
                        <ListItem><a href="https://developers.google.com/maps/documentation/javascript/3.exp/reference">Maps</a></ListItem>
                        <ListItem><a href="https://developers.google.com/maps/documentation/geocoding/intro">Geocoding</a></ListItem>
                    </UnorderedList>
                </ListItem>
            </OrderedList>
        </Slide>

        <Slide>
            <Heading>Questions?</Heading>
            <Text>
                Get the code:
                <CodePane language="shell">
    git clone https://github.com/doug-wade/WalkScoreApi.git
                </CodePane>
            </Text>
            <Text>
                Get the slides:
                <CodePane language="shell">{`
    git clone https://github.com/doug-wade/slides`}
                </CodePane>
            </Text>
        </Slide>
    </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
