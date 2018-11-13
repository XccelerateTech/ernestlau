=========A=========
CREATE TABLE stock (
    id SERIAL primary key,
    quantity VARCHAR(255),
    price INT,
    citrus_id INT
);

INSERT INTO stock (quantity,price,citrus_id) VALUES (33,25,1);
INSERT INTO stock (quantity,price,citrus_id) VALUES (50,15,2);
INSERT INTO stock (quantity,price,citrus_id) VALUES (10,35,3);
INSERT INTO stock (quantity,price,citrus_id) VALUES (0,20,4);

SELECT citrus.name AS citrus_name, citrus.color AS citrus_color, stock.quantity AS stock_quantity
FROM citrus
JOIN stock
ON citrus.id = stock.citrus_id WHERE citrus.color = 'orange' ;

=========B========
SELECT citrus.*, stock.quantity, stock.price FROM citrus LEFT OUTER JOIN stock ON citrus.id = stock.citrus_id order by id;

=========C========
--Init lemon quantity to make sell process fail --
UPDATE stock 
SET quantity = 9
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name = 'lemon';
--"BUY", "lemon",20 --
BEGIN;

UPDATE stock 
SET quantity = quantity+20
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name = 'lemon';
--"SELL", "lemon",30--
UPDATE stock 
SET quantity = pk.quantity-30
FROM (SELECT * FROM stock,citrus WHERE quantity > 30 AND stock.citrus_id = citrus.id AND citrus.name = 'lemon') AS pk ,citrus WHERE stock.citrus_id = citrus.id AND citrus.name = 'lemon';

ROLLBACK;
--(If UPDATE = 0, it means fail)--

--"BUY" , "orange",40--
UPDATE stock 
SET quantity = quantity+40
FROM citrus
WHERE stock.citrus_id = citrus.id AND citrus.name = 'orange';

--"SELL", "orange",20--
UPDATE stock 
SET quantity = pk.quantity-20
FROM (SELECT * FROM stock,citrus WHERE quantity > 20 AND stock.citrus_id = citrus.id AND citrus.name = 'orange') AS pk ,citrus WHERE stock.citrus_id = citrus.id AND citrus.name = 'orange';

COMMIT;
---------------------------------
@@EXPAMPLE

SELECT citrus.name, COUNT(*) FROM stock
JOIN citrus
ON stock.citrus_id = citrus.id
GROUP BY citrus.id;