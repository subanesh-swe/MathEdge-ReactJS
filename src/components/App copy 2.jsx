import { useState } from 'react'

import reactLogo from '/assets/react.svg'
import viteLogo from '/assets/vite.svg'
import '../../public/stylesheets/App.css'

export default function App() {
    const [result, setResult] = useState("");

    const calcResult = () => {
        setResult((pre) => {
            try {
                let res = eval(pre).toString();
                if (res != 'NaN') {
                    return res;
                } else {
                    return "Math error!";
                }
            }
            catch (err) {
                //console.log("invalid input");
                return "Math error!";
            }
        });
    }
    
    const handleInput = (e) => {
        setResult((pre) => {
            return pre.concat(e.target.name)
        });
    }
    
    //const backspace = () => {
    //    setResult((pre) => {
    //        return pre.slice(0, -1);
    //    });
    //}
    
    const clearResult = () => {
        setResult("");
    }

    return (
        <>
            <div className='container' style={{width:'auto', border:'unset', background:'unset'}}>
                <h1 style={{fontSize:'30px'}}>Calculator</h1>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h2>Vite + React</h2>
            </div>
            <div className='container'>
                <form>
                    <input type='text' value={result} onChange={(e) => setResult(e.target.value)} />
                </form>
                <div className='keypad'>
                    <button className='impBtn' name='(' onClick={handleInput}>{'('}</button>
                    <button className='impBtn' name=')' onClick={handleInput}>{')'}</button>
                    <button className='impBtn' name='%' onClick={handleInput}>{'%'}</button>
                    <button className='impBtn' name='AC' onClick={clearResult}>AC</button>

                    <button name='7' onClick={handleInput}>7</button>
                    <button name='8' onClick={handleInput}>8</button>
                    <button name='9' onClick={handleInput}>9</button>
                    <button className='impBtn' name='/' onClick={handleInput}>&divide;</button>

                    <button name='4' onClick={handleInput}>4</button>
                    <button name='5' onClick={handleInput}>5</button>
                    <button name='6' onClick={handleInput}>6</button>
                    <button className='impBtn' name='*' onClick={handleInput}>&times;</button>

                    <button name='1' onClick={handleInput}>1</button>
                    <button name='2' onClick={handleInput}>2</button>
                    <button name='3' onClick={handleInput}>3</button>
                    <button className='impBtn' name='-' onClick={handleInput}>&ndash;</button>

                    <button name='0' onClick={handleInput}>0</button>
                    <button name='.' onClick={handleInput}>.</button>
                    <button className='superBtn' name='=' onClick={calcResult}>=</button>
                    <button className='impBtn' name='+' onClick={handleInput}>+</button>
                </div>
            </div>
        </>
    )
}
