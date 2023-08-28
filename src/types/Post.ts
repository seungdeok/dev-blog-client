import { Category } from './Category';

export interface Post {
  id: number;
  category: Category;
  draft: string;
  tags: string;
  title: string;
  content: string;
  modified_at: Date;
}
