import { Tag } from './Tag';

export interface Post {
  id: number;
  tags: Tag[];
  draft: string;
  title: string;
  content: string;
  modified_at: Date;
}
