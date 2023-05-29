import { useState } from "react";

import "./index.css";

import "./components/App.first.css";
import "./components/App.second.css";
import "./components/App.third.css";
import ReactThreeToggle from "./index";
function App() {
  const themes = ["first", "second", "third"];
  const [themeIndex, setThemeIndex] = useState(0);
  const toggleTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
  };

  const theme = themes[themeIndex];

  const [result, setResult] = useState("");

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const clear = () => {
    setResult("");
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setResult(result.concat(e.currentTarget.name));
    const lastCharacter = result.slice(-1);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <main className={`main ${theme}`}>
      <div className={`container ${theme}`}>
        <div className={`header ${theme}`}>
          <div className='calc'>
            <p>calc</p>
          </div>

          <div onClick={toggleTheme} className={`toggle ${theme}`}>
            <div className='theme-steps'>
              <p>THEME</p>
            </div>
            <div className='theme-number'>
              <p>1 2 3</p>
            </div>
            <div className='theme-toggle'>
              <ReactThreeToggle values={["hoge", "fuga", "piyo"]} />
            </div>
          </div>
        </div>

        <input type='text' value={result} className={`result ${theme}`} />

        <div className={`keys ${theme}`}>
          <button name='7' onClick={handleClick} className={`number ${theme}`}>
            7
          </button>
          <button name='8' onClick={handleClick} className={`number ${theme}`}>
            8
          </button>
          <button name='9' onClick={handleClick} className={`number ${theme}`}>
            9
          </button>
          <button onClick={backspace} className={`delete ${theme}`}>
            DEL
          </button>
          <button name='4' onClick={handleClick} className={`number ${theme}`}>
            4
          </button>
          <button name='5' onClick={handleClick} className={`number ${theme}`}>
            5
          </button>
          <button name='6' onClick={handleClick} className={`number ${theme}`}>
            6
          </button>
          <button name='+' onClick={handleClick} className={`number ${theme}`}>
            +
          </button>
          <button name='3' onClick={handleClick} className={`number ${theme}`}>
            3
          </button>
          <button name='2' onClick={handleClick} className={`number ${theme}`}>
            2
          </button>
          <button name='1' onClick={handleClick} className={`number ${theme}`}>
            1
          </button>
          <button name='-' onClick={handleClick} className={`number ${theme}`}>
            -
          </button>
          <button name='.' onClick={handleClick} className={`number ${theme}`}>
            .
          </button>
          <button name='0' onClick={handleClick} className={`number ${theme}`}>
            0
          </button>
          <button name='*' onClick={handleClick} className={`number ${theme}`}>
            &times;
          </button>
          <button name='/' onClick={handleClick} className={`number ${theme}`}>
            &divide;
          </button>
          <button onClick={clear} className={`reset ${theme}`}>
            RESET
          </button>
          <button onClick={calculate} className={`equal ${theme}`}>
            =
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
