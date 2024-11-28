const createDB = async(templateObj) => {
  const dbName = 'menuDb'
  const tableName = 'menu'
  const db = await SQLite.openDatabaseAsync(dbName);
  
  const columns = Object.keys(templateObj).map(key => {
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
    }}).join(', ');

  await db.execAsync(
    `PRAGMA journal_mode = WAL;`
    `DROP TABLE IF EXISTS ${tableName};`
    `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, ${columns});`,
    );

    const columnQuery = await db.getAllAsync(`PRAGMA table_info(${tableName});`);
    console.log(columnQuery);
}

export { createDB };