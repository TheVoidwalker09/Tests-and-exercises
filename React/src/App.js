import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My To-Dos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Finish all courses" />
    </div>
  );
}

export default App;
