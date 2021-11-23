-- SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
-- FROM teachers
-- JOIN assistance_requests ON teachers.id = teacher_id
-- JOIN students ON students.id = student_id
-- JOIN cohorts ON cohorts.id = cohort_id
-- WHERE cohorts.name = 'JUL02'
-- ORDER BY teacher;


-- -- all teachers all cohorts
-- SELECT DISTINCT teachers.name AS teacher, COUNT(assistance_requests) as requests
-- FROM teachers
-- JOIN assistance_requests ON teachers.id = teacher_id
-- GROUP BY teachers.name
-- ORDER BY teacher;



SELECT teachers.name AS teacher, cohorts.name AS cohort, COUNT(assistance_requests) as requests
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON student_id  = students.id
JOIN cohorts ON cohort_id  = cohorts.id
WHERE cohorts.name = 'JUL02'
-- GROUP BY cohorts.name
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;