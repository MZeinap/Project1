import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostCard from "./components/PostCard/PostCard";
import Login from "./pages/Login/Login";
import Register from "./pages/Redister/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header isAuth={false} />
        <Routes>
          <Route path="/register" element={<Register />} />
          {/* <PostCard
            title="Многие думают, что Lorem Ipsum"
            createdAt="17 декабря 2022 г."
            content="Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum"
          /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
