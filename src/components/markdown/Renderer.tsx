import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  data: string;
}

export function Renderer({ data }: Props) {
  return (
    <>
      <ReactMarkdown children={data} remarkPlugins={[remarkGfm]} />
    </>
  );
}
