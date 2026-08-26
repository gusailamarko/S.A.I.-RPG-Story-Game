declare interface GenreStoriesProps {
    id: number;
    genreName: string;
}

declare interface StoryProps {
    storyID: number;
    genreID: number;
    storyName: string;
    titleImg: string;
    author: string;
}

declare interface SettingCardProps {
    label: String;
}

declare interface SettingCardDropdownProps {
    variant: String;   
}

declare interface ButtonProps {
    type: "button" | "submit";
    usage: String;
    label: String;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}