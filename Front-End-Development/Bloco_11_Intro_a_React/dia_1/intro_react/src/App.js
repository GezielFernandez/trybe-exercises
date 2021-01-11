import './App.css';

const tasks = ["Writing theses", "Playing violin", "Studying react", "Playing with kids" ];

function App() {
  return (
    <ul>
      {tasks.map(task => <li>{task}</li>)}
    </ul>
  );
}

export default App;
