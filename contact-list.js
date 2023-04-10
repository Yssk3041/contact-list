let contactos = [];

contactos = [
  {
    id: 1,
    nombre: "Yennifer",
    apellidos: "Marquez",
    telefono: 3124322112,
    ubicaciones: {
      ciudad: "Apartadó",
      direccion: "Calle 12 No. 22 - 45",
    },
  },
  {
    id: 2,
    nombre: "Jose ",
    apellidos: "Sossa",
    telefono: 3011112121,
    ubicaciones: {
      ciudad: "Santander",
      direccion: "Cra 43 No. 21 - 10",
    },
  },
  {
    id: 3,
    nombre: "Diana",
    apellidos: "Camargo",
    telefono: 3220101010,
    ubicaciones: {
      ciudad: "Seattle",
      direccion: "Avenue 5th 23 - 12",
    },
  },
  {
    id: 4,
    nombre: "Juan Pablo",
    apellidos: "Caro",
    telefono: 3040101001,
    ubicaciones: {
      ciudad: "Manizales",
      direccion: "Avenida 4 No. 12 - 32",
    },
  },
];

const mostrarContactos = function (contacto) {
  for (let contacts of contacto.values()) {
    console.log(
      `Contacto: ${contacts.nombre} ${contacts.apellidos}\nTeléfono: ${contacts.telefono}\nDirección: ${contacts.ubicaciones.direccion} \nCiudad:${contacts.ubicaciones.ciudad}\n --------------`
    );
  }
};

function adicionarContacto(nombre, apellido, telefono, ciudad, direccion) {
  console.log("Adicionando Contacto\n****");
  let id_contacto = contactos[contactos.length - 1].id;

  contactos.push({
    id: id_contacto + 1,
    nombre: nombre,
    apellidos: apellido,
    telefono: telefono,
    ubicaciones: {
      ciudad: ciudad,
      direccion: direccion,
    },
  });

  mostrarContactos(contactos);
}

const eliminarContacto = (nombre, apellido) => {
  for (let contacts of contactos) {
    if (contacts.nombre == nombre && contacts.apellidos == apellido) {
      contactos.splice(contacts.id - 1, 1);
    }
  }
  console.log("El Contacto ha sido eliminado \n");
  mostrarContactos(contactos);
};

adicionarContacto(
  "Juan",
  "Florez",
  3019080921,
  "Manizales",
  "Avenida 8 oeste No. 32 - 45"
);
console.log("");
adicionarContacto(
  "Jhon",
  "Paniagua",
  3231298102,
  "Medellín",
  "Cra 18 No. 87 - 98"
);
console.log("");

eliminarContacto("Juan Pablo", "Caro");
