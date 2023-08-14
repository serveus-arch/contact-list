// Lista de contactos predefinidos
let contactos = [
  
];

// Función para imprimir los contactos en la lista
function mostrarContactos() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  for (let i = 0; i < contactos.length; i++) {
    const contacto = contactos[i];

    const li = document.createElement("li");
    li.textContent = contacto;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Borrar";
    deleteButton.addEventListener("click", () => borrarContacto(i));

    li.appendChild(deleteButton);
    contactList.appendChild(li);
  }
}

// Función para agregar un nuevo contacto
function agregarContacto() {
  const newContactInput = document.getElementById("newContact");
  const newContact = newContactInput.value;

  if (newContact.trim() !== "") {
    contactos.push(newContact);
    newContactInput.value = "";
    mostrarContactos();
  }
}

// Función para borrar un contacto existente
function borrarContacto(index) {
  contactos.splice(index, 1);
  mostrarContactos();
}

// Event listener
document.getElementById("addButton").addEventListener("click", agregarContacto);

// Inicializar la lista de contactos al cargar la página
mostrarContactos();
