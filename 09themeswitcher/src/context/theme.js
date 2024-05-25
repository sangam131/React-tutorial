import { createContext, useContext } from "react";
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:() =>{},
    lightTheme: ()=>{}
})
//Wrap kr diya code ko 
export const ThemeProvider = ThemeContext.Provider;

//use theme ko use krdiya 
export default function useTheme(){
    return useContext(ThemeContext)
}