document.addEventListener('DOMContentLoaded', async () => {
  const contenedorUsuarios = $("contenedor_usuarios");
  const listado = $("listado");
  const tareas = $("tareas");

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const personas = await res.json();

  personas.forEach((persona) => {
      const item = document.createElement("div");
      item.classList.add("usuarios");

      item.innerHTML = `
          <p><strong>ID:</strong> ${persona.id}</p>
          <p><strong>Nombre:</strong> ${persona.name}</p>
          <p><strong>Nombre de usuario:</strong> ${persona.username}</p>
          <p><strong>Email:</strong> ${persona.email}</p>
          <p><strong>Sitio web:</strong> <a href="http://${persona.website}" target="_blank">${persona.website}</a></p>
          <button onclick="verTarea(${persona.id})">Ver tareas</button>
          <div id="tarea-${persona.id}"></div>
      `;
      contenedorUsuarios.appendChild(item);
  });
});

async function verTarea(userId) {
  const contenedorTarea = document.getElementById(`tarea-${userId}`);

  if (contenedorTarea.innerHTML === "") {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
      const tarea = await res.json();

      tarea.forEach(task => {
          const taskDiv = document.createElement('div');
          taskDiv.classList.add('task', task.completed ? 'completed' : 'not-completed');
          taskDiv.textContent = task.title;
          contenedorTarea.appendChild(taskDiv);
      });
  } else {
      contenedorTarea.innerHTML = '';
  }
}

function $(elemento) {
  return document.getElementById(elemento);
}