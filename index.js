//set up the class GameObject
class GameObject{
    constructor(x,y,type){
        this.x = y;
        this.y = y;
        this.type = type;
    }
}
//this (Movable)  class will extend the GameObject's inherent class properties
class Movable extends GameObject{
    constructor(x,y,type){
        super(x,y, type);
    }

    //this movable object can be moved on the screen
    moveTo(x,y){
        this.x = x;
        this.y = y;
    }    
} 
    
//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits from the Movable class
class Hero extends Movable{
    constructor(x,y){
        super(x,y,'Hero');
    }
}
//this class, on the other hand, only inherits the GameObject properties
class Tree extends Movable{
    constructor(x,y){
        super(x,y,'Tree');
    }
}
//a hero can move... but a hero is not a movable object
//a hero is a game object
const hero = new Hero();
hero.moveTo(5,5);
console.log(hero);

//a tree can not
const tree = new Tree();