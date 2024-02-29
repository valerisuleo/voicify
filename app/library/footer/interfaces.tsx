export interface IFooterLink {
    route: string;
    label: string;
    id: string;
}

export interface IFooterNavLinks {
    [key: string]: IFooterLink[];
}
