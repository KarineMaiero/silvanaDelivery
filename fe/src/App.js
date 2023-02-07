import { 
  BrowserRouter, 
  Route, 
  Routes
} from 'react-router-dom';

import Home from './components/pages/Home';
import Header from './organisms/AppHeader';
import Recipes from './components/pages/Recipes';
import Recipes1 from './components/pages/Models/Recipes1';
import Recipes2 from './components/pages/Models/Recipes2';
import Recipes3 from './components/pages/Models/Recipes3';
import Login from './components/pages/Login';
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
          <Route path="/recipes1" element={<Recipes1 />} />
          <Route path="/recipes2" element={<Recipes2 />} />
          <Route path="/recipes3" element={<Recipes3 />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/user/:userid" element={<User />} /> */}
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
