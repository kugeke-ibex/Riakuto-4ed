class Brooch {
  pentagram = 'Silver Crystal';
}

interface Compact {
  silverCrystal: boolean;
}

class CosmicCompact implements Compact {
  silverCrystal = true;
  cosmicPower = true;
}

class CrisisCompact implements Compact {
  silverCrystal = true;
  moonChalice = true;
}

function transform(): void;
function transform(item: Brooch): void;
function transform(item: Compact): void;
function transform(item?: Brooch | Compact): void {
  if (item instanceof Brooch) {
    console.log('Moon crystal power , make up!!');
  } else if (item instanceof CosmicCompact) {
    console.log('Moon cosmic power , make up!!!');
  } else if (item instanceof CrisisCompact) {
    console.log('Moon crisis , make up!');
  } else if (!item) {
    console.log('Moon prisim power , make up!');
  } else {
    console.log('Item is fake... ');
  }
}

transform();
transform(new Brooch());
transform(new CosmicCompact());
transform(new CrisisCompact());

// 型の互換性の判定が、その名前ではなく構造的サブタイピング（Structural Subtyping）、つまり型の構造さえ合致していれば型チェックをパスする。
transform({ pentagram: '***' });
const dummyCompact = { silverCrystal: false, talisman: [{}, {}, {}] };
transform(dummyCompact);
