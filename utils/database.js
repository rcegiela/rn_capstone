import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('menu.db');

const createTable = async (tableName, obj) => {
    const columns = Object.keys(obj).map(key => {
        const type = typeof obj[key];
        switch (type) {
            case 'number':
                return `${key} INTEGER`;
            case 'string':
                return `${key} TEXT`;
            case 'boolean':
                return `${key} BOOLEAN`;
            default:
                return `${key} TEXT`;
        }
    }).join(', ');

    console.log(`Creating table ${tableName} with columns ${columns}`);
    return new Promise((resolve, reject) => {
        db.transaction(
          tx => {
            tx.executeSql(
              `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, ${columns});`,
              [],
              () => { 
                console.log(`Table ${tableName} created successfully`); 
                resolve();
              },
              (tx, error) => { 
                console.log(`Error creating table ${tableName}`, error); 
                reject(error);
              }
            );
          }
        );
    });
};

/* const insertRecords = async (tableName, records) => {
    const keys = Object.keys(records[0]);r
    const columns = keys.join(', ');
    const placeholders = keys.map(() => '?').join(', ');

    return db.transaction(tx => {
        records.forEach(record => {
            const values = keys.map(key => record[key]);
            tx.executeSql(
                `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders});`,
                values,
                () => { console.log('Record inserted successfully'); },
                (tx, error) => { console.log('Error inserting record', error); }
            );
        });
    });
};

const fetchAllRecords = async (tableName) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM ${tableName};`,
                [],
                (_, { rows }) => { resolve(rows._array); },
                (tx, error) => { reject(error); }
            );
        });
    });
};

export { createTable, insertRecords, fetchAllRecords }; */

export { createTable };