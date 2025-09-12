export interface JobsFeed {
  title: string;
  feed_url: string;
  next_url: string;
  description: string;
  id: string;
  items: FeedItem[];
}

export interface FeedItem {
  id: string;
  url: string;
  title: string;
  content_text: string;
  _feed_entry: {
    uuid: string;
    status: string;
    title: string;
    businessName: string;
    municipal: string;
  };
}

export interface JobDetails {
  uuid: string;
  ad_content: AdContent;
}

export interface AdContent {
  workLocations: WorkLocation[];
  contactList: Contact[];
  title: string;
  description: string;
  employer: {
    name: string;
    description: string;
    homepage: string;
  };
}

interface WorkLocation {
  country: string;
  address: string;
  city: string;
}

interface Contact {
  name: string;
  email: string;
  phone: string;
}
