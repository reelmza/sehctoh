import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import SharedLayout from "./routes/SharedLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<About />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
