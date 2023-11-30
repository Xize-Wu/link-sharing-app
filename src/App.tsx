import { DatabaseProvider } from "./contexts/DatabaseContext"
import AppLayout from "./components/AppLayout"
function App() {

  return (
    <DatabaseProvider>
      <AppLayout />
    </DatabaseProvider>
  )
}

export default App
