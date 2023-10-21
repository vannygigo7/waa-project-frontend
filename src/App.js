
import {BrowserRouter} from "react-router-dom";
import MyRoute from "./components/MyRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
          <MyRoute/>
      </BrowserRouter>
  );
}

export default App;
