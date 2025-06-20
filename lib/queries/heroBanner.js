export const HERO_BANNER_FRAGMENT = `
  ... on PageFlexibleContentFlexibleContentHeroBannerLayout {
    description
    subtitle
    title
    button {
      target
      title
      url
    }
    backgroundImage {
      node {
        mediaItemUrl
      }
    }
  }
`;
