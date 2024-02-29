/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IListGroup {
    collection: any[];
    propKey: string;
    propText: string;
    borderless?: boolean;
    onEmitEvent: (item: any) => void;
}


export interface IListItemStyle {
    classActive: boolean;
}