import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { routes } from "./routes/Routes.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={<route.component {...route} />}
          />
        );
      })}
    </Routes>
  </Router>
);
