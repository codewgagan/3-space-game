
/* 
1. Introduction to Classes
2. Inheritance
3. Super
4. Extending Classes
5. Overriding Methods
6. Static Methods
7. Getters and Setters
8. Private Fields
*/
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

// 2.Drawing to canvas
// draws a red rectangle





// Load and draw an image asset

/* You load an image asset by creating an `Image` object and set its `src` property. Then you listen to the `load` event to know when it's ready to be used. The code looks like this:
*/

async function run(){
    const heroImg = await loadAsset('hero.png')
    const monsterImg = await loadAsset('monster.png')

    //1. get the canvas reference
    const canvas = document.getElementById('canvas');

    //2. set the context to 2D to draw basic shapes
    const ctx = canvas.getContext("2d");
    
    //3. fill it with the color red
    ctx.fillStyle = 'red';
    //4. and draw a rectangle with these parameters, setting location and size
    ctx.fillRect(0,0,200,200)//x,y,width,height

    ctx.drawImage(heroImg, canvas.width/2, canvas.height/2);
    ctx.drawImage(monsterImg, 0,0);

}