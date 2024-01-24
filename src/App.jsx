import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Page from "./Components/Page";
import CartModalContextProvider from "./context/CartModalContext";
import MovieCartContextProvider from "./context/MovieCartContext";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
    const { isDark } = useContext(ThemeContext);

    return (
        <>
            <CartModalContextProvider>
                <MovieCartContextProvider>
                    <div className={`${isDark ? "darkTheme" : ""}`}>
                        <Header />
                        <Page />
                        <Footer />
                    </div>
                    <ToastContainer />
                </MovieCartContextProvider>
            </CartModalContextProvider>
        </>
    );
}

