const fs = require('fs');
const CSVReadableStream = require('csv-reader');
const pg = require('pg');

const config = {
    user: 'admin',
    database: 'Chung',
    password: 'test',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

const client = new pg.Client(config);
const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8');

async function commands() {
    await client.connect();

    let rows = [];

    inputStream.pipe(CSVReadableStream({ parsedNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async (row) => {
            rows.push(row);
        })
        .on('end', async (data) => {
            await client.query('BEGIN');
            try {
                for (let row of rows) {
                    let [action, name, quanity] = row;
                    if (action === 'SELL') {
                        let result = await client.query(`
                    SELECT quantity FROM stock INNER JOIN citrus on stock.citrus_id = citrus.id
                    WHERE citrus.name = $1 GROUP BY quantity;
                    `, [name]);
                        if (result.rows[0].quanity < quanity) {
                            throw new Error(`Not enough for for ${name}!`);
                        }

                    }
                    if (action === 'BUY') {
                        let result = await client.query(`
                    UPDATE stock SET quantity = quantity + $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2`, [quanity, name]);
                        console.log(`You have bought ${quanity} ${name}'s!`);
                    } else {
                        let result = await client.query(`
                    UPDATE stock SET quantity = quantity - $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2`, [quanity, name]);
                        console.log(`${quanity} ${name} sold!`);
                    }
                }
                await client.query('COMMIT');
            } catch (e) {
                await client.query('ROLLBACK')

            }
        });

}

commands();