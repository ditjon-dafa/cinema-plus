# :movie_camera: Cinema +

Cinema + is a Front-End Web App based on React with TypeScript.\
The project facilitate customers by reviewing, bookmarking and booking a movie.

## :dart: Features

- Top rated movies: Fetching data using REST API.
- Single movie: After the user fetches the list of top rated movies, if clicking on a movie, the detailed information of the movie is displayed, matched by the movie `params`.
- React Hooks:
  1. The use of React Hooks is seen when the user fetches the list of top rated movies from the Movie DB, and browse pages, made possible with the help of `useEffect`.
  2. When the user save or unsave a movie, the user is managing the state of movie.
  3. When the user try to book a movie, the form is validated according to React Hook Form.
  4. User can `query` simultaneously a genre or a movie, thanks to the use of `useContext` hook.
- Mobile-first design principle:
  1. For the small screen, when a user fetches the list of top-rated movies, the list is displayed in two parts for code optimization and a nice user experience.
  2. With `CSS grid` ,`flex`, and `media screen` the user can view the appropriate layout according to the screen width.

## :rocket: Getting started

### Tech Stack

- Node.js: Minimum required is version 18, but recommended at least version 22
- React: JavaScript library for building user interfaces
- TypeScript: Safe Data Type Check
- Axios: Fetch data from the Movie DB
- React Hook Form: Booking Form validation
- CSS: Custom styling

### Installation

To run the project locally follow these steps:

1. Clone the repository:

`git clone https://github.com/ditjon-dafa/cinema-plus.git`

2. Navigate into the project directory:

`cd cinema-plus`

3. Install the neccessary dependencies:

`npm install`

4. Run the project

`npm run dev `

You can also view a sample demo [here](https://drive.google.com/file/d/1DweU8fpkan_hGzhhJQMN-7Z7vizk7lTM/view?usp=embed_facebook).

## :sparkles: Cinema app facilities for potential movie watchers

- Movie information display on the behalf of a cinema means informing a potential
  cinema watcher about a movie. It influence in making a faithful decision of
  watching a movie offered by that cinema, before being there.
- The potential movie watcher has the possibility to save a (some) movie(s) for later
  review, if the watcher does not have much time at the moment.
- Movie booking is helpful for a movie watcher, being on time to find fast one (some)
  seat(s) at the cinema to watch a certain movie.

## :handshake: Acknowledgments

The app based on React with TypeScript is powered by Vite. The movies information together with the list of genres was possible to be displayed by the Movie DB API.
Axios helped to get the movies and genres data from the Movie DB, while React Router made possible Routing.
Ant Design added some relevant functionality to the app such as Pagination (the movies fetched at home page), SearchBar, Add/Remove favorite movie etc.
React Hook Form together with Ant Design made possible the simulation of reserving a movie.
