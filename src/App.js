import React from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from "./elements/forms";
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import ComponenteInput from './components/input';

const App = () => {
  return(
    <main>
      <Formulario action=''>
        <ComponenteInput
          label="Usuario"
          placeholder="tathan522"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos, y solo puede contener numeros, letras y guion bajo."
          expresionRegular=""
        />
        <ComponenteInput
          label="Password"
          placeholder="Escribe tu contraseña"
          name="password"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos, y solo puede contener numeros, letras y guion bajo."
          expresionRegular=""
        />

        <ContenedorTerminos>
          <Label>
              <input type="checkbox" name="terminos" id="terminos"/>
              Acepto los Términos y Condiciones
          </Label>
        </ContenedorTerminos>

        {false && <MensajeError>
          <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          <b>Error:</b>P
          or favor rellena el formulario correctamente.</p>
        </MensajeError>}

        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          <MensajeExito>Formulario enviado exitosamente!!</MensajeExito>
        </ContenedorBotonCentrado>

      </Formulario>
    </main>
  );
}

export default App;