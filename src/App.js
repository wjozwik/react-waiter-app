import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';

const App = () => {
  return (
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
