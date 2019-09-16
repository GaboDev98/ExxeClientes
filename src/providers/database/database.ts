// Default components
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatabaseProvider {

  // Donde se guarda una referencia a la base de datos
  private database: SQLiteObject;
  // Sirve para determinar cuando está lista la base de datos
  private dbReady = new BehaviorSubject<boolean>(false);

  constructor(
    private sqlite: SQLite
  ) { }

  createDatabase() {
    // Creación de la base de datos local
    this.sqlite.create({
      name: 'solex_clientes',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.database = db;
      // Creación de tablas
      this.createTables().then(() => {
        // Informamos que la BD ya esta lista para usarse
        this.dbReady.next(true);
      });
    });
  }

  createTables() {
    let sql = `CREATE TABLE IF NOT EXISTS cities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT,
      name TEXT,
      department TEXT
    );`;
    return this.database.executeSql(sql, [])
    .then(res => console.log('Executed SQL'))
    .catch(e => console.log(e));
  }

  private isReady() {
    return new Promise((resolve, reject) => {
      // Si isReady devuelve verdadero, resolvemos la promesa
      if (this.dbReady.getValue()) {
        resolve();
      }
      // Si no nos subscribimos al BehaviorSubject a que la bd esté lista y se resuelva la promesa 
      else {
        this.dbReady.subscribe((ready) => {
          if (ready) {
            resolve();
          }
        });
      }
    });
  }

  addCity(code: string, name: string, department: string) {
    // Verificamos que la base de datos este lista
    return this.isReady().then(() => {
      let sql = 'INSERT INTO cities(code, name, department) VALUES(?,?,?)';
      return this.database.executeSql(sql, [code, name, department]);
    });
  }

  getCities() {
    // Verificamos que la base de datos este lista
    return this.isReady().then(() => {
      return this.database.executeSql("SELECT * FROM cities", [])
      .then((data) => {
        let cities = [];
        for (let i = 0; i < data.rows.length; i++) {
          cities.push(data.rows.item(i));
        }
        return cities;
      });
    });
  }

}
