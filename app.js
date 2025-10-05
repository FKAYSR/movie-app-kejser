"use strict";

// ========== MOVIE OBJECTS ==========

// Movie 1: Barbie
const barbieMovie = {
  id: 1,
  title: "Barbie",
  year: 2023,
  genre: ["Adventure", "Comedy", "Fantasy"],
  rating: 7.0,
  director: "Greta Gerwig",
  image:
    "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
  actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
  description:
    "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world.",
};

console.log("Barbie movie object:", barbieMovie);

// Movie 2: Dune
const duneMovie = {
  id: 2,
  title: "Dune",
  year: 2021,
  genre: ["Adventure", "Drama", "Sci-Fi"],
  rating: 8.0,
  director: "Denis Villeneuve",
  image:
    "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
  description:
    "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice.",
};

console.log("Dune movie object:", duneMovie);

// Movie 3: Dune: Part Two
const duneTwoMovie = {
  id: 3,
  title: "Dune: Part Two",
  year: 2024,
  genre: ["Action", "Adventure", "Drama"],
  rating: 8.7,
  director: "Denis Villeneuve",
  image:
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
  actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
};

console.log("Dune: Part Two movie object:", duneTwoMovie);

// Movie 4: Everything Everywhere All at Once
const everythingEverywhere = {
  id: 4,
  title: "Everything Everywhere All at Once",
  year: 2022,
  genre: ["Action", "Sci-fi"],
  rating: 7.8,
  directors: "Daniel Kwan and Daniel Scheinert aka Daniels",
  image:
    "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  actors: ["Michelle Yeoh", "Ke Huy Quan", "Jamie Lee Kurtis", "Stephanie Hsu"],
  description:
    "A hilarious and big-hearted sci-fi action adventure about an exhausted Chinese American woman (Michelle Yeoh) who can't seem to finish her taxes.",
};

console.log("Everything Everywhere All at Once:", everythingEverywhere);

// Movie 5: Fight Club
const fightClubMovie = {
  id: 5,
  title: "Fight Club",
  year: 1999,
  genre: ["Action", "Mystery", "Thriller/drama"],
  rating: 8.8,
  director: "David Fincher",
  image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
  actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
  description:
    "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
};

console.log("Fight Club:", fightClubMovie);

// Movie 6: Forrest Gump:
const forrestGump = {
  id: 6,
  title: "Forrest Gump",
  year: 1994,
  genre: ["Drama", "Romance"],
  rating: 8.8,
  director: "Robert Zemeckis",
  image:
    "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
  actors: ["Tom Hanks", "Robin Wright"],
  description:
    "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",
};

console.log("Forrest Gump:", forrestGump);

// Movie 7: Good Fellas:
const goodFellas = {
  id: 7,
  title: "Good Fellas",
  year: 1990,
  genre: ["Biography", "Crime", "Drama"],
  rating: 8.7,
  director: "Martin Scorsese",
  image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
  actors: ["Ray Liotta", "Robert De Niro"],
  description:
    "Henry Hill, a poor Irish-Italian growing up in 1950s New York City, rises through the ranks of his neighborhood's organized crime branch; he ends up in the FBI's witness protection program after testifying against his former partners.",
};

console.log("Good Fellas:", goodFellas);

// Movie 8: Inception:
const inceptionMovie = {
  id: 8,
  title: "Inception",
  year: 2010,
  genre: ["Action", "Adventure", "Sci-fi"],
  rating: 8.8,
  director: "Christopher Nolan",
  image:
    "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
  actors: ["Leonardo DiCaprio", "Cillian Murphy"],
  description:
    "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.",
};

console.log("Inception:", inceptionMovie);

// Test hvordan du får adgang til movie data
console.log("=== TESTING MOVIE OBJECTS ===");

console.log("Barbie title:", barbieMovie.title);
console.log("Dune year:", duneMovie.year);
console.log("Fight Club rating:", fightClubMovie.rating);
console.log("Inception director:", inceptionMovie.director);

// Opret beskeder med movie data
console.log(
  `${barbieMovie.title} (${barbieMovie.year}) - Rating: ⭐ ${barbieMovie.rating}`
);
console.log(`${duneMovie.title} er instrueret af ${duneMovie.director}`);
console.log(
  `${fightClubMovie.title} er fra ${fightClubMovie.year} og har rating ${fightClubMovie.rating}`
);

// Du kan nu programmatisk arbejde med data:

// Ændre rating
barbieMovie.rating = 7.5;
console.log("Updated Barbie rating:", barbieMovie.rating);

// Tilføje ny property
barbieMovie.watched = true;
console.log("Barbie movie with watched status:", barbieMovie);

// Beregne movie alder, Date() is a built-in JavaScript object for working with dates and times.
// const now = new Date(); // Creates a new Date object with the current date and time.
// You can .getFullYear(), .getMonth(), .getDate() on a Date object to get parts of the date.
const currentYear = new Date().getFullYear();
const barbieAge = currentYear - barbieMovie.year;
console.log(`${barbieMovie.title} er ${barbieAge} år gammel`);

const fightClubAge = currentYear - fightClubMovie.year;
console.log(`${fightClubMovie.title} er ${fightClubAge} år gammel`);
