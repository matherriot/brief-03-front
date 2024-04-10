export interface IThreadsData {
  iat:     number;
  threads: Thread[];
  length:  number;
}

export interface Thread {
  id:           string;
  title:        string;
  subTitle:     string;
  base64Banner: string;
  desc:         string;
  price:        number;
  userId:       string;
}
