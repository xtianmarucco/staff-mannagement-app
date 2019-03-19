export class Member {
    public name: string;
    public lastName: string;
    public age: string;
    public prevExp: string;
    public nationality: string;
    public position: string;
    public academicLev: string;
    public skills: string;
    public description: string;
    public imgPath: string;



    constructor (name: string, lastName: string, age: string, prevExp: string,
        nationality: string, position: string, academicLev: string, skills: string,
        description: string, imgPath: string, ) 
        {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.prevExp = prevExp;
        this.nationality = nationality;
        this.position = position;
        this.academicLev = academicLev;
        this.skills = skills;
        this.description = description;
        this.imgPath = imgPath;

    }
}