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
  '#IMG_POSTER'?: string;
  photo_width?: number;
  photo_height?: number;
};

export type MoviePerson = {
  '@type': 'Person';
  url: string;
  name: string;
};
export type MovieOrganization = {
  '@type': 'Organization';
  url: string;
};
export type MovieRating = {
  '@type': 'AggregateRating';
  ratingCount: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
};
export type MovieShort = {
  url: string;
  name: string;
  image: string;
  description: string;
  aggregateRating: MovieRating;
  contentRating?: string;
  genre: string[];
  datePublished: string;
  keywords: string;
  actor: MoviePerson[];
  director: MoviePerson[];
  creator: (MoviePerson | MovieOrganization)[];
  duration: string;
};
export type MovieMain = {
  cast: {
    edges: CastEdge[];
  };
  featuredReviews: {
    edges: ReviewEdge[]
  };
};
export type ReviewEdge = {
  node: ReviewItemProps
}
export type ReviewItemProps = {
  id: string;
  author: {
    nickName: string;
    userId: string;
  };
  summary: {
    originalText: string;
  };
  authorRating: number;
  submissionDate: string;
  helpfulness: {
    upVotes: number;
    downVotes: number;
  }
}
export type CastEdge = {
  node: ActorItemProps;
};
export type ActorItemProps = {
  name: {
    id: number;
    nameText: {
      text: string;
    };
    primaryImage: {
      url: string;
      width: number;
      height: number;
    };
  };
};
export type MovieProp = {
  short: MovieShort;
  main: MovieMain;
};
