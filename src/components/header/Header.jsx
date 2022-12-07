import Moon  from '../../assets/icons/icon-moon.svg';
import Sun  from '../../assets/icons/icon-sun.svg';
import './header.css'
import { useTheme ,useThemeFun } from '../../context/ThemeContext';

function Header(){
    const darkTheme = useTheme();
    const toogleTheme = useThemeFun();
    return (
        <header>
            <h1>Todo</h1>
            <div onClick={toogleTheme}>
                <img src={darkTheme === 'dark' ? Sun  : Moon } alt="Theme Changer" />
            </div>
        </header>
    )
}

export default Header