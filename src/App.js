import logo from './logo.svg';

import './App.css';
import ReactRouter from './Routes/ReactRouter';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      
      <ReactRouter></ReactRouter>
    </div>
  );
}

export default App;
