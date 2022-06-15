class Cylinder {
    constructor(height, radius){
        this.height = height,
        this.radius = radius
    }
    calculateVolume (){
        return parseFloat((this.radius ** 2 * this.height * Math.PI).toFixed(4))
    }
}

var cyl1 = new Cylinder( 47, 1)
console.log(cyl1) 
console.log(cyl1.calculateVolume())
