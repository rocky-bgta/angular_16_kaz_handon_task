import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Ensures the service is a singleton and available application-wide
})
export class SharedDataService {
  // Initial data
  private dataSource = new BehaviorSubject<string>('Initial Data');
  currentData = this.dataSource.asObservable();

  constructor() {}

  // Method to update the data
  updateData(newData: string) {
    this.dataSource.next(newData);
  }
}
