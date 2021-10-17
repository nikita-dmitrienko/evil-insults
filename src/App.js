import { useState } from 'react';
import './App.css';
import './styles/output.css'
import Footer from './components/Footer';
import Insult from './components/Insult';


function App() {
  const [isDark, toggleScheme] = useState(true);

  const handleClick = () => toggleScheme(!isDark);

  return (
    <div className={isDark ? "dark" : null}>
      <div className="bg-white dark:bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">

        <div className="flex items-center justify-center mx-auto absolute top-5 right-16">
            <button className="h-10 w-10 flex justify-center items-center focus:outline-none text-yellow-500" onClick={handleClick}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>
            </button>
          <div className="flex justify-end items-center space-x-2 mx-auto relative">
            <span className="text-xs font-extralight dark:text-gray-300">Light</span>
            <div>
              <input type="checkbox" name="theme-switcher" id="checkbox" className="hidden" onClick={handleClick} />
              <label htmlFor="checkbox" className="cursor-pointer">
                <div className="w-9 h-5 flex items-center bg-gray-300 rounded-full p2">
                  <div className="w-4 h-4 bg-white rounded-full shadow switch-ball"></div>
                </div>
              </label>
            </div>
            <span className="text-xs font-semibold dark:text-gray-300">Dark</span>

            <button className="h-10 w-10 flex justify-center items-center focus:outline-none text-black-500" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"/></svg>
            </button>
          </div>

      </div>
        
        <h1 className="text-4xl text-gray-800 dark:text-white">Hello 👋</h1>
        <Insult />
        <Footer />
      </div>
    </div>
  );
}

export default App;
