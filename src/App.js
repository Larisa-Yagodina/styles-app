import './App.css';
import StylePageWrapper from "./components/stylePageWrapper/StylePageWrapper";
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <StylePageWrapper />
        </div>
    );
}

export default App;
