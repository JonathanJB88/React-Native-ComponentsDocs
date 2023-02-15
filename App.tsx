import 'react-native-gesture-handler';
import * as React from 'react';
import { Navigator } from './src/navigation/Navigator';

import { ThemeProvider } from './src/context/theme/ThemeContext';

const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

export default App;
