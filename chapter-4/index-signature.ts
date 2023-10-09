interface Status {
  [parameter: string]: number;
}

// [key name: key type] という記法でキーの型を縛ってる方法を『インデックスシグネチャ（Index Signature）』という
// ただし、job: 'maze'のような違う方のプロパティが設定できなくなる。
const myStatus: Status = {
  level: 22,
  experience: 3058,
  maxHP: 156,
  maxMP: 174,
  attack: 39,
  defense: 25,
};
