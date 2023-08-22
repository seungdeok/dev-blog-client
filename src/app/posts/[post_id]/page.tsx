'use client';

export default function PostPage({ params }: { params: { post_id: string } }) {
  return <div>{`Post ${params.post_id} Page`}</div>;
}
