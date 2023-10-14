import {Species, Resident, isCanine} from './exports';

// TypeScript は次の順にモジュールを探索していく

// 1. chapter-4/exports.ts
// 2. chapter-4/exports.tsx
// 3. chapter-4/exports.d.ts
// 4. chapter-4/exports/package.json のtypes またはtypings プロパティで設定されている型定義ファイル
// 5. chapter-4/exports/index.ts
// 6. chapter-4/exports/index.tsx
// 7. chapter-4/exports/index.d.ts
