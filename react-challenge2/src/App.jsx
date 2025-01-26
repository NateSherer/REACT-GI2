import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./Challenges/Easy";
import Movie from "./Challenges/Medium";
import ToDo from "./Challenges/Todo";
import Task from "./Challenges/Task";


function App() {
  const [chore, setChore] = useState([]); 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="ToDo" element={<ToDo chore={chore} setChore={setChore} />} />
          <Route path="Task/:id" element={<Task chore={chore}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;
