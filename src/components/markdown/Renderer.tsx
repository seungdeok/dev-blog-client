import MDEditor from '@uiw/react-md-editor';

interface Props {
  data: string;
}

export function Renderer({ data }: Props) {
  return <MDEditor.Markdown source={data} style={{ whiteSpace: 'pre-wrap' }} />;
}
