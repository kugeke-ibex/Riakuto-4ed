let friendship;

if (true) {
  const he = 'Kakeru';

  const saveHim = () => {
    console.log(`${he} is alive!`);
  };

  friendship = saveHim;
}

friendship(); // Kakeru is alive!

// JavaScript では関数のスコープは『レキシカルスコープ（Lexical Scoping）』と呼ぶ。定義時に決定され固定される。
// その為、自由変数がそれを参照するクロージャによって返され、そのクロージャが現在のスコープで生きている限り、最初の自由変数もGC に回収されず状態を保っていられる。
