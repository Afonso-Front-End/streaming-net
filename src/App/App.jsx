import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Streaming from '../Streaming/Streaming';
// import { useNavigate } from 'react-router-dom';
const App = () => {
  // const navigate = useNavigate();
  return (

    <Router>
      <Routes>
        <Route index element={<Layout />} />
        <Route path='/video/:id/:name' element={<Streaming />} />
      </Routes>
    </Router>
  )
}

export default App
