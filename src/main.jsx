import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider";
import { Provider } from "react-redux";
import { store } from "./App/store";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <UserProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UserProvider>
  </BrowserRouter>
);