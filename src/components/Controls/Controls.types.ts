export interface ICheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export interface ISearchBarProps {
    value: string;
    onChange: (value: string) => void;
}
