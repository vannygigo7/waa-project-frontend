import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./App.css"
import {BrowserRouter} from "react-router-dom";
import MyRoute from "./components/MyRoute";

function App() {
    return (
        <BrowserRouter>
            <MyRoute/>
        </BrowserRouter>
    );
}

export default App;
