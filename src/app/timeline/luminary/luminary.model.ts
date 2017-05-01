export interface ILuminary {
    birthDate: string;
    branch: string;
    deathDate: string;
    location: string;
    name: string;
    professions: Array<string>;
    published: string;

    displayName?: string;
    excerpt?: string;
    intro?: string;
    isHero?: boolean;
    offsetLeft?: number;
    offsetTop?: number;
    trivia?: string;
    url?: string;
}
