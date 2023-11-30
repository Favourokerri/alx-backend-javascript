# JavaScript Classes Quick Readme

## Introduction

This repository explores JavaScript classes, a feature introduced in ECMAScript 6 (ES6) for creating reusable, object-oriented code.

## Key Points

- **Declaring Classes**: Use the `class` keyword to declare a class.

```javascript
class Animal {
  // class body
}
```

- **Class Methods**: Define functions within a class for behavior.

```javascript
class Dog {
  bark() {
    console.log('Woof!');
  }
}
```

- **Constructor Method**: The `constructor` initializes object properties.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

- **Inheritance**: Use `extends` to create a subclass.

```javascript
class Cat extends Animal {
  purr() {
    console.log('Purr...');
  }
}
```

- **Getters and Setters**: Control property access.

```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value > 0 ? value : 1;
  }
}
```

- **Static Methods**: Associated with the class, not instances.

```javascript
class MathUtils {
  static square(x) {
    return x * x;
  }
}
```

## Example

Explore the [examples](examples/) directory for detailed use cases.

## Best Practices

- Model real-world entities with classes.
- Prefer composition over inheritance.
  
Feel free to dive into the code and experiment!
