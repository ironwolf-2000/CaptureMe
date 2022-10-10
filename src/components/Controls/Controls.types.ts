export interface ICheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export interface ISearchBarProps {
    value: string;
    hasError: boolean;
    onChange: (value: string) => void;
    onFocus: () => void;
    onCapture: () => void;
}

export interface IControlsProps {
    isInvalidUrl: boolean;
    setIsInvalidUrl: (value: boolean) => void;
    onCapture: (urlString: string, fullScreen: boolean, width?: number, height?: number) => void;
}
