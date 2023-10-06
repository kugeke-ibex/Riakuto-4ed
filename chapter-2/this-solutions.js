class Person {
  constructor(name) {
    this.name = name;
  }

  greet1() {
    function doIt() {
      console.log(`1) Hi, I'm ${this.name}`);
    }
    const boundDoIt = doIt.bind(this); // 1. 関数にインスタンスのthis を束縛
    boundDoIt();
  }

  greet2() {
    function doIt() {
      console.log(`2) Hi, I'm ${this.name}`);
    }
    doIt.call(this); // 2. インスタンスのthis を渡して実行
  }

  greet3() {
    const _this = this; // 3. 変数_this に値を移し替える
    function doIt() {
      console.log(`3) Hi, I'm ${_this.name}`);
    }
    doIt();
  }

  // アロー関数は宣言時にthisがそのコンテキストに束縛される。
  // => greet4()のdoIt()内で参照されたthisの値はそのクラスのインスタンスになる。
  // アロー関数はcall()やbind()で任意のオブジェクトをthisに設定できなくなる。
  greet4() {
    const doIt = () => { // 4. アロー関数式で定義
      console.log(`4) Hi, I'm ${this.name}`);
    };
    doIt();
  }

  greet5 = () => { // 5. メソッド自身もアロー関数式で定義
    const doIt = () => {
      console.log(`5) Hi, I'm ${this.name}`);
    };
    doIt();
  }
}


const creamy = new Person('Mami');
creamy.greet1(); // 1) Hi, I'm Mami
creamy.greet2(); // 2) Hi, I'm Mami
creamy.greet3(); // 3) Hi, I'm Mami
creamy.greet4(); // 4) Hi, I'm Mami
creamy.greet5(); // 5) Hi, I'm Mami

// 主な対策
// ・this はクラス構文内でしか使わない
// ・クラス内では、コンストラクタ以外のメソッドおよびその内部関数の定義はアロー関数式で行う
