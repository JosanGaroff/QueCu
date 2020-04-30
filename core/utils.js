export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "El email no puede estar vacía";//'Email cannot be empty.';
  if (!re.test(email)) return "Ooops! La dirección email no es válida.";//'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return "La contraseña no puede estar vacía";//'Password cannot be empty.';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return "El nombre no puede estar vacía";//'Name cannot be empty.';

  return '';
};

export const ageValidator = age => {
  if (!age || age.length <= 0) return "La edad no puede estar vacía";
  esNumero=false;
  for (i=0; i<100; i++){
    if (parseInt(age) == (i+1)){
      esNumero=true;
    }
  }
  if(!esNumero){
    return 'La edad tiene que ser un número entre el 1 y el 100';
  }
};

export const cityValidator = city => {
  if (!city || city.length <= 0) return "La ciudad no puede estar vacía"; //'City cannot be empty.';

  return '';
};

export const descriptionValidator = description => {
  if (!descriptionValidator || description.length <= 0) return "La descripción no puede estar vacía";//'Description cannot be empty.';

  return '';
};
