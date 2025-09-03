# Cinema +

Cinema + is a Front-End Web App based on React with TypeScript.

## Features

### Home page

The home page shows a list of top-rated movies, browsed by pagination, enhanced also for mobile screen. When a Movie Card is clicked, the single movie information is displayed. The single movie has its genres it belongs. When a genre is clicked a list of movies of that genre is displayed. While being in the single movie page, a simulation process of booking that movie can be realized.

### Movies by genre

The Movies by genre page displays a list of disponible genres. If a Genre Card is clicked, a list of movies that belong to that genre is displayed. The list of genre movies is not a match of all the top-rated movies, as it is not available to be fetched. The list of genre movies is just for demonstration purposes and to match the genres at the single movie information. The Genre Drama has pagination, because there are too many movies in the list.

### My favorites

If the empty heart in a Movie Card is clicked, the movie is added to the list of My favorite's movies (My favorite page). If the filled heart is clicked, the movie is not favorite anymore and it is removed from the list of My favorite's movies (My favorite page).

### Search bar

In the search bar, it is possible to search for a movie or a genre simultaneously. The search movie results can be browsed by pagination on the mobile screen.

### Theme mode

In the app, it is possible to switch between Light Mode and Dark Mode.

### Responsive Web Design

The app has the Responsive Web Design feature.

## Acknowledgments

The app based on React with TypeScript is powered by Vite. The movies information together with the list of genres was possible to be displayed by the Movie DB API.
Axios helped to get the movies and genres data from the Movie DB, while React Router made possible Routing.
Ant Design added some relevant functionality to the app such as Pagination (the movies fetched at home page), SearchBar, Add/Remove favorite movie etc.
React Hook Form together with Ant Design made possible the simulation of reserving a movie.
