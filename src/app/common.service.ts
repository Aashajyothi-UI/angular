import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
 

  baseUrl:any = environment.baseURL;
  baseUrl1:any = environment.loginurl;

  constructor(private http:HttpClient) { }

getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>(`${this.baseUrl1}`);
}
postUser(data: any) {
  return this.http.post<User[]>(this.baseUrl1, data).pipe(
    map((res: any) => { return res; }))
}
updateUser( id: number, data: any) {
  return this.http.put(this.baseUrl1 +'/' + id, data).pipe(
    map((res: any) => { return res; }))
}
getOneEmployee(id: number) {
  return this.http.get<User[]>(`${this.baseUrl1}/${id}`).pipe(
    map((res: any) => { return res; }))
}
deleteUser(id: number) {
  return this.http.delete<User[]>(`${this.baseUrl1}/${id}`).pipe(
    map((res: any) => { return res; }))
}


// EMPLOYEE SERVICE
getAllEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>(`${this.baseUrl}`);
}
postEmployee(data: any) {
  return this.http.post<Employee[]>(this.baseUrl, data).pipe(
    map((res: any) => { return res; }))
}
updateemp( _id: string, data: any) {
  return this.http.put(this.baseUrl +'/' + _id, data).pipe(
    map((res: any) => { return res; }))
}
getOneEmp(_id: string) {
  return this.http.get<User[]>(`${this.baseUrl}/${_id}`).pipe(
    map((res: any) => { return res; }))
}
deleteemp(_id: string) {
  return this.http.delete<User[]>(`${this.baseUrl}/${_id}`).pipe(
    map((res: any) => { return res; }))
}


}
