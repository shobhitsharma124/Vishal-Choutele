
export class Appointment{

    public fname :String ; 
    public lname : String ; 
    public street : String ; 
    public city : String ; 
    public country : String ; 
    public state : String ; 
    public pinCode : number ; 
    public email : String ; 
    public age : number ; 
    public mob : number ; 
    public Bfname : String ; 
    public Blname : String ; 
    public s_package : number;
    public trainer : String;
    public therapist : String ;
    public quote : String ;
    

    constructor( 
        fname :String , 
        lname : String , 
        city : String , 
        s_package : number , 
        trainer : String ,
        mob : number ,
        street : String ,
        country : String,
        state : String,
        pinCode : number,
        email : String,
        age : number,
        Bfname : String,
        Blname : String ,
        therapist : String ,
        quote : String){

        this.fname = fname ; 
        this.lname = lname ; 
        this.city = city ; 
        this.s_package = s_package;
        this.trainer = trainer ;
        this.mob = mob ;
        this.Bfname=Bfname;
        this.Blname=Blname;
        this.state = state;
        this.therapist=therapist;
        this.street=street;
        this.country=country ;
        this.age=age;
        this.quote=quote;
        this.pinCode=pinCode;
        this.email = email;

    }
    
}
