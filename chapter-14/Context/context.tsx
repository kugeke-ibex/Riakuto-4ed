import React from "react";

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

class App extends React.Component {
    state = { theme: "light" };

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <ThemedContents />
                <ThemedButton />
            </ThemeContext.Provider>
        );
    }
}

class ThemedButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => <Button theme={theme} />}
            </ThemeContext.Consumer>
        );
    }
}

export default App;
