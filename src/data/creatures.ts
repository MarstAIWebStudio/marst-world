
export type CreatureElement = "FLAME" | "AQUA" | "NATURE" | "STORM" | "VOID";

export interface CreatureDefinition {
  id: string;
  name: string;
  element: CreatureElement;
  rarity: number;
  color: number;
  secondaryColor: number;
  basePower: number;
  description: string;
}

export const CREATURES: CreatureDefinition[] = [
  {
    id: "lumino",
    name: "루미노",
    element: "STORM",
    rarity: 1,
    color: 0x60eaff,
    secondaryColor: 0x2868ff,
    basePower: 12,
    description: "공기 중의 전기를 모으는 작은 빛의 생명체."
  },
  {
    id: "mossling",
    name: "모슬링",
    element: "NATURE",
    rarity: 1,
    color: 0x7cff91,
    secondaryColor: 0x198e58,
    basePower: 15,
    description: "풀과 나무가 있는 장소를 좋아한다."
  },
  {
    id: "emberon",
    name: "엠버론",
    element: "FLAME",
    rarity: 2,
    color: 0xff9b55,
    secondaryColor: 0xe53b32,
    basePower: 28,
    description: "몸속에 작은 불꽃을 품고 있는 생명체."
  },
  {
    id: "aquaphin",
    name: "아쿠아핀",
    element: "AQUA",
    rarity: 2,
    color: 0x65bfff,
    secondaryColor: 0x304dff,
    basePower: 25,
    description: "물가에서 반짝이는 흔적을 남긴다."
  },
  {
    id: "noctis",
    name: "녹티스",
    element: "VOID",
    rarity: 5,
    color: 0xc39aff,
    secondaryColor: 0x482078,
    basePower: 85,
    description: "드물게 관측되는 미지의 생명체."
  }
];
