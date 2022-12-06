import { ReactComponent as Moon } from '../../assets/icons/icon-moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/icon-sun.svg';
import './header.css'
import { useTheme ,useThemeFun } from '../../context/ThemeContext';

function Header(){
    const darkTheme = useTheme();
    const toogleTheme = useThemeFun();
    return (
        <header>
            <h1>Todo</h1>
            <div onClick={toogleTheme}>{darkTheme === 'dark' ? <Sun /> : <Moon />}</div>
        </header>
    )
}

export default Header