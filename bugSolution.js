```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLayout/>} >
          <Route path=":id" element={<About />} />
        </Route>
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function AboutLayout(){
  let location = useLocation();
  return (
    <div>
      <h1>About Page</h1>
      <p>Current Route: {location.pathname}</p>
      <Outlet/>
    </div>
  );
}

function About() {
  let params = useParams();
  return <div>About {params.id}</div>;
}

export default App;
```