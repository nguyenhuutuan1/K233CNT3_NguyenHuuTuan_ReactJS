import logo from './logo.svg';
import './App.css';
import NhtCompA from './components/NhtCompA';

function App() {
  return (
    <div className="App">
      <h2>Nguyễn Hữu Tuấn - K23CNT3 - ReactJS</h2>
      <hr/>
      {/* Sử dụng Component NhtCompA  */}
      <NhtCompA />
      <NhtCompA nhtName="Nguyễn Hữu Tuấn" nhtAddress="35 làng trung văn" />
    </div>
  );
}

export default App;
