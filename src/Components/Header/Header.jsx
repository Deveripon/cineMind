import { useContext } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoNotifications, IoSunny } from "react-icons/io5";
import { ThemeContext } from "../../context/ThemeContext";
import CartButton from "./CartButton";
import Logo from "./Logo";

export default function Header() {
    const { isDark, setIsDark } = useContext(ThemeContext);

    function handleTheme() {
        setIsDark(!isDark);
    }

    return (
        <header>
            <nav className='container flex items-center justify-between space-x-10 py-6'>
                <Logo isDark={isDark} />
                <ul className='flex items-center space-x-5'>
                    <li>
                        <a
                            className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-2 inline-block'
                            href='#'>
                            <IoNotifications className='text-primary' />
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={handleTheme}
                            className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-[8px] inline-block mt-[-8px] '>
                            {isDark ? (
                                <IoIosMoon className='text-primary' />
                            ) : (
                                <IoSunny className='text-primary' />
                            )}
                        </button>
                    </li>
                    <CartButton />
                </ul>
            </nav>
        </header>
    );
}

