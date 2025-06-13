
import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import App from './App';
import App2 from './app/page';
import { useTheme } from './Context/ThemeContext';

export function ThemedApp() {
  const { theme } = useTheme();

  return (
    <FluentProvider theme={theme === 'dark' ? webDarkTheme : webLightTheme}>
      {/* <App /> */}
      <App2 />
    </FluentProvider>
  );
}
