//Incomplete implementation of the inquirer question class. 
//A better version of this class might be actually somewhere in the the inquirer files, but I can't find it so I made one myself.

class Question{
    constructor(type,message,name,choices){
        this.type=type;
        this.message=message
        if(choices){
            this.choices=choices;
        }
        this.name=name;
    }

    getObjectForPrompt(){
    }
}

module.exports=Question;

