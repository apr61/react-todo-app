import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext();
const ThemeContextFun = createContext();

// custom hooks for changing theme
export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeFun() {
    return useContext(ThemeContextFun);
}

function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem('darkTheme') || 'light');
    const [themeFun,] = useState(() => toogleTheme);

    function toogleTheme() {
        setDarkTheme(oldTheme => (oldTheme === 'dark' ? 'light' : 'dark'));
    }

    useEffect(() => {
        console.log(darkTheme);
        if (darkTheme === 'dark') {
            document.body.classList.add('dark-theme')
        }else { 
            document.body.classList.remove('dark-theme') 
        }
        localStorage.setItem('darkTheme', darkTheme);
    }, [darkTheme])

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeContextFun.Provider value={themeFun}>
                {children}
            </ThemeContextFun.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;