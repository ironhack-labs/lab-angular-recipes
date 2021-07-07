
## ROUTES

GET /api/dishes/ - retrieveAll()

GET /api/dishes/:id  - retrieveOneById(id)

POST /api/dishes  - createOne(data)
- body:
  - name
  - description
  - image

POST /api/dishes/:dishId/ingredients/:id/add - addIngredient(dishId, ingredientId, quantity)
- body: quantity



GET /api/ingredients/  - retrieveAll()

GET /api/ingredients/:id - retrieveOneById(id)

POST /api/ingredients - createOne(data)
- body:
  - name
  - description
  - image

