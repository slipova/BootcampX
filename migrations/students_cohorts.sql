CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  start_date DATE,
  end_date DATE
);


CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  phone VARCHAR(32),
  github TEXT,
  start_date DATE,
  end_date DATE,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
);