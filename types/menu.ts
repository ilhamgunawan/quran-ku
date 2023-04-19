export interface IMenu {
  url: string;
  title: string;
  icon: TMenuIcon;
}

export type TMenuIcon =
  | 'home'
  | 'quran'
  | 'quran-book'
  | 'arab-man'
  | 'bookmark'
  | 'info';
