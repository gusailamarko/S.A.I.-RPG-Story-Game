//MOCK DATA CAN BE REMOVED AFTER I COMPLETE THE CREATION FORM REFINEMENTS
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
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 2, //PK
        genreID: 1, //FK to genres table
        storyName: "The Hero Lives",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 3, //PK
        genreID: 1, //FK to genres table
        storyName: "Ordinary Person In A Supernatural World",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 4, //PK
        genreID: 3, //FK to genres table
        storyName: "Unlikely Love",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 5, //PK
        genreID: 3, //FK to genres table
        storyName: "The Love Triangle",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 6, //PK
        genreID: 2, //FK to genres table
        storyName: "Human Centipede",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 7, //PK
        genreID: 1, //FK to genres table
        storyName: "Magical Human",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 8, //PK
        genreID: 2, //FK to genres table
        storyName: "Ghosts Everywhere",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 9, //PK
        genreID: 2, //FK to genres table
        storyName: "Scaredy Cat",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 10, //PK
        genreID: 3, //FK to genres table
        storyName: "Hot Love",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    },
    {
        storyID: 11, //PK
        genreID: 2, //FK to genres table
        storyName: "Stalker",
        titleImage: "src/assets/storyTitleImg.webp",
        author: "User" //FK to users table
    }
]

export const settingLabels = ["Update Profile Banner", "Update Profile Picture", "Change Displayname", "Change Email Address", "Change Password"]