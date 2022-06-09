import React from 'react';
import { Formulario } from "./elements/forms";

const App = () => {
  return(
    <main>
      <Formulario action=''>
      <div>
        <label htmlFor=''>Usuario</label>
        <input type='text' placeholder='usuario'/>
        <p>lorem ipsum</p>
      </div>
      <div>
        <label htmlFor=''>Usuario</label>
        <input type='text' placeholder='usuario'/>
        <p>lorem ipsum</p>
      </div>
      </Formulario>
    </main>
  );
}

export default App;