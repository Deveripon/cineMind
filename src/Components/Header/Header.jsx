import { IoIosMoon } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import CartButton from "./CartButton";
import Logo from "./Logo";

export default function Header() {
    return (
        <header>
            <nav className='container flex items-center justify-between space-x-10 py-6'>
                <Logo />
                <ul className='flex items-center space-x-5'>
                    <li>
                        <a
                            className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
                            href='#'>
                            <IoNotifications className='text-primary' />
                        </a>
                    </li>
                    <li>
                        <a
                            className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
                            href='#'>
                            <IoIosMoon className='text-primary' />
                        </a>
                    </li>
                    <CartButton />
                </ul>
            </nav>
        </header>
    );
}

