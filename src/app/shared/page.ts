export class Page<T> {
  content: T[];
  first: boolean;
  last: boolean;
  numberOfElements: number;
  size: number;
  sort: string;
  totalElements: number;
  totalPages: number;
}
