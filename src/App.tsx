import { CategoriesProvider } from "./contexts/categoriesContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CategoriesProvider>
        <Home />
      </CategoriesProvider>
    </>
  );
}

export default App;
