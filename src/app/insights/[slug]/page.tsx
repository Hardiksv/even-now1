import { ArticlePage } from '@/components/even-now/pages'
export default function Page({ params }: { params: { slug: string } }) { return <ArticlePage slug={params.slug} /> }
