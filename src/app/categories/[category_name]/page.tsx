'use client';

export default function CategoryPage({
  params,
}: {
  params: { category_name: string };
}) {
  console.log(params.category_name);
  return <div>Category Page</div>;
}
