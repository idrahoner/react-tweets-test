import { Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import TweetsPage from "../pages/Tweets/Tweets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Link to="/tweets">Home Page</Link>} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
