// components/FlexibleRenderer.js
import HeroBanner from './layouts/HeroBanner';
import FeaturedImage from './layouts/FeaturedImage';
import CtaBlock from './layouts/CtaBlock';
import FeaturedIcon from './layouts/FeaturedIcon';

const layoutMap = {
  PageFlexibleContentFlexibleContentHeroBannerLayout: HeroBanner,
  PageFlexibleContentFlexibleContentFeaturedImageLayout: FeaturedImage,
  PageFlexibleContentFlexibleContentCtaBlockLayout: CtaBlock,
  PageFlexibleContentFlexibleContentFeaturedIconLayout: FeaturedIcon,
};

export default function FlexibleRenderer({ blocks = [] }) {
  if (!blocks.length) return null;

  return blocks.map((block, index) => {
    const Component = layoutMap[block?.__typename];

    if (!Component) {
      return (
        <div key={index} style={{ padding: '1rem', background: '#fee' }}>
          ⚠️ Unknown layout: <code>{block?.__typename || 'undefined'}</code>
        </div>
      );
    }

    return <Component key={index} {...block} />;
  });
}
