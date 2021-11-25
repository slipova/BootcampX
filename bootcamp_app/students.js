const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});


//RETURNS TABLE-LIKE OBJECT
// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
//   .then(res => {
//     console.log(res.rows);
//   })
//   .catch(err => console.error('query error', err.stack));

//RETURNS A PHRASE
// pool.query(`
// SELECT students.id, students.name, cohorts.name AS cohort_name
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// GROUP BY students.id, cohorts.name
// LIMIT 5;
// `)
//   .then(res => {
//     res.rows.forEach((user) => {
//       console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
//     })
//   });

//
pool.query(`
  SELECT students.id, students.name, cohorts.name AS cohort_name
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  GROUP BY students.id, cohorts.name
  HAVING cohorts.name LIKE $1
  LIMIT $2;
  `)
  .then(res => {
    res.rows.forEach((user) => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    })
  });


