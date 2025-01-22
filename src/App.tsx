import DynamicForm from "./DynamicForm";

function App() {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <DynamicForm company="Company1" />
      <DynamicForm company="Company2" />
      <DynamicForm company="Company3" />
    </div>
  );
}

export default App;
