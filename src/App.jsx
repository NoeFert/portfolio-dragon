import { Routes, Route, Navigate } from "react-router-dom";
import { ScrollManager } from "./components/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Bio from "./pages/Bio";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:slug" element={<Project />} />
        <Route path="/biographie" element={<Bio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
