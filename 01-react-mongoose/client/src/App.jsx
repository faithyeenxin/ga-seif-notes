import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ClientCard from './component/client/ClientCard';

function App() {
  const [clients, setClients] = useState();

  useEffect(() => {
    fetch('http://localhost:3100/clients')
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <div className='App'>
      <ClientCard clients={clients} />
    </div>
  );
}

export default App;
