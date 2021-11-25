const { Pool } = require('pg');


const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});


// pool.query(
//   `SELECT teachers.name, cohorts.name AS cohort, COUNT(assistance_requests) as requests
// FROM teachers
// JOIN assistance_requests ON teachers.id = teacher_id
// JOIN students ON student_id  = students.id
// JOIN cohorts ON cohort_id  = cohorts.id
// WHERE cohorts.name = '${process.argv[2]}'

// GROUP BY teachers.name, cohorts.name
// ORDER BY teachers.name;
// `)
//   .then(res => {
//     res.rows.forEach((teacher) => {
//       console.log(`${teacher.cohort}: ${teacher.name}`)
//     })
//   });


pool.query(
  `SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort, COUNT(assistance_requests) as requests
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON student_id  = students.id
  JOIN cohorts ON cohort_id  = cohorts.id
  WHERE cohorts.name LIKE $1
  
  GROUP BY teachers.name, cohorts.name
  ORDER BY teachers.name
  `)
  .then(res => {
    res.rows.forEach((row) => {
      console.log(`${row.cohort}: ${row.name}`)
    })
  });

