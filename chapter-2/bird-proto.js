function Bird(name) {
    const className = "鳥類";
    this.name = name;

    this.cry = function (sound) {
        console.log(`${this.name}が「${sound}」と鳴きました`);
    };

    this.introduce = () => {
        console.log(`私は${className}の${this.name}です。`);
    };

    return this;
}

Bird.explain = function () {
    console.log('これは鳥のクラスです');
}

function FlyableBird(name) {
    Bird.call(this, name);
    this.fly = function () {
        console.log(`${this.name}が飛びました`);
    }

    return this
}

// FlyableBird.prototype.__proto__ = Bird.prototype; 「prototype.__proto__」現在は非推奨
FlyableBird.prototype = Object.create(Bird.prototype);
// Object.getPrototypeOf(FlyableBird) <-> FlyableBird.__proto__
// Object.setPrototypeOf(FlyableBird, Object.create(Bird.prototype)) <-> FlyableBird.__proto__ = Object.create(Bird.prototype)

// console.log(Bird.prototype);                  => {}
// console.log(typeof Bird.prototype);           => object
// console.log(Bird.__proto__);                  => {}
// console.log(typeof Bird.__proto__);           => function
// console.log(Bird.__proto__.__proto__)         => [Object: null prototype] {}
// console.log(typeof Bird.__proto__.__proto__); => object

flyBird = new FlyableBird('hoge');
console.log(flyBird instanceof Bird) //       => true
// console.log(FlyableBird.prototype)         => Bird {}
// console.log(typeof FlyableBird.prototype); => object
// console.log(FlyableBird.__proto__);        => {}
// console.log(typeof FlyableBird.__proto__); => function
// console.log(Object.getOwnPropertyNames(FlyableBird.__proto__))
// =>
/*
[
  'length',      'name',
  'arguments',   'caller',
  'constructor', 'apply',
  'bind',        'call',
  'toString'
]
*/
// console.log(Object.getOwnPropertyNames(FlyableBird.prototype)) => []
