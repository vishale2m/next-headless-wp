import { getHomePageData } from '../../lib/get-homepage-data';
import FlexibleRenderer from '@/components/FlexibleRenderer';

export default async function HomePage() {
  const { title, flexibleContent } = await getHomePageData();

  return (
    <main>
      <FlexibleRenderer blocks={flexibleContent} />
    </main>
  );
}
