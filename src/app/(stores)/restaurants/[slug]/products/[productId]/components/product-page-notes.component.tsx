"use client";
import { ProductPage } from "@/components/product-page";
import { useCheckoutContext } from "@/contexts/checkout.context";
import { ProductProps } from "@/utils/restaurant";
import React from "react";

interface ProductPageNotesProps {
  product: ProductProps;
}

export function ProductPageNotes(props: ProductPageNotesProps) {
  const { product } = props;
  const { checkout, getCheckoutProductById, addNotesToCheckout } =
    useCheckoutContext();

  const initialObservation = checkout?.products.find(
    (p) => p.id === product.id,
  )?.observation;
  const [observation, setObservation] = React.useState(
    initialObservation || "",
  );

  const checkoutProduct = getCheckoutProductById(product.id);

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObservation(event.target.value);
    addNotesToCheckout(product, event.target.value);
  };

  React.useEffect(() => {
    if (!checkoutProduct) {
      setObservation("");
    }
  }, [checkoutProduct]);

  return (
    <ProductPage.NotesTextArea
      value={observation}
      onChange={handleNotesChange}
    />
  );
}
