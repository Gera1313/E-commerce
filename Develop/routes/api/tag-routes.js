const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        {model: Product, through: ProductTag}
      ]
    });

    res.status(200).json(tagData);
  }
  catch (err) {
    console.log(`Error in getting tags: ${err}`); // Maybe this is not required? 
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {model: Product, through: ProductTag}
      ]
    });

    if (tag) {
      res.status(200).json(tag);
    }
    else {
      res.status(404).json({message: 'No tag found with the id provided!'});
    }
  }
  catch (err) {
    console.log(`Error in getting tag by id: ${err}`);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagName = req.body.tag_name;

    if (tagName) {
      const tagCreated = await Tag.create(
        {tag_name: tagName}
      );

      res.status(200).json(tagCreated);
    }
    else {
      res.status(404).json({message: 'Request body must contain tag_name'});
    }
  }
  catch (err) {
    console.log(`Error creating a tag: ${err}`);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagName = req.body.tag_name;

    if (tagName) {
      const updatedTag = await Tag.update(
        {tag_name: tagName},
        {
          where: {
            id: req.params.id
          }
        }
      );

      if (!updatedTag[0]) {
        res.status(404).json({message: 'No tag found with the id provided!'});
      }
      else {
        res.status(200).json(updatedTag);     
      }
    }
    else {
      res.status(404).json({message: 'Request body must contain tag_name'});
    }
  }
  catch (err) {
    console.log(`Error updating tag by id: ${err}`);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    await ProductTag.destroy({
      where: {
        tag_id: req.params.id
      }
    });

    const deletedTag = await Tag.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!deletedTag) {
      res.status(404).json({message: 'No tag found with the id provided!'});
    }
    else {
      res.status(200).json(deletedTag);
    }
  }
  catch (err) {
    console.log(`Error deleting tag: ${err}`);
    res.status(500).json(err);
  }
});

module.exports = router;

// Worked on this file. 