//MOCK DATA FOR THE HOME PAGE UI
//These would be two tables in the database, one for the genres, and another one for the stories in said genre.
export const mockGenres = [
    {
        id: 1, //PK
        genreName: "Fantasy",

    },
    {
        id: 2,
        genreName: "Horror"
    },
    {
        id: 3,
        genreName: "Romance"
    }
];

export const mockStories = [
    {
        storyID: 1, //PK
        genreID: 2, //FK to genres table
        storyName: "The Haunted House",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    },
    {
        storyID: 2, //PK
        genreID: 1, //FK to genres table
        storyName: "The Hero Lives",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    },
    {
        storyID: 3, //PK
        genreID: 1, //FK to genres table
        storyName: "Ordinary Person In A Supernatural World",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    },
    {
        storyID: 4, //PK
        genreID: 3, //FK to genres table
        storyName: "Unlikely Love",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    },
    {
        storyID: 5, //PK
        genreID: 3, //FK to genres table
        storyName: "The Love Triangle",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    },
    {
        storyID: 6, //PK
        genreID: 2, //FK to genres table
        storyName: "Human Centipede",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    },
    {
        storyID: 7, //PK
        genreID: 1, //FK to genres table
        storyName: "Magical Human",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    },
    {
        storyID: 8, //PK
        genreID: 2, //FK to genres table
        storyName: "Ghosts Everywhere",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    },
    {
        storyID: 9, //PK
        genreID: 2, //FK to genres table
        storyName: "Scaredy Cat",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    },
    {
        storyID: 10, //PK
        genreID: 3, //FK to genres table
        storyName: "Hot Love",
        titleImage: "/imgs/storyTitleImg.jpg",
        author: "User" //FK to users table
    }
]