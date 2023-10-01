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

FlyableBird.prototype.__proto__ = Bird.prototype;

// console.log(typeof Bird.prototype); => object
// console.log(typeof Bird.__proto__); => function
// console.log(typeof Bird.__proto__.__proto__); => object