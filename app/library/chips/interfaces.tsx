import { ContextualClass } from '../../common/interfaces/contextual';

// Base interface for a chip
interface IChip {
    label: string;
    classes: ContextualClass;
    onEmitEvent?: () => void;
}

// Extension for a chip that includes an avatar
export interface IChipAvatar extends IChip {
    src: string;
    width: number;
    height: number;
}

// Using union type to allow for both chip types
export type IChipProps = IChip | IChipAvatar;
