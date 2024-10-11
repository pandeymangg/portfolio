import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext } from "react";

export const AppContext = createContext({
  theme: "light",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (_value: string | ((val: string) => string)) => {},
});

export const AppProvder = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
