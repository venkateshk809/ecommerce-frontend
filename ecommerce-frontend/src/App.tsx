import "./App.css";
import ProductCard from "./features/products/components/ProductCard";
import ProductsBanner from "./components/common/HeroBanner/ProductsBanner";
import AppHeader from "./components/common/AppHeader/AppHeader";

function App() {
  return (
    <>
      <AppHeader />
      <ProductsBanner />
      <ProductCard />
    </>
  );
}

export default App;
