import React, { useState, useContext } from "react";

// Buttonコンポーネントを追加
const Button: React.FC<{ theme: string }> = ({ theme }) => (
    <button style={{ background: theme }}>Themed Button</button>
);

const ThemeContext = React.createContext("light");

// ThemedContentsコンポーネントを追加
const ThemedContents: React.FC = () => (
    <ThemeContext.Consumer>
        {(theme) => <div style={{ background: theme }}>Themed Contents</div>}
    </ThemeContext.Consumer>
);

const App = () => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            <ThemedContents />
            <ThemedButton />
        </ThemeContext.Provider>
    );
};

const ThemedButton = () => {
    const theme = useContext(ThemeContext);

    return <Button theme={theme} />;
};

export default App;
