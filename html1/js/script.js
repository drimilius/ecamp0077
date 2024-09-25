const students = [
    { name: 'Jonh', grade: 75 },
    { name: 'Jane', grade: 93 },
    { name: 'Samantha', grade: 90 },
    { name: 'Michael', grade: 94 },
  ];
  
  // 1. Ordenar el arreglo en orden descendente (mayor a menor) basado en su calificación
  students.sort((a, b) => b.grade - a.grade);
  console.log('Ordenado en orden descendente:', students);
  
  // 2. Revertir el arreglo
  students.reverse();
  console.log('Arreglo revertido:', students);
  
  // 3. Encontrar el primer estudiante cuya calificación es mayor a 90
  const firstStudentAbove90 = students.find(student => student.grade > 90);
  console.log('Primer estudiante con calificación mayor a 90:', firstStudentAbove90);
  
