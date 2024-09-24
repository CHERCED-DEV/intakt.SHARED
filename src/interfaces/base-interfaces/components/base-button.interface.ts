import { BaseButtonUxTypes } from "../../../types/base-types/components/base-button.types";


export interface BaseButtonProps {
    label: string;
    onClick: () => void;
    variant?: BaseButtonUxTypes;
    id?: string;
    ariaLabel?: string;
    disabled?: boolean;
}