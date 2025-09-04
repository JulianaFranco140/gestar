export const signupFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Nombre(s)*"
  },
  {
    name: "email",
    type: "email",
    placeholder: "Correo electrónico*"
  },
  {
    name: "password",
    type: "password",
    placeholder: "Contraseña*"
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirmar contraseña*"
  },
  {
    name: "genero",
    type: "select",
    placeholder: "Selecciona tu género*",
    options: [
      { value: "femenino", label: "Femenino" },
      { value: "masculino", label: "Masculino" },
      { value: "otro", label: "Otro" }
    ]
  },
  {
    name: "rol",
    type: "select",
    placeholder: "Selecciona tu rol*",
    options: [
      { value: "gestante", label: "Gestante" },
      { value: "acompañante", label: "Acompañante" }
    ]
  }
];

export const loginFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Correo electrónico*"
  },
  {
    name: "password",
    type: "password",
    placeholder: "Contraseña*"
  }
];
