const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//Stable - Tested
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product, through: ProductTag, as: 'tagged_Product',
      },
    ]
  }).then((tagData) => {
    res.json(tagData)
  });
});

//Stable - Tested
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id,
    {
      include: [
        {
          model: Product, through: ProductTag, as: 'tagged_Product',
        },
      ]
    }).then((productData) => {
      res.json(productData);
    });
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
