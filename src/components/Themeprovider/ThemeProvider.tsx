'use client';

import { useEffect, useState } from "react";

import ThemeContext from "@/context/themeContext";

/**
 * Componente que proporciona un tema oscuro o claro a la aplicación.
 * 
 * @param children Los elementos hijos que se renderizarán dentro del componente.
 * @returns El componente ThemeProvider.
 */
const ThemeProvider = ({ children} : { children: React.ReactNode }) => {
    const themeFromLocalStorage : boolean = 
    typeof localStorage !== 'undefined' && localStorage.getItem("hotel-theme")
    ? JSON.parse(localStorage.getItem("hotel-theme")!) 
    : false;

    const [ darkTheme, setDarkTheme ] = useState<boolean>(themeFromLocalStorage);
    const [renderComponent, setRenderComponent] = useState(false);

    useEffect(() => {
        setRenderComponent(true);
    }, [])

    if (!renderComponent) return <></>;

    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
                <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;