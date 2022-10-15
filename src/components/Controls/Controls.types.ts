export interface ICheckboxProps {
    label: string;
    checked: boolean;
    disabled: boolean;
    onChange: (checked: boolean) => void;
}

export interface ISearchBarProps {
    value: string;
    hasError: boolean;
    loading: boolean;
    onChange: (value: string) => void;
    onFocus: () => void;
    onCapture: () => void;
}

export interface IControlsProps {
    loading: boolean;
    isInvalidUrl: boolean;
    setIsInvalidUrl: (value: boolean) => void;
    onCapture: (urlString: string, fullPage: boolean, width?: number, height?: number) => Promise<void>;
}
