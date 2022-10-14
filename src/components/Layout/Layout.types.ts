import { Theme } from '../ThemeSwitch/ThemeSwitch.types';

export interface IBodyProps {
    children: React.ReactNode;
}

export interface IHeaderProps {
    theme: Theme;
    onThemeChange: (theme: Theme) => void;
}
