const students = [
    { name: 'Jonh', grade: 75 },
    { name: 'Jane', grade: 93 },
    { name: 'Samantha', grade: 90 },
    { name: 'Michael', grade: 94 },
  ];

function verListaDeAlumnos() {
  console.log('Lista de Alumnos:');
  students.forEach(students => {
    console.log(`No. ${students.name} Nombre: ${alumno.nombre}`);
  });
}

function verCalificacionesDeAlumnos() {
  console.log('Calificaciones de Alumnos:');
  alumnos.forEach(alumno => {
    const estado = alumno.calificacion >= 4 ? 'Aprobado' : 'Reprobado';
    console.log(`No. ${alumno.id} Nombre: ${alumno.nombre}, Calificación: ${alumno.calificacion}, ${estado}`);
  });
}

function calcularPromedioDelGrupo() {
  const totalCalificaciones = alumnos.reduce((sum, alumno) => sum + alumno.calificacion, 0);
  const promedio = (totalCalificaciones / alumnos.length).toFixed(1);
  console.log(`El promedio del grupo es: ${promedio}`);
}

function mostrarMenu() {
  console.log(`
    Menú:
    1. Ver lista de alumnos
    2. Ver calificaciones de alumnos
    3. Calcular el promedio del grupo
    4. Salir
  `);
}

function iniciarSistema() {
  let opcion = '';
  while (opcion !== '4') {
    mostrarMenu();
    opcion = prompt('Elija una opción: ');
    console.log();
    switch (opcion) {
      case '1':
        verListaDeAlumnos();
        break;
      case '2':
        verCalificacionesDeAlumnos();
        break;
      case '3':
        calcularPromedioDelGrupo();
        break;
      case '4':
        console.log('Saliendo del sistema...');
        break;
      default:
        console.log('Opción no válida, por favor intente de nuevo.');
    }
    console.log();
  }
}

iniciarSistema();
