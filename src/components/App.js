import { Routes, Route, Navigate } from "react-router-dom";

import TweetsPage from "../pages/Tweets";
import HomePage from "pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
