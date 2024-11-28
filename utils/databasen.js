import * as SQLite from 'expo-sqlite';
const dbName = 'menudDb'
const tableName = 'menu'

const createDatabase = async(data) => {
  const templateObj = data[0]
  
  const columns = Object.keys(templateObj).map(key => {
    const type = typeof templateObj[key];
    switch (type) {
        case 'number':
            return `${key} INTEGER`;
        case 'string':
            return `${key} TEXT`;
        case 'boolean':
            return `${key} BOOLEAN`;
        default:
            return `${key} TEXT`;
    }}).join(', ');
  
  //console.log(`Columns ${columns}`);
  //console.log(`Creating database ${dbName}`);

  console.log('Opening database...');
  let db;
  try {
    db = await SQLite.openDatabaseAsync(dbName);
  } catch (error) {
    console.error('Failed to open database', error);
    throw error;
  }

  console.log('Creating table...');
  try {
    await db.execAsync(
      `PRAGMA journal_mode = WAL;
      DROP TABLE IF EXISTS ${tableName};
      CREATE TABLE IF NOT EXISTS ${tableName} (${columns});`,
    );
  } catch (error) {
    console.error('Failed to execute database commands', error);
    throw error;
  }

  console.log('Inserting data...');
  const insertPromises = data.map(item => {
    const columns = Object.keys(item).join(', ');
    const values = Object.values(item).map(value => 
      typeof value === 'string' ? `'${value}'` : value).join(', ');
    return db.execAsync(
      `INSERT INTO ${tableName} (${columns}) VALUES (${values});`
    );
  });

  try {
    await Promise.all(insertPromises);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Failed to insert data', error);
    throw error;
  }

  let result;
  try {
    const [{ count }] = await db.getAllAsync('SELECT COUNT(*) as count FROM menu');
    console.log(`Total records: ${count}`);
  } catch (error) {
    console.error('Failed to retrieve record count', error);
    throw error;
  }
}

const getCategories = async () => {
  let db;
  try {
    db = await SQLite.openDatabaseAsync(dbName);
  } catch (error) {
    console.error('Failed to open database', error);
    throw error;
  }

  const query = `SELECT DISTINCT category FROM ${tableName}`;
  let results;
  try {
    results = await db.getAllAsync(query);
    console.log('Categories retrieved successfully', results);
  } catch (error) {
    console.error('Failed to retrieve categories', error);
    throw error;
  }

  const categories = results.map(row => {
    const category = row.category;
    return typeof category === 'string' ? category.charAt(0).toUpperCase() + category.slice(1) : category;
  });

  return categories;
};

const retrieveRecords = async (categories, searchItem) => {
  let db;
  try {
    db = await SQLite.openDatabaseAsync(dbName);
  } catch (error) {
    console.error('Failed to open database', error);
    throw error;
  }

  let query = `SELECT * FROM ${tableName}`;
  const conditions = [];

  if (categories.length > 0) {
    const categoryString = categories.map(category => `'${category.toLowerCase()}'`).join(', ');
    conditions.push(`category IN (${categoryString})`);
  }

  if (searchItem) {
    conditions.push(`(LOWER(title) LIKE LOWER('%${searchItem}%') OR LOWER(description) LIKE LOWER('%${searchItem}%'))`);
  }

  if (conditions.length > 0) {
    query += ` WHERE ${conditions.join(' AND ')}`;
  }
  
  //console.log(query);

  let results;
  try {
    results = await db.getAllAsync(query);
    //console.log('Records retrieved successfully', results);
  } catch (error) {
    console.error('Failed to retrieve records', error);
    throw error;
  }

  return results;
};

export { createDatabase, retrieveRecords, getCategories };