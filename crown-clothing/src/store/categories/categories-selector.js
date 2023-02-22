export const selectCategories = (state) =>
  state.categories.Categories.reduce((acc, categories) => {
    const { title, items } = categories;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
