'use client';

import React from 'react';
import { useTheme } from '@/lib/theme/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button } from './Button';

export const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            onClick={toggleTheme}
            className="p-2 w-auto border-none focus:ring-0"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <DarkModeIcon className="h-6 w-6 text-gray-700" />
            ) : (
                <LightModeIcon className="h-6 w-6 text-warning" />
            )}
        </Button>
    );
};