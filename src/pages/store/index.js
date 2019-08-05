import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import ProductGrid from "../../components/store/productgrid"

const StorePageIndex = ({data}) => {

  return (

    <Layout>
      <SEO title="Hemp Up - Store" keywords={[`CBD`, `hemp`, `pet`, `edibles`]} />

      <ProductGrid products={data.allShopifyProduct.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allShopifyProduct(
      sort: {
        fields: [createdAt]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          productType
          title
          handle
          createdAt
          images {
            id
            originalSrc
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }

        }
      }
    }
  }

`
export default StorePageIndex
