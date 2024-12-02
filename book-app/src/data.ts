export type Book = {
  title: string;
  author: string;
  publicationDate: string | Date;
  category: 'crime' | 'romance' | 'biography';
  related: string[];
};

export const books: Book[] = [
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    publicationDate: "2005-08-01",
    category: "crime",
    related: ["Gone Girl", "In the Woods"],
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    publicationDate: "2012-05-24",
    category: "crime",
    related: ["The Girl with the Dragon Tattoo", "The Silent Patient"],
  },
  {
    title: "In the Woods",
    author: "Tana French",
    publicationDate: "2007-05-17",
    category: "crime",
    related: ["The Girl with the Dragon Tattoo", "The Likeness"]
  },
  {
    title: "The Likeness",
    author: "Tana French",
    publicationDate: "2008-05-21",
    category: "crime",
    related: ["In the Woods", "Big Little Lies"]
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    publicationDate: "2019-02-05",
    category: "crime",
    related: ["Gone Girl", "Sharp Objects"]
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    publicationDate: "2011-10-24",
    category: "biography",
    related: ["Becoming", "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"]
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    publicationDate: "2018-11-13",
    category: "biography",
    related: ["Steve Jobs", "Educated"]
  },
  {
    title: "Educated",
    author: "Tara Westover",
    publicationDate: "2018-02-18",
    category: "biography",
    related: ["Becoming", "The Glass Castle"]
  },
  {
    title: "The Glass Castle",
    author: "Jeannette Walls",
    publicationDate: "2005-03-01",
    category: "biography",
    related: ["Educated", "Wild"]
  },
  {
    title: "Wild",
    author: "Cheryl Strayed",
    publicationDate: "2012-03-20",
    category: "biography",
    related: ["The Glass Castle", "Steve Jobs"]
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationDate: "1813-01-28",
    category: "romance",
    related: ["Sense and Sensibility", "The Notebook"]
  },
  {
    title: "Sense and Sensibility",
    author: "Jane Austen",
    publicationDate: "1811-10-30",
    category: "romance",
    related: ["Pride and Prejudice", "Emma"]
  },
  {
    title: "The Notebook",
    author: "Nicholas Sparks",
    publicationDate: "1996-10-01",
    category: "romance",
    related: ["Pride and Prejudice", "Me Before You"]
  },
  {
    title: "Me Before You",
    author: "Jojo Moyes",
    publicationDate: "2012-01-05",
    category: "romance",
    related: ["The Notebook", "After You"]
  },
  {
    title: "After You",
    author: "Jojo Moyes",
    publicationDate: "2015-09-29",
    category: "romance",
    related: ["Me Before You", "The Rosie Project"]
  },
  {
    title: "The Rosie Project",
    author: "Graeme Simsion",
    publicationDate: "2013-01-30",
    category: "romance",
    related: ["After You", "The Rosie Effect"]
  },
  {
    title: "The Rosie Effect",
    author: "Graeme Simsion",
    publicationDate: "2014-09-24",
    category: "romance",
    related: ["The Rosie Project", "The Hating Game"]
  },
  {
    title: "The Hating Game",
    author: "Sally Thorne",
    publicationDate: "2016-08-09",
    category: "romance",
    related: ["The Rosie Effect", "The Kiss Quotient"]
  },
  {
    title: "The Kiss Quotient",
    author: "Helen Hoang",
    publicationDate: "2018-06-05",
    category: "romance",
    related: ["The Hating Game", "The Bride Test"]
  },
  {
    title: "The Bride Test",
    author: "Helen Hoang",
    publicationDate: "2019-05-07",
    category: "romance",
    related: ["The Kiss Quotient", "The Wedding Date"]
  },
  {
    title: "The Wedding Date",
    author: "Jasmine Guillory",
    publicationDate: "2018-01-30",
    category: "romance",
    related: ["The Bride Test", "The Proposal"]
  },
  {
    title: "The Proposal",
    author: "Jasmine Guillory",
    publicationDate: "2018-10-30",
    category: "romance",
    related: ["The Wedding Date", "Royal Holiday"]
  },
  {
    title: "Royal Holiday",
    author: "Jasmine Guillory",
    publicationDate: "2019-10-01",
    category: "romance",
    related: ["The Proposal", "Party of Two"]
  },
  {
    title: "Party of Two",
    author: "Jasmine Guillory",
    publicationDate: "2020-06-23",
    category: "romance",
    related: ["Royal Holiday", "The Hating Game"]
  },
  {
    title: "Sharp Objects",
    author: "Gillian Flynn",
    publicationDate: "2006-09-26",
    category: "crime",
    related: ["The Silent Patient", "Gone Girl"]
  }
];
