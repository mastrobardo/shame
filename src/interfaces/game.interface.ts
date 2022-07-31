export interface IGame {
  id: string;
  name: string;
  tags: Array<string>;
  splicedTags?:Array<string>;
  provider: string;
  gameType: string;
  styles?: React.CSSProperties;
  colorIndex: number;
}


