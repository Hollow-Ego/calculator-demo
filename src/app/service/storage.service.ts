import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  updateStorage(key: string, value: any): void {
    const parsedValue = JSON.stringify(value);
    localStorage.setItem(key, parsedValue);
  }

  getFromStorage(key: string) {
    return localStorage.getItem(key);
  }

  getAllRecords(key: string) {
    const records: string = '[]';
    const loadedRecords = this.getFromStorage(key);
    return loadedRecords ? loadedRecords : records;
  }
}
