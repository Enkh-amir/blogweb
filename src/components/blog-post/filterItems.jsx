import React from "react";
import { useEffect } from "react";
export const filterItemsM = () => {
  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = BlogPostCardDara.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    }
  };
};
