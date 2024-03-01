export interface ILike {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onEmitEvent: (item: any) => void;
    color?: string;
    size?: number;
}
