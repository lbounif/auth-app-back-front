import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import FirstStep from "./components/FirstStep"
import ThirdStep from "./components/ThirdStep"

function App() {
  return (
    <div className="App">
        <Header />
        {/* <FirstStep /> */}
        <ThirdStep />
    </div>
  );
}

export default App;
