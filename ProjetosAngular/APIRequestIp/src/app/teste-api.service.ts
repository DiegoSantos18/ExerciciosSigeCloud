import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TesteApiService {
  
  readonly url : string = "https://api.ipdata.co";
  readonly apiKey : string = "?api-key=912681f4561b56dd81f804e4b3e8b1954a27163f34c6ddd83fc67d5d";
  //?api-key=7b8944e74188e922ba058c00cca8c2fe5d66ad7ff2ec6460ecaea3a7
  constructor(private http : HttpClient) { }

  
  // Obtem localizacao pelo ip
  getLocalizacaoIp(ip: string): Observable<any> {
    return this.http.get(this.url + '/' + ip +this.apiKey);
  }
  
}
