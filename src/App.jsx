import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { ExerciseIndex } from "./ExerciseIndex";

export default App;
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exercises" element={<ExerciseIndex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// To do: finish routes then touch up the front end
