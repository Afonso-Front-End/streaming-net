import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Streaming from '../Streaming/Streaming';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<Layout />} />
        <Route path='/video/:id/:name' element={<Streaming/>} />
      </Routes>
    </Router>
  )
}

export default App
