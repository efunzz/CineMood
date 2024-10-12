# Cinemood

**Cinemood** is a frontend website where users can discover movies based on their mood. This project integrates movie data from the **OMDb API** and trailer videos from the **TMDb API**. It was built as a personal project to practice API integration and state management in React.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Installation](#installation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Features

- **Mood-based movie selection**: Users can pick movies based on their mood.
- **OMDb API integration**: Fetch movie details such as title, plot, and poster using the OMDb API.
- **TMDb API integration**: Fetch movie trailers from TMDb and display them.
- **Responsive design**: Vanilla CSS was used to style the website.

## Technologies Used

- **React** (v18.3.1) - JavaScript library for building user interfaces
- **React Router DOM** (v6.26.2) - Library for routing between different pages
- **Vanilla CSS** - Custom styling without the use of Tailwind CSS
- **React Fast Marquee** (v1.6.5) - For scrolling marquee effects
- **Clsx** (v2.1.1) - Utility for conditionally joining class names
- **@tabler/icons-react** (v3.17.0) - Icon library for adding simple icons

> Note: Tailwind CSS and Framer Motion were included in the project’s dependencies, but were not used in the final implementation.

## API Integration

Two APIs are used in this project:

1. **OMDb API**: Fetches movie details such as title, plot, and IMDb ID.
2. **TMDb API**: Fetches movie trailers by utilizing the IMDb ID obtained from the OMDb API.

## Movie Selection

The movies used in this project were selected based on personal opinion and are intended as placeholders to demonstrate the website's functionality.

## Usage

1. Select a mood, and the app will fetch movies that match the mood from the OMDb API.
2. Movie details such as the title, plot, and poster will be displayed.
3. A YouTube trailer link will be provided for movies that have a trailer available.

## Future Improvements

- **Animations**: Implement Framer Motion for smoother transitions and interactive elements.
- **Tailwind CSS**: Apply Tailwind CSS for faster, more flexible styling in future versions.
- **Enhanced movie search**: Add more advanced filtering options, such as genre or release year filters.

## Acknowledgements

- **OMDb API** and **TMDb API**: For providing movie data and trailers.
- Special thanks to the developers behind:
  - **React Fast Marquee**: For smooth scrolling marquee effects.
  - **Tabler Icons**: For simple and customizable icons.

## License

This project is licensed under the Creative Commons Attribution 4.0 International License.  
You are free to share and adapt the material, provided you give appropriate credit.

See the [LICENSE](./LICENSE) file for more details.
