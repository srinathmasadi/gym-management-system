import './App.css'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoutes from './routes/protected'

function App() {

  return (
    <Router>
      <ProtectedRoutes />
    </Router>
  )
}

export default App
