import { ContextualClass } from '../../common/interfaces/contextual';

export interface IBtn {
    classes: ContextualClass;
    label: string;
    type: 'button' | 'submit' | 'reset';
    onEmitEvent?: () => void;
}
