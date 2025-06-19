"use client";

import { Icon } from "@/components/ui/icon";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface RestaurantPageFavoriteButtonProps {
  isFavorite: boolean;
}

export function RestaurantPageFavoriteButton(
  props: RestaurantPageFavoriteButtonProps,
) {
  const { isFavorite: favorite } = props;
  const [isFavorite, setIsFavorite] = React.useState(favorite);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return isFavorite ? (
    <button className="cursor-pointer" onClick={handleFavorite}>
      <Icon icon={faHeart} className="text-xl text-purple-500 md:text-3xl" />
    </button>
  ) : (
    <button className="cursor-pointer" onClick={handleFavorite}>
      <Icon
        icon={faHeartRegular}
        className="text-xl text-purple-500 md:text-3xl"
      />
    </button>
  );
}
