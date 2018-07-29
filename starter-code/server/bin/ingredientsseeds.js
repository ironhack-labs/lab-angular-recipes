const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');


const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients = [
  {
    name: "Sugar",
    image: "https://ganachepatisserie.com.au/wp-content/uploads/2017/02/different-types-of-sugar.jpg",
  },
  {
    name: "Oil",
    image: "https://media.istockphoto.com/photos/olive-oil-contained-in-an-round-shaped-bottle-picture-id187205776?k=6&m=187205776&s=612x612&w=0&h=0y-bW78Zq4tqpWe_MWjWny5pNQuNts4TTGiJOnYWJ4E=",
  },
  {
    name: "Vinegar",
    image: "https://www.healthline.com/hlcmsresource/images/AN_images/AN5-Apple_Cider_Vinegar-732x549-Thumbnail.jpg",
  },
  {
    name: "Beef",
    image: "http://onedaycart.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beef_3.jpg",
  },
  {
    name: "Milk",
    image: "https://www.worldatlas.com/r/w728-h425-c728x425/upload/b1/98/3d/shutterstock-568076731.jpg",
  },
  {
    name: "Eggs",
    image: "https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/106/141/162262991.jpg",
  },  
  {
    name: "Pork",
    image: "https://thumbs.dreamstime.com/b/raw-pork-chops-3720540.jpg",
  },
  {
    name: "Chicken",
    image: "https://atmedia.imgix.net/38149a3afe8b90ddfe49fe90703e0e21514a6db0?w=800&fit=max",
  },
  {
    name: "Butter",
    image: "https://www.bestfoodfacts.org/wp-content/uploads/2018/03/bff-butter-1146x452-824x325.png",
  },
  {
    name: "Rice",
    image: "http://pakrice.pk/wp-content/uploads/2015/12/Non-basmati-Rice-1-600x400.jpg",
  },
  {
    name: "Potatoe",
    image: "https://blog.oxforddictionaries.com/wp-content/uploads/potato.jpg",
  },
  {
    name: "Lamb",
    image: "http://www.floridis.com.gr/site/wp-content/uploads/2013/10/arni_paidakia_kare524b039c250ee.jpg",
  },
  {
    name: "Salmon",
    image: "https://d3awvtnmmsvyot.cloudfront.net/api/file/VxumTpeTVq0GQvh0cXdA/convert?fit=max&w=1150&quality=60&cache=true&rotate=exif&compress=true",
  },
  {
    name: "Prawns",
    image: "https://www.manettas.com.au/mwp/wp-content/uploads/2017/09/King-Prawn-Green-Large-Woy-Woy-Fishermens-Wharf-Manettas-Seafood-Market.jpg",
  },
  {
    name: "Lemon",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/lemon-uses-0-1494115921.jpg",
  },
  {
    name: "Lettuce",
    image: "http://fresh2door.ie/wp-content/uploads/2017/06/Fresh2Door-Iceberg-Lettuce.jpg",
  },
  {
    name: "Bellpepper",
    image: "https://5.imimg.com/data5/KH/OJ/MY-10247618/fresh-bell-pepper-500x500.jpg",
  },
  {
    name: "Tomatoe",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
  },
  {
    name: "Cheese",
    image: "https://isitbadforyou.s3.amazonaws.com/uploads/article/pictures/798/big_is_swiss_cheese_bad_for_you..jpg",
  },
  {
    name: "Cucumber",
    image: "https://www.naturalfoodseries.com/wp-content/uploads/2017/12/Cucumber-800x416.jpgucumber",
  },
  {
    name: "Garlic",
    image: "https://cdn0.woolworths.media/content/wowproductimages/large/713429.jpg",
  },
  {
    name: "Mushroom",
    image: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fmushrooms-flu-gettyimages-478793155.jpg%3Fitok%3DjvgqRluY&w=700&q=85",
  },
  {
    name: "Bass",
    image: "https://vds-food.com/files/pictures/product/1220/1220-fancy.fa8e872ba1ac1c4c9b6c8dba46690c7f.jpg",
  },
  {
    name: "Cod",
    image: "https://thumbs.dreamstime.com/b/raw-cod-fish-two-slices-fillet-closeup-wooden-cutting-board-white-background-35001388.jpg",
  },
  {
    name: "Avocado",
    image: "https://www.naturalfoodseries.com/wp-content/uploads/2017/08/Avocados-800x416.jpg",
  },
  {
    name: "Apple",
    image: "https://media.istockphoto.com/photos/red-apple-picture-id495878092?k=6&m=495878092&s=612x612&w=0&h=q9k5jN-1giBGZgTM6QhyKkPqtGf6vRpkgDzAwEz9DkY=",
  },

]

Ingredient.create(ingredients, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${ingredients.length} ingredients`)
});
