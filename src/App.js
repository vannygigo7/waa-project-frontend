
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import MyRoute from "./components/MyRoute";
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <MyRoute/>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
