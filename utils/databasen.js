import { enablePromise, openDatabase } from 'react-native-sqlite-storage';

enablePromise(true);

const connectToDatabase = async () => {
  return openDatabase(
    { name: 'example.db', location: 'default' },
    () => { console.log("Database opened") },
    (error) => { console.error("Error: ", error) }
  );
}

const createTables = async (db) => {
    const userPreferencesQuery = `
      CREATE TABLE IF NOT EXISTS UserPreferences (
        id INTEGER DEFAULT 1,
        colorPreference TEXT,
        languagePreference TEXT,
        PRIMARY KEY(id)
      );
    `;
    const contactsQuery = `
      CREATE TABLE IF NOT EXISTS Contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        name TEXT,
        phoneNumber TEXT
      );
    `;
    try {
      await db.executeSql(userPreferencesQuery);
      await db.executeSql(contactsQuery);
    } catch (error) {
      console.error("Failed to create tables: ", error);
    }
  };

  export { connectToDatabase, createTables };