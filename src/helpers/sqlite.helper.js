import SQLite from 'react-native-sqlite-storage';

var db = null;
export default class SqliteHelper {

  static okCallback = () => {
  }
  static errorCallback = (error) => {
    alert('errorCallback: ' +  error)
  }
  static openDB() {
    db = SQLite.openDatabase({name: "db_doctor", location: 1}, this.okCallback, this.errorCallback);
    return db;
  }
  static async query(sql, params) {
    return await new Promise(function (resolve, reject) {
      db.transaction(tx => {
        tx.executeSql(sql, params || [], (tx, results) => {
          resolve(results);
        });
      });
    });
  };
}