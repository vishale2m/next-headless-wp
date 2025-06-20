export default function FeaturedIcon({ featuredIconRow = [] }) {
    if (!featuredIconRow.length) return null;
    return (
      <section style={{ padding: '2rem' }}>
        <div className="container">
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {featuredIconRow.map((item, index) => (
                <div key={index} style={{ textAlign: 'center', width: '150px' }}>
                {item.icon?.node.mediaItemUrl && (
                    <img
                    src={item.icon.node.mediaItemUrl}
                    alt={item.icon.node.altText || ''}
                    style={{ maxWidth: '100%', height: 'auto' }}
                    />
                )}
                <p>{item.label}</p>
                </div>
            ))}
            </div>
        </div>
      </section>
    );
  }
  