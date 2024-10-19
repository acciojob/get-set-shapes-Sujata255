// Rectangle class definition
class Rectangle {
  constructor(width, height) {
    // Constructor accepts width and height
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class extends Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Call Rectangle constructor with both width and height as 'side'
    super(side, side);
  }

  // Method to calculate perimeter of square
  getPerimeter() {
    return 4 * this.width; // Since width and height are the same
  }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
