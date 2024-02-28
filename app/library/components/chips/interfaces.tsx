import { ContextualClass } from '../../common/interfaces/contextual';
import { Img } from '../image/interfaces';

// Base interface for a chip
interface IChip {
    label: string;
    classes: ContextualClass;
    onEmitEvent?: () => void;
}

export type IChipAvatar = IChip & Img;

// Using union type to allow for both chip types
export type IChipProps = IChip | IChipAvatar;
