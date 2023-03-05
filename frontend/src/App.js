import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Participant, Profile , Firstpage,Wrong,Exit,Correct,Rankings,Pingen,Library,Question} from './components';
import {Home,Creator,Game,Join,Instructions, GetReady, Login} from "./pages"
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <div className="App">
     <GameProvider>
     <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/game" element={<Game />} />
          <Route path="/join" element={<Join />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path= "/getReady" element={<GetReady />} />
          <Route path='/Participant' element={<Participant/>}/>
          <Route path="/Wrong" element={<Wrong/>} />
          <Route path="/Correct" element = {<Correct/>}/>
          <Route path="/Rankings" element = {<Rankings/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/creator" element={<Creator />} />
        <Route path="/Firstpage" element={<Firstpage/>}/>
        <Route path="/Exit" element={<Exit/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Pingen" element={<Pingen/>}/>
        <Route path="/Library" element={<Library/>}/>
        <Route path="/Question" element={<Question/>}/>
        </Routes>
     </Router>
     </GameProvider>
    </div>
  );
}

export default App;
