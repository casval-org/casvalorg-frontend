import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './container/Home';
import Events from './container/Events';
import Partnership from './container/Partnership';
import Error404 from './components/Error';

export default function App() {
    const navigate = useNavigate();
    return (
        <Routes >
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog-name" element={<BlogDetail />} /> */}
            <Route path="/events" element={<Events />} />
            <Route path="/partnership" element={<Partnership />} />
            {/* <Route path="/galery" element={<Galery />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={ <Error404/>}/>
        </Routes>
    );

}