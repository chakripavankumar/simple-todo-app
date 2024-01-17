import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todo"

function App() {
  
  return (
    <div>
      <CreateTodo/>
      <Todos todos={[
        {
          tittle:"asd",
          description:"hisfduidfg",
          completed: false
        }
      ]}></Todos>
    </div>
  )
}

export default App
