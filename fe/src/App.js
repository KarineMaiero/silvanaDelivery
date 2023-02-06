import { 
  BrowserRouter, 
  Route, 
  Routes
} from 'react-router-dom';

import Home from './components/pages/Home';
import Header from './organisms/AppHeader';
import Recipes from './components/pages/Recipes';
import Footer from './organisms/AppFooter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          {/* <Route path="/user/:userid" element={<User />} /> */}
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
