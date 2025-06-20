export const FEATURED_IMAGE_FRAGMENT = `
    ... on PageFlexibleContentFlexibleContentFeaturedImageLayout {
        content
        button {
        target
        title
        url
        }
        sideImage {
        cursor
        node {
            mediaItemUrl
            altText
        }
        }
    }
`;
