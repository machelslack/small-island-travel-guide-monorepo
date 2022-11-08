import { Database } from 'sqlite3';
import model from '../model';
export const database = new Database('small-island-travel-guide-database.db', (err) => {
    if (err) {
        throw Error();
    }
});
export const createTable = ({ tableName, databaseClient }) => {
    new Promise((resolve, reject) => {
        databaseClient.run(`CREATE TABLE IF NOT EXISTS ${tableName} ${model[tableName]}`, (err) => {
            if (err) {
                reject(err.message);
            }
            resolve(databaseClient);
        });
    });
};
export const closeDatabase = (databaseClient) => {
    new Promise((resolve, reject) => {
        databaseClient.close((err) => {
            if (err) {
                reject(err.message);
            }
            resolve(databaseClient);
        });
    });
};
//# sourceMappingURL=index.js.map