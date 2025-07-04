# Cinema +

Cinema + is a Front-End Web App based on React with TypeScript.

## Features

### Home page

The home page shows a list of top-rated movies, browsed by pagination. When a Movie Card is clicked, the single movie information is displayed. The single movie has its genres it belongs. When a genre is clicked a list of movies of that genre is displayed.

### Movies by genre

The Movies by genre page displays a list of disponible genres. If a Genre Card is clicked, a list of movies that belong to that genre is displayed. The list of genre movies is not a match of all the top-rated movies, as it is not available to be fetched. The list of genre movies is just for demonstration purposes and to match the genres at the single movie information.

### My favorites

If the empty heart in a Movie Card is clicked, the movie is added to the list of My favorite's movies (My favorite page). If the filled heart is clicked, the movie is not favorite anymore and it is removed from the list of My favorite's movies (My favorite page).

### Search bar

In the search bar, it is possible to search for a movie or a genre simultaneously.

### Theme mode

In the app, it is possible to switch between Light Mode and Dark Mode.

### Responsive Web Design

The app has the Responsive Web Design feature.

## Acknowledgments

The app based on React with TypeScript is powered by Vite. The movie information was possible to be displayed by the Movie DB API.
Axios helped to get the movies data from the Movie DB, while react-router-dom made possible Routing.
Ant Design added some relevant functionality to the app such as Pagination, SearchBar, Add/Remove favorite movie etc.
