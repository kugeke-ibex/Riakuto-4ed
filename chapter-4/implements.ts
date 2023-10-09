interface Shape {
  readonly name: string;
  getArea: () => number;
}

interface Quadrangle {
  sideA: number;
  sideB?: number;
  sideC?: number;
  sideD?: number;
}

class RectangleWithImplement implements Shape, Quadrangle {
    readonly name = 'rectangle';
    sideA: number;
    sideB: number;

    constructor(sideA: number, sideB: number) {
      this.sideA = sideA;
      this.sideB = sideB;
    }

    // getArea():numberでも可能。
    // アロー構文だと『オーバーロード（Overload）』ができない。
    getArea = () => this.sideA * this.sideB;
}
