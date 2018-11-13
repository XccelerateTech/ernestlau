========A========
CREATE TABLE stock (
    id SERIAL primary key,
    fruit_name VARCHAR(255) not null,
    description VARCHAR(255),
    taste VARCHAR(255),
    price INT
);

========B========
DROP TABLE IF EXISTS stock;

========C========
CREATE TABLE employee (
    EMPLOYEE_ID SERIAL primary key,
    FIRST_NAME VARCHAR(255),
    LAST_NAME VARCHAR(255),
    SALARY INT,
    CONTRACT_LENGTH INT
);

INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Steven','King',10000,3);
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Neena','Kochhar',8000,2);
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('David','Austin',12000,2);
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Nancy','Greenberg',3000,1);


1.
SELECT first_name, last_name FROM employee WHERE salary > 5000 AND salary < 11000;
2.
SELECT first_name, last_name FROM employee WHERE contract_length < 2;
3.
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Peter','Lee',4000,1);
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Cindy','Mimi',16000,9);
4.
UPDATE employee SET salary = 8000 WHERE first_name = 'Nancy';
UPDATE employee SET contract_length = 2 WHERE first_name = 'Nancy';
5.
SELECT * FROM employee ORDER BY salary ASC;