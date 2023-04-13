import { Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Link to="/tweets">Home Page</Link>} />
      <Route path="/tweets" element={<Link to="/">Tweets Page</Link>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
