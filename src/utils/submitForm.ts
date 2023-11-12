import { PersonProps } from "./model";

export const submitForm = (person: PersonProps) => {
  const regexExpressions = {
    user: /^[a-zA-Z0-9_-]{4,16}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/,
  };

  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      /* if (person.user.length === 0 && !regexExpressions.user.test(person.user)) {
        reject(
          new Error(
            "please, complete the fields or Letras, numeros, guion y guion_bajo"
          )
        );
      } else {
        resolve();
      } */

      if (!regexExpressions.user.test(person.user)) {
        reject(new Error("must be 4 digits"));
      } else if (!regexExpressions.name.test(person.firstName)) {
        reject(new Error("must be 40 digits"));
      } else if (!regexExpressions.password.test(person.password)) {
        reject(new Error("must be 12 digits"));
      } else if (!regexExpressions.email.test(person.email)) {
        reject(new Error("write the email correctly"));
      } else if (!regexExpressions.phone.test(person.phone)) {
        reject(new Error("must be 12 digits"));
      }
    }, 1500);
  });
};
