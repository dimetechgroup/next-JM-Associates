interface DefaultSectionInterface {
  _id: string;
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
  image?: Photo;
  start_date?: string;
  _created?: string;
  end_date?: string;
  Icon?: string;
  document:{path: string};
  location?: string;
  Attachment:{path: string};
}