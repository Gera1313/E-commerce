const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [
        { model: Product }
      ]
    });
    res.status(200).json(categories);
  }
  catch (err) {
    console.log(`Error finding categories: ${err}`);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [
        { model: Product }
      ]
    });
    // if (category) {
      res.status(200).json(category);
    // }
    // else {
    //   res.status(404).json({ message: "No category found with that id!" });
    // }
  }
  catch (err) {
    console.log(`Error in finding category by id: ${err}`);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryName = req.body.category_name;
    if (!categoryName) {
      return res.status(404).json('Must contain category name');
    }
    const categoryAdded = await Category.create(
      { category_name: categoryName }
    );
    res.status(200).json(categoryAdded);
  }
  catch (err) {
    console.log(`Error creating category: ${err}`);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    if (req.body && req.body.category_name) {
      const updatedCategory = await Category.update(
        {
          category_name: req.body.category_name
        },
        {
          where: {
            id: req.params.id
          }
        }
      );
      if (!updatedCategory[0]) {
        res.status(404).json({message: 'No category with this id!'});
      }
      else {
        res.status(200).json(updatedCategory);
      }
    }
    else {
      res.status(404).json('Must contain category name');
    }
  }
  catch (err) {
    console.log(`Error updating category: ${err}`);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!deletedCategory) {
      res.status(404).json({message: 'No category with that id!'});
    }
    else {
      res.status(200).json(deletedCategory);
    }
  }
  catch (err) {
    console.log(`Error in deleting a category by its id: ${err}`);
    res.status(500).json(err);
  }
});

module.exports = router;
