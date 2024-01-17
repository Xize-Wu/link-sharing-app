export interface User {
    id: number;
    email: string;
    password: string | undefined;
    profile_picture: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    profile_email: string | undefined;
    link: LinkInterface[]
}

export type LinkPlatform = "GitHub" | "Dev.to" | "Frontend Mentor" | "Codewars" | "Twitter" | "freeCodeCamp" | "LinkedIn" | "GitLab" | "YouTube" | "Hashnode" | "Facebook" | "Twitch";

export interface LinkInterface {
    index: number;
    platform: LinkPlatform;
    address: string;
}

export interface LoginInfo {
    email: string;
    password: string;
}
