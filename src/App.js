import './App.css';
import Insult from './components/Insult';
import './styles/output.css'


function App() {
  return (
    <div className="bg-white dark:bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
      <h1 className="text-5xl text-gray-800 dark:text-white">Hello 👋</h1>
      <Insult />
    </div>
  );
}

export default App;
