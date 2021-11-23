
SELECT teachers.name AS teacher, cohorts.name AS cohort, COUNT(assistance_requests) as requests
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON student_id  = students.id
JOIN cohorts ON cohort_id  = cohorts.id
WHERE cohorts.name = 'JUL02'

GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;