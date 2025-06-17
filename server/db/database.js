import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Для поддержки __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к базе данных
const dbPath = path.resolve(__dirname, 'database.sqlite');

// Открываем соединение
const db = new Database(dbPath);

// Экспортируем как промис-подобный интерфейс
const dbPromise = Promise.resolve(db);

export default dbPromise;