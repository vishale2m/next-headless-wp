import Button from "../button";

export default function FeaturedImage({ sideImage, content, button }) {
    return (
      <section>
       <div className="container">
        <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
          {sideImage?.node.mediaItemUrl && (
            <div style={{ flex: '1' }}>
              <img src={sideImage.node.mediaItemUrl} alt={sideImage.node.altText || ''} />
            </div>
          )}
          <div style={{ flex: '1' }}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {button && (
            <Button
              href={button.url}
              target={button.target || "_self"}
            >
              {button.title}
            </Button>
          )}
          </div>
        </div>
       </div>
      </section>
    );
  }
  