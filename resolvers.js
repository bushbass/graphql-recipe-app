exports.resolvers = {
  Query: {
<<<<<<< HEAD
    getAllRecipes: async (root, args, { Recipe }) => {
      const allRecipes = await Recipe.find();
      return allRecipes;
    }
  },
  Mutation: {
    addRecipe: async (
      root,
      { name, description, category, instructions, username },
=======
    getAllRecipes: () => {}
  },

  Mutation: {
    addRecipe: async (
      root,
      { name, category, description, instructions, username },
>>>>>>> 27c39cfb3280f5b1a1483b196261198c522b5990
      { Recipe }
    ) => {
      const newRecipe = await new Recipe({
        name,
<<<<<<< HEAD
        description,
        category,
=======
        category,
        description,
>>>>>>> 27c39cfb3280f5b1a1483b196261198c522b5990
        instructions,
        username
      }).save();
      return newRecipe;
    }
  }
};
