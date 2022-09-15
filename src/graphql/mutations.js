/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFurniture = /* GraphQL */ `
  mutation CreateFurniture(
    $input: CreateFurnitureInput!
    $condition: ModelFurnitureConditionInput
  ) {
    createFurniture(input: $input, condition: $condition) {
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
export const updateFurniture = /* GraphQL */ `
  mutation UpdateFurniture(
    $input: UpdateFurnitureInput!
    $condition: ModelFurnitureConditionInput
  ) {
    updateFurniture(input: $input, condition: $condition) {
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
export const deleteFurniture = /* GraphQL */ `
  mutation DeleteFurniture(
    $input: DeleteFurnitureInput!
    $condition: ModelFurnitureConditionInput
  ) {
    deleteFurniture(input: $input, condition: $condition) {
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
