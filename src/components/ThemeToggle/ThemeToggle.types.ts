export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
}

export interface IThemeToggleProps {
    theme: Theme;
    onChange: (theme: Theme) => void;
}
