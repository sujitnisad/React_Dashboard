import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Container/Main";
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Main>
          <Header />
        </Main>
      </div>
    </>
  );
}

export default App;
