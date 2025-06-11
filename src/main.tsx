import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import Router, { Route } from "preact-router";
import PrivacyPolicy from "./components/PrivacyPolicy.tsx";

const MainRouter = () => {
  return (
    <Router>
      <Route component={App} path="/" />
      <Route component={PrivacyPolicy} path="/privacy-policy" />
    </Router>
  );
};
render(<MainRouter />, document.getElementById("app")!);
