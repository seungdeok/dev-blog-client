// import MDEditor from '@uiw/react-md-editor';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@uiw/react-markdown-preview/markdown.css';

interface Props {
  data: string;
}

export function Renderer({ data }: Props) {
  return <MarkdownPreview source={data} style={{ whiteSpace: 'pre-wrap' }} />;
}
