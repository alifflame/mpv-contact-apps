import './App.css';

import { 
  Link,
  Route, 
  Routes 
} from 'react-router-dom';

//views
import ContactApps from './views/ContactApps';
import DetailContact from './views/DetailContact';
import CategoryContact from './views/CategoryContact';

function App() {
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
      <div className='container-fluid'>

        <Link to="/" className='navbar-brand'>Contact Apps</Link>

        <button type='button' className='navbar-toggler' data-bs-toggle='collapse' 
        data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle 
        navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse justify-content-between' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>All Contact</Link>
            </li>
            <li className='nav-item'>
              <Link to="/detail" className='nav-link'>detail</Link>
            </li>
            <li className='nav-item'>
              <Link to="/category" className='nav-link'>category</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
      <Routes>
        <Route exact path='/' element={<ContactApps/>} />
        <Route exact path='/detail' element={<DetailContact/>} />
        <Route exact path='/category' element={<CategoryContact/>} />
      </Routes>
    </>
  );
}

export default App;
