import { ProductAdditionalOptionProps, ProductAdditionalProps, ProductProps } from "./restaurant";

export const ProductUtils = {
  getProductBasePrice(product: ProductProps): number {
    if (product.additionals.length === 0 ) {
      return product.price;
    }
 
    const additionalMain = this.getAdditionalMain(product.additionals);

    if (!additionalMain) {
      return product.price;
    }

    const additionalFirstOption = additionalMain.options[0];
    const isPromotion = additionalFirstOption.discount && additionalFirstOption.discount > 0;
    const basePrice = isPromotion
      ? additionalFirstOption.price - additionalFirstOption.discount
      : additionalFirstOption.price;

    return basePrice;
  },

  getAdditionalMain(additionals: ProductAdditionalProps[]): ProductAdditionalProps | null {
    const additionalMain = additionals.find((add) => add.main === true);
    
    return additionalMain || null;
  },

  getAdditionalMainFirstOption(additionals: ProductAdditionalProps[]): ProductAdditionalOptionProps | null {
    const additionalMain = this.getAdditionalMain(additionals);

    if (!additionalMain) {
      return null;
    }

    return additionalMain.options[0];
  },
}
