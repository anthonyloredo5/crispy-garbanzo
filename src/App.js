import logo from './logo.svg';
import './App.css';
import getEmails from './api/API';

import BasicTable from './components/table';

function App() {
  console.log("App running");
  getEmails();
  console.log("Should log emails");

  return (
    <div className="App">
      <h1>First Step To World Domination</h1>
      <BasicTable />
    </div>
  );
}

export default App;
