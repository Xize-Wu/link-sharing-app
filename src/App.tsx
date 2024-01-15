import { DatabaseProvider } from "./contexts/DatabaseContext"

import GlobalStyle from "./styles/GlobalStyles"
import AppLayout from "./components/AppLayout"
import styled from "styled-components"

function App() {

  return (
    <DatabaseProvider>
      <GlobalStyle/>
      <AppLayout />
    </DatabaseProvider>
  )
}

export default App
