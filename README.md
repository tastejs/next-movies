
# next-movies

This is a Movies App built using Next.js, React and [The Movie Database (TMDB)](https://www.themoviedb.org/) API. 

## Demo

A [live deployment](https://movies.zaps.dev) of this app is available to try it out.

## Contributing

Contributions are always welcome! 

For large changes, please file an issue to discuss your proposed changes with us before working on a PR :)

## Installation 

Clone and install the dependencies for `next-movies` locally:

```bash 
  git clone https://github.com/tastejs/next-movies.git
  cd next-movies 
  npm install
```

## Quick setup

1. Take a copy of .env.local.example and re-name to .env.local
2. Get your TMDb API key
3. Get your TMDB API read access token
4. Enter the details into the .env.local file
    
## Running locally

* `npm run dev`: dev build
* `npm run build`: production build
* `npm run static-build`: production static build
* `npm run start`: start the project
* `npm run vercel-deploy`: deploy to vercel
* `npm run netlify-deploy`: deploy to netlify 
* `npm run analyze`: bundle analysis 
* (`analyze:server` and `analyze:browser` are available too)

## Tech Stack

Built with:

* Next.js
* Redux and Redux Thunk
* react-glider
* react-lazyload
* react-modal-video
* react-scroll
* react-select-search
* redaxios
* use-dark-mode
* @artsy/fresnel
* @loadable/component

## next/image

In most cases, we strongly recommend using the [next/image](https://nextjs.org/docs/api-reference/next/image) component for optimizing how you load images. For the next-movies app, there are a few app-specific reasons we currently don't use the component. Using `react-lazyload`, we lazy-load the entire `MovieListItem` component (for example), where elements like the movie name and star ratings don't load until they get near the viewport. This behavior is currently not possible with next/image. In the future, there may be more "Suspense"-y ways of approaching images in React/Next, which would make this type of pattern more first-class. Until then, check out our approach, but you'll likely be otherwise be able to make next/image work for you.
  
  
## Authors

- [@anton-karlovskiy](https://github.com/anton-karlovskiy)
- [@addyosmani](https://github.com/addyosmani)

Based on the original `create-react-app` foundation by [@fidalgodev](https://github.com/fidalgodev/movie-library-react).

## License

[MIT](https://choosealicense.com/licenses/mit/)