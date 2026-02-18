// movies-data.js
// Simple dataset (array of objects)

const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    description: "A thief enters dreams to steal secrets and plant ideas.",
    link: "https://www.imdb.com/title/tt1375666/"
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    description: "Batman faces the Joker as Gotham descends into chaos.",
    link: "https://www.imdb.com/title/tt0468569/"
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    description: "A space mission to save humanity across time and distance.",
    link: "https://www.imdb.com/title/tt0816692/"
  },
  {
    title: "Parasite",
    genre: "Drama",
    year: 2019,
    description: "A dark social satire about class and deception.",
    link: "https://www.imdb.com/title/tt6751668/"
  },
  {
    title: "Get Out",
    genre: "Horror",
    year: 2017,
    description: "A weekend visit turns into something terrifying.",
    link: "https://www.imdb.com/title/tt5052448/"
  },
  {
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    description: "A love story unfolds aboard the ill-fated RMS Titanic.",
    link: "https://www.imdb.com/title/tt0120338/"
  },
  {
    title: "Avatar",
    genre: "Sci-Fi",
    year: 2009,
    description: "A marine on Pandora becomes torn between duty and a new world.",
    link: "https://www.imdb.com/title/tt0499549/"
  },
  {
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    description: "The Avengers assemble for a final stand against Thanos.",
    link: "https://www.imdb.com/title/tt4154796/"
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    description: "Two imprisoned men bond over years, finding hope and redemption.",
    link: "https://www.imdb.com/title/tt0111161/"
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    description: "A man with a kind heart influences history in unexpected ways.",
    link: "https://www.imdb.com/title/tt0109830/"
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    description: "Interwoven stories of crime and redemption in Los Angeles.",
    link: "https://www.imdb.com/title/tt0110912/"
  },
  {
    title: "The Godfather",
    genre: "Crime",
    year: 1972,
    description: "The aging patriarch of a crime dynasty transfers control to his son.",
    link: "https://www.imdb.com/title/tt0068646/"
  },
  {
    title: "The Godfather Part II",
    genre: "Crime",
    year: 1974,
    description: "The rise of Vito Corleone and Michael’s grip on the family empire.",
    link: "https://www.imdb.com/title/tt0071562/"
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    genre: "Sci-Fi",
    year: 1977,
    description: "A farm boy joins a rebellion to defeat an evil empire.",
    link: "https://www.imdb.com/title/tt0076759/"
  },
  {
    title: "Jurassic Park",
    genre: "Adventure",
    year: 1993,
    description: "A theme park with cloned dinosaurs spirals out of control.",
    link: "https://www.imdb.com/title/tt0107290/"
  },
  {
    title: "The Lion King",
    genre: "Animation",
    year: 1994,
    description: "A young lion prince must reclaim his throne.",
    link: "https://www.imdb.com/title/tt0110357/"
  },
  {
    title: "Toy Story",
    genre: "Animation",
    year: 1995,
    description: "A cowboy doll feels threatened by a flashy new space toy.",
    link: "https://www.imdb.com/title/tt0114709/"
  },
  {
    title: "Finding Nemo",
    genre: "Animation",
    year: 2003,
    description: "A clownfish searches the ocean to find his missing son.",
    link: "https://www.imdb.com/title/tt0266543/"
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi",
    year: 1999,
    description: "A hacker discovers reality is a simulation and joins a rebellion.",
    link: "https://www.imdb.com/title/tt0133093/"
  },
  {
    title: "Gladiator",
    genre: "Action",
    year: 2000,
    description: "A betrayed general becomes a gladiator seeking vengeance.",
    link: "https://www.imdb.com/title/tt0172495/"
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy",
    year: 2001,
    description: "A hobbit begins a dangerous journey to destroy a powerful ring.",
    link: "https://www.imdb.com/title/tt0120737/"
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    genre: "Fantasy",
    year: 2002,
    description: "The fellowship is broken as war spreads across Middle-earth.",
    link: "https://www.imdb.com/title/tt0167261/"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    year: 2003,
    description: "The final battle for Middle-earth begins as the ring nears its fate.",
    link: "https://www.imdb.com/title/tt0167260/"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    year: 2001,
    description: "A boy discovers he’s a wizard and starts school at Hogwarts.",
    link: "https://www.imdb.com/title/tt0241527/"
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "Action",
    year: 2021,
    description: "Spider-Man’s identity causes multiverse chaos after a spell goes wrong.",
    link: "https://www.imdb.com/title/tt10872600/"
  },
  {
    title: "Black Panther",
    genre: "Action",
    year: 2018,
    description: "T’Challa returns home to Wakanda to lead as king and protector.",
    link: "https://www.imdb.com/title/tt1825683/"
  },
  {
    title: "Top Gun: Maverick",
    genre: "Action",
    year: 2022,
    description: "Maverick trains a new generation of pilots for a high-stakes mission.",
    link: "https://www.imdb.com/title/tt1745960/"
  },
  {
    title: "Barbie",
    genre: "Comedy",
    year: 2023,
    description: "Barbie steps into the real world and questions what it means to be perfect.",
    link: "https://www.imdb.com/title/tt1517268/"
  },
  {
    title: "Oppenheimer",
    genre: "Drama",
    year: 2023,
    description: "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
    link: "https://www.imdb.com/title/tt15398776/"
  },
  {
    title: "The Super Mario Bros. Movie",
    genre: "Animation",
    year: 2023,
    description: "Mario and Luigi are pulled into a world of adventure and power-ups.",
    link: "https://www.imdb.com/title/tt6718170/"
  }

];
