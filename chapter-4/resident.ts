type Species2 = 'rabbit' | 'bear' | 'fox' | 'dog';
class Resident {
  name = '';
  age = 0;
  species: Species2 | null = null;
}

export type { Species2, Resident };
