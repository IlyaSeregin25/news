import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
