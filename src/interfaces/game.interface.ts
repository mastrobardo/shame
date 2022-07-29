export interface IGame {
  id: string;
  name: string;
  tags: Array<string>;
  provider: string;
  gameType: string;
  parentRef: any;
  styles?: React.CSSProperties;
  colorIndex: number;
}


