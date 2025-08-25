const recipes = [
  {
    name: "The Quintessential Banana Eleganza",
    image_path: "../images/banana_bread.jpg",
    description:
      "Banana bread is a timeless classic that combines the natural sweetness of ripe bananas with the comforting richness of butter, sugar, and eggs. Its moist and tender crumb makes it perfect for breakfast, a mid-day snack, or even a casual dessert, and the aroma that fills the kitchen while it bakes is enough to make anyone feel at home. What makes banana bread so special is its simplicity—it transforms overripe bananas that might otherwise go to waste into something warm, inviting, and satisfying. Whether enjoyed plain, toasted with a smear of butter, or dressed up with nuts and chocolate chips, this humble loaf manages to feel both rustic and indulgent, a reminder that even the simplest ingredients can come together to create something extraordinary.",
    recipe: [
      { amount: 2, uom: "cups", ingredient: "all-purpose flour" },
      { amount: 1, uom: "tsp", ingredient: "baking soda" },
      { amount: 0.25, uom: "tsp", ingredient: "salt" },
      { amount: 0.5, uom: "cup", ingredient: "butter" },
      { amount: 0.75, uom: "cup", ingredient: "brown sugar" },
      { amount: 2, uom: "", ingredient: "eggs" },
      { amount: 2.5, uom: "", ingredient: "ripe bananas, mashed" },
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Grease a loaf pan.",
      "Mix flour, baking soda, and salt.",
      "In another bowl, cream butter and sugar, then add eggs and bananas.",
      "Combine wet and dry mixtures.",
      "Pour into loaf pan and bake 60 minutes.",
      "Cool before slicing.",
    ],
  },
  {
    name: "Crisped Poultry à la Minimaliste",
    image_path: "../images/fried_chicken.jpg",
    description:
      "Fried chicken is the ultimate comfort food, celebrated for its golden, crispy exterior and juicy, tender meat inside. This version strips the process down to the essentials—chicken, flour, spices, and hot oil—yet the results are nothing short of spectacular. Marinating the chicken adds depth of flavor and ensures the meat stays moist, while the seasoned flour coating fries up into an irresistibly crunchy shell. Each bite offers a satisfying contrast of textures, with the crackle of the crust giving way to succulent chicken that bursts with flavor. Despite its simplicity, fried chicken always feels like a treat, the kind of dish that brings people together around the table, proving that sometimes the most unpretentious recipes are the ones that leave the greatest impression.",
    recipe: [
      { amount: 1, uom: "kg", ingredient: "chicken pieces" },
      { amount: 2, uom: "cups", ingredient: "buttermilk" },
      { amount: 2, uom: "cups", ingredient: "flour" },
      { amount: 1, uom: "tbsp", ingredient: "paprika" },
      { amount: 1, uom: "tsp", ingredient: "salt" },
      { amount: 1, uom: "tsp", ingredient: "pepper" },
      { amount: "", uom: "", ingredient: "oil for frying" },
    ],
    instructions: [
      "Marinate chicken in buttermilk for at least 1 hour.",
      "Mix flour, paprika, salt, and pepper.",
      "Coat chicken in flour mixture.",
      "Heat oil in a deep pan.",
      "Fry chicken until golden brown and cooked through.",
      "Drain on paper towels before serving.",
    ],
  },
  {
    name: "Layered Meat Symphony of Simplicity",
    image_path: "../images/lasagna.jpg",
    description:
      "Lasagna may sound like an elaborate Italian masterpiece, but at its heart it is a comforting, layered harmony of noodles, meat, sauce, and cheese. Each layer builds upon the last, with rich tomato sauce clinging to tender sheets of pasta, ground meat providing hearty substance, and a blend of cheeses melting into gooey perfection. When baked, the layers fuse into a bubbling, golden-topped dish that fills the kitchen with irresistible aromas. What makes lasagna so beloved is its balance: the bright acidity of tomatoes against the richness of cheese, the savory bite of meat against the gentle softness of pasta. Though it looks like a labor of love, it is essentially a simple assembly of staples, elevated by time in the oven into something truly special that feels both rustic and elegant.",
    recipe: [
      { amount: 12, uom: "", ingredient: "lasagna noodles" },
      { amount: 1, uom: "lb", ingredient: "ground beef" },
      { amount: 1, uom: "jar", ingredient: "tomato sauce" },
      { amount: 2, uom: "cups", ingredient: "ricotta cheese" },
      { amount: 2, uom: "cups", ingredient: "mozzarella cheese, shredded" },
      { amount: 0.5, uom: "cup", ingredient: "parmesan cheese" },
    ],
    instructions: [
      "Cook lasagna noodles according to package directions.",
      "Brown ground beef and add tomato sauce.",
      "Layer noodles, meat sauce, and cheeses in a baking dish.",
      "Repeat layers and top with mozzarella and parmesan.",
      "Bake at 375°F (190°C) for 45 minutes.",
      "Let stand 10 minutes before serving.",
    ],
  },
  {
    name: "Fluffy Morning Clouds",
    image_path: "../images/pancake.jpg",
    description:
      "Pancakes are a breakfast classic that somehow manage to feel both nostalgic and indulgent, turning a few simple ingredients into a towering stack of comfort. When cooked properly, they are light, fluffy, and tender, with a delicate golden-brown surface that practically begs for a drizzle of syrup. The batter, made from flour, milk, eggs, and butter, comes together quickly, yet the result feels like something far more luxurious. There’s a certain joy in flipping pancakes on a hot skillet, watching bubbles form and edges crisp just enough before the perfect flip. Whether eaten plain, topped with fruit, or drowned in syrup, pancakes have an uncanny ability to make even the most ordinary mornings feel like a celebration, a reminder that happiness can be found in the simplest of rituals.",
    recipe: [
      { amount: 1, uom: "cup", ingredient: "all-purpose flour" },
      { amount: 2, uom: "tbsp", ingredient: "sugar" },
      { amount: 2, uom: "tsp", ingredient: "baking powder" },
      { amount: 0.25, uom: "tsp", ingredient: "salt" },
      { amount: 1, uom: "cup", ingredient: "milk" },
      { amount: 1, uom: "", ingredient: "egg" },
      { amount: 2, uom: "tbsp", ingredient: "butter, melted" },
    ],
    instructions: [
      "Mix flour, sugar, baking powder, and salt.",
      "Whisk in milk, egg, and melted butter.",
      "Heat a skillet and grease lightly.",
      "Pour batter and cook until bubbles form.",
      "Flip and cook until golden.",
      "Serve warm with toppings.",
    ],
  },
  {
    name: "Gourmet Flatbread Extravaganza",
    image_path: "../images/pizza.jpg",
    description:
      "Pizza is the perfect balance of simplicity and satisfaction, a flatbread canvas topped with just enough to transform it into something extraordinary. At its base lies soft yet chewy dough that crisps beautifully in a hot oven, while tomato sauce adds tangy richness and cheese melts into gooey strings of flavor that stretch with every bite. Toppings can be as humble or as extravagant as you like, from fresh basil and mozzarella to pepperoni, vegetables, or even gourmet creations. The beauty of pizza lies in its adaptability—it can be a quick weeknight dinner, a party staple, or a restaurant-quality indulgence, all depending on how you choose to make it. Every slice embodies comfort and creativity, proving that minimal effort and basic ingredients can still deliver maximum flavor and joy.",
    recipe: [
      { amount: 1, uom: "lb", ingredient: "pizza dough" },
      { amount: 0.5, uom: "cup", ingredient: "tomato sauce" },
      { amount: 1.5, uom: "cups", ingredient: "mozzarella cheese" },
      { amount: "", uom: "", ingredient: "toppings of choice" },
    ],
    instructions: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough on a floured surface.",
      "Spread tomato sauce evenly over dough.",
      "Top with cheese and toppings.",
      "Bake 12–15 minutes until crust is golden.",
      "Slice and serve hot.",
    ],
  },
  {
    name: "Velvety Sunrise Scramble",
    image_path: "../images/scrambled_eggs.jpg",
    description:
      "Scrambled eggs may seem like the simplest of dishes, but when done right they transform into something luxuriously soft, creamy, and deeply satisfying. The gentle combination of eggs, milk, and butter produces curds that are tender and moist, avoiding the dryness that comes from rushing the process. Cooking them low and slow is the secret, allowing the eggs to slowly set into silky folds that melt in your mouth. Seasoned lightly with salt and pepper, scrambled eggs become the perfect blank canvas, ready to be dressed up with herbs, cheese, or served alongside toast and fresh fruit. They are the kind of breakfast that feels indulgent despite their simplicity, proof that comfort and elegance can coexist in the same bite.",
    recipe: [
      { amount: 4, uom: "", ingredient: "eggs" },
      { amount: 0.25, uom: "cup", ingredient: "milk" },
      { amount: 1, uom: "tbsp", ingredient: "butter" },
      { amount: "", uom: "to taste", ingredient: "salt and pepper" },
    ],
    instructions: [
      "Whisk eggs with milk, salt, and pepper.",
      "Melt butter in a skillet over medium heat.",
      "Pour in egg mixture.",
      "Stir gently until just set.",
      "Remove from heat and serve warm.",
    ],
  },
  {
    name: "Tomato-infused Pasta Perfection",
    image_path: "../images/spaghetti.jpg",
    description:
      "Spaghetti with tomato sauce is the quintessential weeknight dinner, striking a perfect balance between ease and flavor. Long strands of pasta are tossed with a savory sauce of tomatoes, olive oil, and herbs, sometimes enriched with ground beef or a sprinkle of cheese for added depth. Each forkful delivers a satisfying mix of textures, with the sauce clinging lovingly to the pasta so that every bite bursts with flavor. Though it comes together quickly, the dish feels timeless, like something passed down through generations of kitchens where comfort was made with simple staples. Spaghetti proves that you don’t need an elaborate recipe to create a meal worth savoring, only the right ingredients prepared with care and shared with people you love.",
    recipe: [
      { amount: 1, uom: "lb", ingredient: "spaghetti" },
      { amount: 1, uom: "jar", ingredient: "tomato sauce" },
      { amount: 0.5, uom: "lb", ingredient: "ground beef" },
      { amount: 1, uom: "tbsp", ingredient: "olive oil" },
      { amount: "", uom: "to taste", ingredient: "salt and pepper" },
    ],
    instructions: [
      "Cook spaghetti according to package directions.",
      "Heat oil in a pan and brown ground beef.",
      "Add tomato sauce, salt, and pepper.",
      "Simmer for 15 minutes.",
      "Drain spaghetti and mix with sauce.",
      "Serve hot with optional cheese.",
    ],
  },
];

export default recipes;
