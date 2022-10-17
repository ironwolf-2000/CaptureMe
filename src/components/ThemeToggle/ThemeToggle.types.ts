export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
}

export interface IThemeToggleProps {
    theme: Theme;
    onChange: () => void;
}
