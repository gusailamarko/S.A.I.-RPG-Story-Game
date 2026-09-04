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

declare interface FeedbackProps {
    type: string;
    msg: string;
}