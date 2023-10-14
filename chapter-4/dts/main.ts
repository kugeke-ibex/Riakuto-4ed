import { transform, Brooch, CosmicCompact, CrisisCompact } from './sailormoon-transform';
transform();
transform(new Brooch());
transform(new CosmicCompact());
transform(new CrisisCompact());

// vite-env.d.tsファイルを参照。
// 『トリプルスラッシュ・ディレクティブ（Triple-Slash Directive）』
// コンパイルプロセスに介入して任意の指示をコンパイラに与える
// <reference /> というXML のシングルタグで、コンパイル時にこの情報を参照する
// 属性には追加ファイルを含めるためのpath や既存の組み込みライブラリを含めるためのlib なんかがある
// type 属性でコンパイル時にnode_modules/vite/client.d.ts に記述されてる型情報を参照するように指示
// /// <reference types="vite/client" />
