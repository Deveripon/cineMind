import lightLogo from "../../assets/CineMInd.png";
import logo from "../../assets/CineMindDark.png";
export default function Logo({ isDark }) {
    return (
        <a href='index.html'>
            <img
                src={isDark ? lightLogo : logo}
                width={139}
                height={26}
                alt=''
            />
        </a>
    );
}

