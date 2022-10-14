export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
}

export interface IThemeSwitchProps {
    theme: Theme;
    onChange: (theme: Theme) => void;
}
