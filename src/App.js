import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Note from "./components/pages/Note/Note";
import Profile from "./components/pages/Profile/Profile";
import CreatePost from "./components/pages/CreatePost/CreatePost";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Friends from "./components/pages/Friends/Friends";
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/note:id" element={<Note/>} />
          <Route path="/profile:id" element={<Profile/>} />
          <Route path="/create-post" element={<CreatePost/>} />
          <Route path="/friends" element={<Friends/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
