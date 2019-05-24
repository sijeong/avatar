export interface Notice {
  id: string;
  number: number;
  title: string;
  content: string;
  modified: string;
  view: number;
  cat1: string;
  cat2: string;
  readCount: number;
}

export const cat1 = ['animal', 'plant', 'virus'];
export const cat2 = [
  ['Tiger', 'Lion', 'Human', 'Cat', 'Dog'],
  ['Pine', 'Rose', 'Potato', 'Sun Flower'],
  ['Influenza A' ,'Influenza B', 'Influenza C', 'Influenza D']
];
