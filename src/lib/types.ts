export type PromptRow = {
  id: number;
  chapter: string;
  section: string;
  page: number;
  prompt: string;
};

export type StoreAd = {
  name: string;
  saleUrl: string;
  lectureUrl: string;
};

export type EventAd = {
  title: string;
  url: string;
};

export type AdData = {
  stores: StoreAd[];
  events: EventAd[];
};
