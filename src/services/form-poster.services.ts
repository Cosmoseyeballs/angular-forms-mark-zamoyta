import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Employee } from "app/models/employee.model";
import  "rxjs/Rx";
import { Observable } from "rxjs/Observable";


@Injectable()
export class FormPoster{

    constructor(private http:Http){

    }

    getLanguages():Observable<any>{
        return this.http.get('http://localhost:3100/get-languages')
        .map(this.extractLanguages)
        .catch(this.handleError)
    }

    postEmployeeForm(employee:Employee):Observable<any>{
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers})

        return this.http.post('http://localhost:3100/postemployee',body,options)
        .map(this.extractData)
        .catch(this.handleError)
    }
    extractData(res: Response){
        let body = res.json();
        return body.fields || {};
    }
    extractLanguages(res: Response){
        let body = res.json();
        return body.data || {};
    }
    handleError(error:any){
        console.log("post error ", error);
        return Observable.throw(error.statusText)
    }
}