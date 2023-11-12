import { PersonProps } from "./model";

export const submitForm = (person: PersonProps) => {
  const validations = {
    user: {
      regex: /^[a-zA-Z0-9_-]{4,16}$/,
      error: "El nombre de usuario debe tener entre 4 y 16 caracteres",
    },
    firstName: {
      regex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      error: "El nombre debe tener entre 1 y 40 caracteres",
    },
    password: {
      regex: /^.{4,12}$/,
      error: "La contraseña debe tener entre 4 y 12 caracteres",
    },
    password2: {
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/,
      error:
        "La contraseña debe tener al menos una letra minúscula, una letra mayúscula y un número",
    },
    email: {
      regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      error: "La dirección de correo electrónico no tiene un formato válido",
    },
    phone: {
      regex: /^\d{7,14}$/,
      error: "El número de teléfono no tiene un formato válido",
    },
    accept: {
      regex: /\btrue\b/,
      error: "Debes aceptar los términos de servicio",
    },
  };

  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const errors = [];
      for (const [field, validation] of Object.entries(validations)) {
        if (!validation.regex.test(person[field])) {
          errors.push(validation.error);
        }
      }

      if (errors.length > 0) {
        reject(new Error(errors.join("\n")));
      } else {
        resolve();
      }
    }, 1500);
  });
};
