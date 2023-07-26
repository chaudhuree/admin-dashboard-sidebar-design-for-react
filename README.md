## Layout Usage:

- for App.jsx

  - install react-router-dom
  - then bring the NavbarLayout.jsx and put it in the Routes wrapper
  - create different page and in each page import the AppWrapper.jsx and put the content inside the AppWrapper

  - Now in App.jsx Route each item and it is done.

```jsx
// App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/portal.css";
import "./assets/css/style.css";
import NavSidebarLayout from "./components/layout/NavSidebarLayout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Router>
        <NavSidebarLayout /> //sidebar and navbar
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
```

> for any page wrap the page with layout

```jsx
// Home.jsx
import React from "react";
import AppWrapper from "../components/layout/AppWrapper";

export default function Home() {
  return <AppWrapper>Home</AppWrapper>;
}
```
