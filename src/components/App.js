import TodoList from "./TodoList";

function App() {
    let items = [
        {
            text: 'Learn Javascript',
            completed: false
        },
        {
            text: 'Learn React',
            completed: false
        },
        {
            text: 'Build a React App',
            completed: false
        }
    ];
    let title = 'Things to do';

  return (
    <>
        <div className="container">
            <div className="row">
            <TodoList title={title} items={items} />
            </div>
        </div>
    </>
  );
}

export default App;
