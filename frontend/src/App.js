import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<BookDetails />}></Route>
        <Route path="/category/:id" element={<Category />}></Route>
      </Routes>
    </div>
  );
}

export default App;
