class Square extends Rectangle {
  // Rectangleのnameプロパティのreadonly修飾子を外す必要がある。
  readonly name = 'square';
  side: number;

  constructor(side: number) {
    super(side, side);
  }
}
