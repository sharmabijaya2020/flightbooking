import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class FlightDetailsService {
    localStorageId = new BehaviorSubject("0");
    localStorageData = new Subject<any>();

    constructor(private http: HttpClient) { }

    setLocalStorageData(key: string, data: any): void {
        try {
            let existingData = JSON.parse(localStorage.getItem(key));
            if (!existingData) {
                existingData = [];
                existingData.push(data);
            }
            localStorage.setItem(key, JSON.stringify(existingData));
        } catch (e) {
            console.error('Error saving data to local Storage : ', e);
        }
    }

    getLocalStorageData(key: string) {
        try {
            let localData = JSON.parse(localStorage.getItem(key))
            this.localStorageData.next(localData);
            console.log(localData)
            return localData;
        } catch (e) {
            console.error('Error getting data from local storage : ', e);
            return null;
        }
    }

    setLocalstorageId(id: string) {
        this.localStorageId.next(id);
    }

    getLocalstorageId() {
        return this.localStorageId;
    }

    getLocalJSONData() {
        let getLocalJSONDataUrl: string = "/assets/json/mockdata.json";
        return this.http.get(getLocalJSONDataUrl);
    }
}