export interface ICategory {
    name: string;
    label: string;
    src: string;
    genre?: string;
    counter?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    list?: any;
}
