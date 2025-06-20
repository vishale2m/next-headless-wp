import { gql, GraphQLClient } from 'graphql-request';
import { HERO_BANNER_FRAGMENT } from './queries/heroBanner';
import { FEATURED_IMAGE_FRAGMENT } from './queries/featuredImage';
import { CTA_BLOCK_FRAGMENT } from './queries/ctaBlock';
import { FEATURED_ICON_FRAGMENT } from './queries/featuredIcon';

const endpoint = 'http://localhost:8888/custom-theme/graphql';

const HOMEPAGE_QUERY = gql`
  query GetHomePage {
    page(id: "home", idType: URI) {
      template {
        ... on DefaultTemplate {
          pageFlexibleContent {
            flexibleContent {
              __typename
              ${HERO_BANNER_FRAGMENT}
              ${FEATURED_IMAGE_FRAGMENT}
              ${CTA_BLOCK_FRAGMENT}
              ${FEATURED_ICON_FRAGMENT}
            }
          }
        }
      }
    }
  }
`;

export async function getHomePageData() {
  const client = new GraphQLClient(endpoint);
  const { page } = await client.request(HOMEPAGE_QUERY);
  const flexibleContent = page?.template?.pageFlexibleContent?.flexibleContent || [];
  return { flexibleContent };
}