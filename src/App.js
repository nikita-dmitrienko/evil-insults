import { useState, useEffect } from 'react';
import './App.css';
import './styles/output.css'
import Footer from './components/Footer';
import Insult from './components/Insult';
import ThemeToggler from './components/ThemeToggler';


const App = () => {
  const [isDark, toggleTheme] = useState(false);

	const handleClick = () => {
	  toggleTheme(!isDark);
	  localStorage.setItem('isDarkTheme', !isDark);
	};

	useEffect(() => {
    const current = JSON.parse(localStorage.getItem('isDarkTheme'));
		toggleTheme(current);
	}, []);

  return (
    <div className={isDark ? "dark" : null}>
      <ThemeToggler toggler={handleClick} isDark={isDark} />
      <div className="bg-white dark:bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
        <h1 className="text-4xl text-gray-800 dark:text-white">Hello 👋</h1>
        <Insult />
        <Footer />
      </div>
    </div>
  );
}

export default App;
