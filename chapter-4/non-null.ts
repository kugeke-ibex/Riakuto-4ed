interface Resident {
  familyName: string;
  lastName: string;
  mom?: Resident;
}

const getMomName = (resident: Resident): string => resident.mom.lastName;
// プロパティアクセスの前に「！」を付けると、「非Null アサーション演算子（Non-Null Assertion Operator）」といった、nullもしくはundefinedが入らないと強制的にコンパイラチェックを無視することができるが、プロダクトコードには使うでべきではない。
// const getMomName = (resident: Resident): string => resident.mom!.lastName;

const patty = { familyName: 'Hope-Rabbit', lastName: 'patty' };
console.log(getMomName(patty));
