/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFurniture = /* GraphQL */ `
  query GetFurniture($id: ID!) {
    getFurniture(id: $id) {
      sku
      upc
      description
      category
      imageLarge {
        region
        bucket
        key
      }
      imageThumb {
        region
        bucket
        key
      }
      contentType
      availability
      dropShip
      cost
      price
      id
      createdAt
      updatedAt
    }
  }
`;
export const listFurnitures = /* GraphQL */ `
  query ListFurnitures(
    $filter: ModelFurnitureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFurnitures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        sku
        upc
        description
        category
        imageLarge {
          region
          bucket
          key
        }
        imageThumb {
          region
          bucket
          key
        }
        contentType
        availability
        dropShip
        cost
        price
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
