export interface PersonProps {
  user: string;
  firstName: string;
  password: string;
  password2: string;
  email: string;
  phone: string;
  accept: boolean;
}

export const initialPerson: PersonProps = {
  user: "",
  firstName: "",
  password: "",
  password2: "",
  email: "",
  phone: "",
  accept: false,
};
