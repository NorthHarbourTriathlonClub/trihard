import { MoonIcon } from '@/components/MoonIcon';
import { SunIcon } from '@/components/SunIcon';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { setTheme } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(() => !darkMode);
    setTheme(darkMode ? 'light' : 'dark');
  };

  return (
    <Switch
      defaultChecked
      checked={darkMode}
      onChange={toggleDarkMode}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
};
