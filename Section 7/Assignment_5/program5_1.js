// Program 5_1         COP2801
// Michael Napoli      2275778
/*
    Write a Rectangle class with the following methods.

    constructor: (*Note the contructors are not regular methods.)
        Input parameters: x, y, width, height
    toString:
        Input parameter: none
        Return value: string
        Operation: displays the Rectangle instance in string of form (x, y, width, height) 
    shift:
        Input parameters: changeInX, changeInY
        Return value: None
        Operation: change the x and y coordinates of the given Rectangle instance 
    offset:
        Input parameters: changeInX, changeInY.
        Return value: instance of Rectangle.
        Operation: create a new Rectangle instance which is offset from the given instance 
                   in x and y coordinates by changeInX and changeInY respectively. 

Test your new class with the following code:

    r1 = new Rectangle(10, 20, 30, 40);
    console.log(r1.toString());
    r1.shift(-10, -20)
    console.log(r1.toString());
    r2 = r1.offset(100, 100);
    console.log(r1.toString());
    console.log(r2.toString());
*/

// This is the class
class Rectangle {
    // constructor function for Rectangle class
    constructor(x, y, width, height){
        this.x= x;
        this.y= y;
        this.width= width;
        this.height= height;
    }
    // toString method for returning string
    toString() {
        return 'x= ' + this.x + ', y= ' + this.y + ', width= ' + this.width + ', height= ' + this.height;
    }
    // shift method for shifting the current rectangle
    shift(changeInX, changeInY){
        this.x = this.x + changeInX;
        this.y = this.y + changeInY;
        return;
    }
    // offset method for creating new rectangle offset from the previous one
    offset(changeInX, changeInY){
        return new Rectangle(this.x+changeInX, this.y+changeInY, this.width, this.height );
    }  
}

// test code
r1 = new Rectangle(10, 20, 30, 40);
console.log(r1.toString());
r1.shift(-10, -20);
console.log(r1.toString());
r2 = r1.offset(100, 100);
console.log(r1.toString());
console.log(r2.toString());