# TravelTrucks

## Overview

TravelTrucks is the front-end part of a web application designed for the rental
of campers. Built using ReactJS on Vite, it provides customers with an
intuitive interface to explore available campers, manage their favorites, and
make bookings seamlessly.

## Functionalities:

- **Navigation**: Users can click "View Now" on the home page to access the
  catalog.
- **Filtering**: Users can filter campers by:
  - Location (text input for a city search in Ukraine)
  - Amenities (multiple selections like vehicle equipment - checkbox, vehicle
    type - radio button)
  - 'Reset Filters' button: clears all current filters on page (extra feature)
- **Favorites**: Users can add campers to a favorites list, which persists
  across page refreshes.
- **Display Prices**: Rental prices are displayed in a user-friendly format
  (e.g., €9,000.00).
- **Detail Page Navigation**: Users can click "Show more" on camper cards to
  view details.
- **Load More**: A button to fetch additional camper cards based on selected
  filters.
- **User Reviews**: Reviews displayed on the camper detail page with a 5-star
  rating system.
- **Booking Form**: Users can fill out a form with a built-in calendar to book a
  camper, with a notification upon successful submission.

## Features

- **Multiple Pages**: The application consists of several key pages:

  - **Home Page**: Features a banner with a primary call to action.
    ![home](https://drive.google.com/uc?id=1B-7d0i0eGazATI6Obp04pKbspLlQEuo9)
    

  - **Catalog Page**: Displays all available campers with filtering options.
  ![catalog](https://drive.google.com/uc?id=1Mvawz7XLUhDZXecLlUm4IxeyerAA9gWP)

- **Favorites Page**: (extra feature) Allows users to save campers for future review.
  ![favorites](https://drive.google.com/uc?id=1ZdIU6iyE9PPFTuRlG7XAldQM6wft8Hi1)

- **Individual Camper Page**: Includes details, a photo gallery, user reviews, and a booking form.
  ![details](https://drive.google.com/uc?id=1ZdIU6iyE9PPFTuRlG7XAldQM6wft8Hi1)
  ![features](https://drive.google.com/uc?id=1wZgl1csYVjkSYH3dhe6Dtya3TxyA_96o)
  ![reviews](https://drive.google.com/uc?id=1sxKs9jzeJxCNPqbUU5VBgTGyyZMHU_4Q)

## API Integration

The application uses a pre-built backend-api available at MockAPI to manage
camper listings.

### Main Endpoints

- **GET /campers**: Retrieves all camper listings (includes filtering
  parameters).
- **GET /campers/:id**: Retrieves details for a specific camper by ID.

## Technical Stack

1. **Frameworks and Libraries**:

   - **Vite**: Used as a fast development bundler.
   - **React**: For building the user interface.
   - **Redux**: Manages the app state.
   - **React Router**: Handles routing between pages.
   - **Axios**: For making API requests.
   - **CSS Modules**: For styling components.

2. **Routing**:

   - `/` - Home Page.
   - `/catalog` - Catalog Page.
   - `/catalog/:id` - Individual Camper Page.
   - `/favorites` - Favorites Page (extra feature).
   - `/404` - NotFound.

3. **State Management**:

   - Global state management using Redux to store the list of campers, filter
     states, and favorites.
   - Reset previous search results before making new API requests to ensure data
     accuracy.

4. **Dependencies**: The project utilizes several key libraries to enhance
   functionality:
   - `react-datepicker`: For selecting dates in the booking form.
   - `react-hot-toast`: For displaying notifications upon successful actions 
     like bookings, filters, favorites applied.
   - `react-loader-spinner`: For loading indicators during asynchronous
     operations.

## Design:

- The layout is primarily optimized for desktop.
- The application adheres to the provided design.

## UI Kit:

The design of the TravelTrucks application is guided by a UI Kit that includes:

- **Colors**: A defined color palette for consistent styling.
- **Button Styles**: Standardized button designs for actions like "Search", "Reset Filters" and
  "Load More."
- **Form Elements**: Input fields for user data, including a calendar for date
  selection and a dropdown for location.
- **Icons**: Common icons to represent features like -air conditioning, -bathroom,
  -kitchen, and more.

  
  ![ui-kit](https://drive.google.com/uc?id=1sTK3as_cnqiaCIzxcLcJKWLwp9OxLXg6)

## Links:

- **Design mockup**:
  [Figma Mockup](https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&t=wWUj9PeSd7v1KZ5q-1).
- **MockAPI**:
  [MockAPI Link](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers).
- **Source Code**: [GitHub Repository](https://github.com/dm-zhuk/test-task-reactjs).
- **Live Demo**: [netlify.com](.netlify.app).

### Project Structure Overview

```
└── travel-trucks
    ├── public/
    ├── src
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── index.css
    │   ├── api
    │   │   └── apiService.js
    │   ├── common
    │   │   └── components
    │   │       ├── Booking
    │   │       │   ├── Booking.jsx
    │   │       │   └── index.module.css
    │   │       ├── Buttons
    │   │       │   ├── Button.jsx
    │   │       │   ├── Button.module.css
    │   │       │   ├── Checkbox.jsx
    │   │       │   └── RadioButton.jsx
    │   │       ├── CardBadge
    │   │       │   ├── CardBadge.jsx
    │   │       │   └── index.module.css
    │   │       ├── CardContent
    │   │       │   ├── CardContent.jsx
    │   │       │   ├── CardFiltered.jsx
    │   │       │   └── index.module.css
    │   │       ├── CardDetails
    │   │       │   ├── FeaturesTab.jsx
    │   │       │   ├── Gallery.jsx
    │   │       │   ├── ReviewsTab.jsx
    │   │       │   ├── TabButton.jsx
    │   │       │   ├── helper.js
    │   │       │   └── index.module.css
    │   │       ├── CardFilter
    │   │       │   ├── CardFilter.jsx
    │   │       │   └── index.module.css
    │   │       ├── CardList
    │   │       │   ├── CardList.jsx
    │   │       │   └── index.module.css
    │   │       ├── UI
    │   │       │   ├── EmptyList
    │   │       │   │   ├── EmptyList.jsx
    │   │       │   │   └── index.module.css
    │   │       │   ├── Input
    │   │       │   │   ├── Input.jsx
    │   │       │   │   └── index.module.css
    │   │       │   ├── Loader
    │   │       │   │   ├── Loader.jsx
    │   │       │   │   └── index.module.css
    │   │       │   ├── ScrollToTop
    │   │       │   │   ├── ScrollToTop.jsx
    │   │       │   │   └── index.module.css
    │   │       │   └── Textarea
    │   │       │       ├── Textarea.jsx
    │   │       │       └── index.module.css
    │   │       ├── icons/
    │   │       ├── img/
    │   │       └── layouts
    │   │           └── SharedLayout
    │   │               ├── SharedLayout.jsx
    │   │               └── SharedLayout.module.css
    │   ├── hooks
    │   │   └── useCamperDetails.jsx
    │   ├── pages
    │   │   ├── CatalogPage
    │   │   │   └── CatalogPage.jsx
    │   │   ├── DetailsPage
    │   │   │   ├── DetailsPage.jsx
    │   │   │   └── index.module.css
    │   │   ├── FavoritesPage
    │   │   │   └── FavoritesPage.jsx
    │   │   ├── HomePage
    │   │   │   ├── HomePage.jsx
    │   │   │   └── index.module.css
    │   │   └── NotFoundPage
    │   │       ├── NotFound.jsx
    │   │       └── index.module.css
    │   ├── store
    │   │   ├── dataSlice.jsx
    │   │   ├── favoritesSlice.jsx
    │   │   ├── reducer.jsx
    │   │   ├── selectors.jsx
    │   │   └── store.jsx
    │   └── utils
    │       ├── Fallback.jsx
    │       ├── FavoriteIcon.jsx
    │       ├── FormatLabel.jsx
    │       ├── StarRating.jsx
    │       ├── context.jsx
    │       ├── error.jsx
    │       ├── filterData.jsx
    │       ├── filterIcons.jsx
    │       ├── filterParams.jsx
    │       ├── pagination.jsx
    │       ├── placeholder.jsx
    │       ├── scroller.jsx
    │       └── validator.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```
