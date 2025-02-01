const SCHOOL_CODE = ['shohoku', 'ryonan', 'kainandai'] as const;

interface School {
  id: typeof SCHOOL_CODE[number];
  name: string;
  color: string;
}

interface Player {
  id: string;
  name: string;
  schoolID: typeof SCHOOL_CODE[number];
  grade: number;
  position: string;
  height?: number;
}

export type { School, Player };
export { SCHOOL_CODE };
