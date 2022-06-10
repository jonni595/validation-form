import React, {useState} from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from "./elements/forms";
import { faExclamationTriangle, faL } from '@fortawesome/free-solid-svg-icons';
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
const [terminos, cambiarTerminos] = useState(false);
const [formularioValido, cambiarFormularioValido] = useState(null);

const expresiones = {
	usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarPassword2 = () => {
  if (password.campo.length > 0){
    if (password.campo !== password2.campo) {
      cambiarPassword2((prevState) =>{
        return{
          ...prevState, valido: 'false'
        }
      });
    } else {
      cambiarPassword2((prevState) =>{
        return{
          ...prevState, valido: 'true'
        }
      });
    }
  }
}

const onChangeTerminos = (e) => {
  cambiarTerminos(e.target.checked);
}

const onSubmit = (e) => {
  e.preventDefault();
  if (
    usuario.valido    === 'true' &&
    nombre.valido     === 'true' &&
    password.valido   === 'true' &&
    password2.valido  === 'true' &&
    correo.valido     === 'true' &&
    telefono.valido   === 'true' &&
    terminos
    ){
      cambiarFormularioValido(true);
      cambiarUsuario({campo: '', valido: ''});
      cambiarNombre({campo: '', valido: null});
      cambiarPassword({campo: '', valido: null});
      cambiarPassword2({campo: '', valido: null});
      cambiarCorreo({campo: '', valido: null});
      cambiarTelefono({campo: '', valido: null});
  } else{
      cambiarFormularioValido(false);
  }
}
  return(
    <main>
      <Formulario action='' onSubmit={onSubmit}>
        <ComponenteInput
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          tipo="text"
          label="Usuario"
          placeholder="tathan522"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos, y solo puede contener numeros, letras y guion bajo."
          expresionRegular={expresiones.usuario}
        />
        <ComponenteInput
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo="text"
          label="Nombre"
          placeholder="Natalie"
          name="name"
          leyendaError="El nombre solo puede tener letras y espacios."
          expresionRegular={expresiones.nombre}
        />
        <ComponenteInput
          estado={password}
          cambiarEstado={cambiarPassword}
          tipo="password"
          label="Password"
          placeholder="Escribre tu clave"
          name="password"
          leyendaError="La contraseña tiene que ser de 4 a 12 digitos."
          expresionRegular={expresiones.password}
        />
        <ComponenteInput
          estado={password2}
          cambiarEstado={cambiarPassword2}
          tipo="password"
          label="Repetir Password"
          placeholder="Escribre tu clave"
          name="password"
          leyendaError="Ambas contraseñas deben ser iguales."
          funcion={validarPassword2}
        />
        <ComponenteInput
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          label="Correo"
          placeholder="Luz@mail.com"
          leyendaError="El correo solo puede tener letras, números, puntos y..."
          expresionRegular={expresiones.correo}
        />
        <ComponenteInput
          estado={telefono}
          cambiarEstado={cambiarTelefono}
          tipo="text"
          label="Telefono"
          placeholder="314456782"
          leyendaError="El telefono solo puede contener números y el máximo"
          expresionRegular={expresiones.telefono}
        />

        <ContenedorTerminos>
          <Label>
              <input type="checkbox" name="terminos" id="terminos" checked={terminos}
                onChange={onChangeTerminos}
              />
              Acepto los Términos y Condiciones
          </Label>
        </ContenedorTerminos>

        {formularioValido === false && <MensajeError>
          <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          <b>Error:</b> Por favor rellena el formulario correctamente.</p>
        </MensajeError>}

        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true &&<MensajeExito>Formulario enviado exitosamente!!</MensajeExito>}
        </ContenedorBotonCentrado>

      </Formulario>
    </main>
  );
}

export default App;