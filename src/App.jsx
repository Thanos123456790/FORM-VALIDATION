import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/success'
            element={<Success />} 
          />
        </Routes>
      </Router>
    </main>

  )
}

export default App