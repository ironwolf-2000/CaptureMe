export interface ICheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export interface ISearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onCapture: () => void;
}

export interface IControlsProps {
    onCapture: (urlString: string, fullScreen: boolean, width?: number, height?: number) => void;
}
