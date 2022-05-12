import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

export class Employee {
    public _id: string;
    public name: string;
    public mobile: string;
    public email: string;
   

    constructor(id: string, empname: string, empmobile: string, empmail: string) {
        this._id = id;
        this.name = empname;
        this.mobile = empmobile;
        this.email = empmail;
    
    }
}