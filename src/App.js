
import './App.css';
import Component from './Profile/Component';
import img from '../src/Profile/pic.jpg'

function App() {
  const handlename = (name) => {
     return (
       alert(`HELLO ${name}` )
     )
  }
  const prof="Agent commerciale au sien d'une societé francaise privée"
  const bio="j'ai obtenue mon diplome de technicien en informatique en 2012 ,passionné de théâtre et de cinéma..."
  return (
    <div ClassName="App">
    <Component Bio={bio}  profession={prof} hand={handlename}>{img}</Component>
    </div>
  );
}

export default App;
