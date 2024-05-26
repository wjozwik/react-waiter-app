import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Table from './components/Table/Table';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    // <NavBar />
    <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table/:id" element={<Table />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Container>
  );
};

export default App;
