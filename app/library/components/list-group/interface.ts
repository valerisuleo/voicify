/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IListGroup {
    collection: any[];
    propKey: string;
    propText: string;
    shouldSetActiveIndex?: boolean;
    borderless?: boolean;

    onEmitEvent: (item: any) => void;
}
