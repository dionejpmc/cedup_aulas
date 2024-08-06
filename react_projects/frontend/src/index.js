import React, { useState } from 'react';
import render from 'react'
import ReactDOM from 'react-dom';

import AppUser from './AppUser.js';
import AppProduct from './AppProduct.js'; // Alteração do nome do componente e caminho do arquivo
import { createRoot } from 'react-dom/client' //*********** ALTERADO  ReactDOM.render(<App />, document.getElementById('root'));*/
import { hydrateRoot } from 'react-dom/client';

const App = () => {
  const [selectedForm, setSelectedForm] = useState('user'); // Estado para controlar qual formulário deve ser exibido

  const renderSelectedForm = () => {
    switch (selectedForm) {
      case 'user':
        return <AppUser />;
      case 'product':
        return <AppProduct />;
      // Adicione mais casos para outros formulários, se necessário
      default:
        return null;
    }
  }
return (
    <div  id="root">
      <select value={selectedForm} onChange={(e) => setSelectedForm(e.target.value)}>
        <option value="user">Formulário de Usuário</option>
        <option value="product">Formulário de Produto</option>
        {/* Adicione mais opções conforme necessário */}
      </select>
      {renderSelectedForm()}
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById('root'));
//export default App;
//createRoot(document.getElementById('root')).render(<App />);

hydrateRoot(
  document.getElementById('root'),
  <App />
);