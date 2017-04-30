export interface ILuminary {
    name: string;
    displayName?: string;
    isHero?: boolean;
    location: string;
    branch: string;
    professions: Array<string>;
    birthDate: string;
    deathDate: string;
    published?: string;
    offset?: number;
    excerpt?: string;
    trivia?: string;
    intro?: string;
}
