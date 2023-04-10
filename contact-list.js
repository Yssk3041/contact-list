let contactos = [];

contactos = [
  {
    id: 1,
    nombre: "Yennifer Marquez",
    telefono: 3124322112,
  },
  {
    id: 2,
    nombre: "Jose Sossa",
    telefono: 3011112121,
  },
  {
    id: 3,
    nombre: "Diana Camargo",
    telefono: 3220101010,
  },
  {
    id: 4,
    nombre: "Juan Pablo Caro",
    telefono: 3040101001,
  },
];

const mostrarContactos = function (contacto) {
  for (let contacts of contacto.values()) {
    console.log(
      `Contacto: ${contacts.nombre} \n Teléfono: ${contacts.telefono}\n --------------`
    );
  }
};

function adicionarContacto(nombre_completo, telefono) {
  console.log("Adicionando Contacto\n****");
  let id_contacto = contactos[contactos.length - 1].id;

  contactos.push({
    id: id_contacto + 1,
    nombre: nombre_completo,
    telefono: telefono,
  });

  mostrarContactos(contactos);
}

const eliminarContacto = (nombre) => {
  for (let contacts of contactos) {
    if (contacts.nombre == nombre) {
      contactos.splice(contacts.id - 1, 1);
    }
  }
  console.log("El Contacto ha sido eliminado \n");
  mostrarContactos(contactos);
};

adicionarContacto("Juan Florez", 3019080921);
console.log("");
adicionarContacto("Jhon Paniagua", 3231298102);
console.log("");
eliminarContacto("Jose Sossa");
