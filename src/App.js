import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div style={{width:'95%',margin: '0 auto'}} className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
