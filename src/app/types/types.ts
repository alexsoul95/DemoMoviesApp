import {ru} from '../localization/ru';

export type LanguageType = {
  title: string;
  key: string;
  dictionary: typeof ru;
};

export type MovieItemProps = {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  photo_width: number;
  photo_height: number;
};
