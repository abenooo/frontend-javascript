/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get a new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${newRowID}`, row);

// Update the row with an age field
const updatedRow: RowElement = { 
  firstName: 'Guillaume', 
  lastName: 'Salva', 
  age: 23 
};

// Update the row in the database
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);

// Delete the row from the database
CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);