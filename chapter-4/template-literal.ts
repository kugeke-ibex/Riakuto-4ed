// JavaScript のテンプレートリテラルによる文字列を型として扱う『テンプレートリテラル型（Template Literal Types）』
type DateFormat = `${number}-${number}-${number}`;

const date1: DateFormat = '2022-09-01';
const date2: DateFormat = 'Sep. 1, 2022'; // コンパイルエラー

interface MonthMap {
  [key: `month_${number}`]: string;
}

const monthMap: MonthMap = {
  month_01: 'January',
  month_02: 'Februaly',
};
monthMap.month_03 = 'March';
monthMap.four = 'April'; // コンパイルエラー
