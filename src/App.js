import Reac, {useState} from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from "./elements/forms";
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import ComponenteInput from './components/input';

const App = () => {

const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
const [nombre, cambiarNombre] = useState({campo: '', valido: null});
const [password, cambiarPassword] = useState({campo: '', valido: null});
const [password2, cambiarPassword2] = useState({campo: '', valido: null});
const [correo, cambiarCorreo] = useState({campo: '', valido: null});
const [telefono, cambiarTelefono] = useState({campo: '', valido: null});

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

  return(
    <main>
      <Formulario action=''>
        <ComponenteInput
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          label="Usuario"
          placeholder="tathan522"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos, y solo puede contener numeros, letras y guion bajo."
          expresionRegular={expresiones.usuario}
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