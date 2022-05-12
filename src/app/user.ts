export class User {
    public id: number;
     public   FirstName: string;
     public  Mobile: number;
     public  email: string;
     public  password: string;
  constructor(id:number,username:string,usermobile:number, usermail:string,userpassword:string) {
              this.id = id;
              this.FirstName = username;
              this.Mobile = usermobile;
              this.email = usermail;
              this.password= userpassword;
            }
  }