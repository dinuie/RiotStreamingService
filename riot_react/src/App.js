import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
    return (
        <>
        {/* <div className="lg:p-10  bg-zinc-900 bg-cover"> */}
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        {/* </div> */}
        </>
    );
}

export default App;
