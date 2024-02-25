import { useDarkModeContext } from "./dark-mode-provider";
import moon from '../assets/moon.svg';
import moonGray from '../assets/moon-gray.svg';
import sun from '../assets/sun.svg';
import sunGray from '../assets/sun-gray.svg';

const Switch = () => {

    const {darkMode, toggleDarkMode} = useDarkModeContext();

    return ( 
        
        <div>
            <div className="w-[100px] absolute top-4 right-4 rounded-[100px] dark:bg-gray-800 bg-white p-2 flex  gap-4">
                    <button className={`w-[35px] h-[35px] rounded-[50%] flex items-center justify-center ${!darkMode? "bg-[#c7d2ff]" : ""}`} onClick={toggleDarkMode}>
                        <img
                            width={25}
                            height={25}
                            src={!darkMode ? sun : sunGray}
                            alt="sun"
                        />
                    </button>
                    <button className={`w-[35px] h-[35px] rounded-[50%] flex items-center justify-center ${darkMode? "bg-[#c7d2ff]" : ""}`} onClick={toggleDarkMode}>
                        <img
                            width={30}
                            height={30}
                            src={darkMode ? moon : moonGray}
                            alt="moon"
                        />
                    </button>
                </div>
        </div>
     );
}
 
export default Switch;