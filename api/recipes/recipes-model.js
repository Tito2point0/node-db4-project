function getRecipeById(recipe_id) {
    return Promise.resolve({ recipe_id: recipe_id, title: 'Sample Recipe' });
}
module.exports = {
    getRecipeById,
};