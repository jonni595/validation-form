import React from 'react';
import { Formulario, Label, GrupoInput, Input } from "./elements/forms";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return(
    <main>
      <Formulario action=''>
        <div>
          <Label htmlFor=''>Usuario</Label>
          <GrupoInput>
            <Input type='text' placeholder='usuario'/>
            <FontAwesomeIcon icon={faCircleCheck}/>
          </GrupoInput>
            <p>lorem ipsum</p>
        </div>
      </Formulario>
    </main>
  );
}

export default App;