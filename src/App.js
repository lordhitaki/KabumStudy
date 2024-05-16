import "./App.css";
import Home from "./pages/home";
import { ThemeProvider } from "./theme/theme";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
