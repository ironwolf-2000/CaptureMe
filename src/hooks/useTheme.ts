import { useState } from 'react';
import { Theme } from '../components/ThemeToggle/ThemeToggle.types';

const THEME_KEY = 'captureMeTheme';

export const useTheme = (): [Theme, () => void] => {
    const [theme, setTheme] = useState((localStorage.getItem(THEME_KEY) ?? Theme.Light) as Theme);

    const toggleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        localStorage.setItem(THEME_KEY, newTheme);
        setTheme(newTheme);
    };

    return [theme, toggleTheme];
};
