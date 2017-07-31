# Doug Wade's Slides

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.markdown](https://github.com/FormidableLabs/spectacle/blob/master/README.markdown).

## Development

After downloading the repo, your first order of business is to open terminal and run `npm install` (or `yarn` if you're about that life)

Next, to display the presentation you're interested in, update index.js to import the presentation from `/presentation` you're interested in.  For example, to view `modern-client-side-stack`, change the current import to

```js
import Presentation from "./presentation/modern-client-side-stack";
```

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`
