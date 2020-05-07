export var eventos = [];

export function getAllEventos(){
  return eventos
}

export function setAllEventos(eventos){
  eventos = eventos;
}

export var eventosStack = [];

export function getEventosStack(){
  return eventosStack
}

export function setEventosStack(eventosStack){
  this.eventosStack = eventosStack;
}
