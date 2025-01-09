document.addEventListener('DOMContentLoaded', function () {
    const mainElement = document.querySelector('main'); 
    const mainContent = mainElement.innerHTML; // Save the original home page content

    // HTML content for dynamic insertion
    const sections = {
        pancake: `
            <link href="recipe.css" rel="stylesheet">c
            <section class="recipe-details">
                <h1>Delicious Pancake Recipe</h1>
                <h2>Ingredients:</h2>
                <ul>
                <li>1 cup all-purpose flour</li>
                <li>2 tablespoons sugar</li>
                <li>1 tablespoon baking powder</li>
                <li>1/2 teaspoon salt</li>
                <li>1 cup milk</li>
                <li>1 egg</li>
                <li>2 tablespoons melted butter</li>
                <li>1 teaspoon vanilla extract</li>
                </ul>
                <h2>Instructions:</h2>
                <ol>
                <li>In a large bowl, mix the dry ingredients: flour, sugar, baking powder, and salt.</li>
                <li>In another bowl, whisk the wet ingredients: milk, egg, melted butter, and vanilla extract.</li>
                <li>Combine the wet and dry ingredients until just mixed; be careful not to overmix.</li>
                <li>Heat a non-stick pan or griddle over medium heat and lightly grease it.</li>
                <li>Pour about 1/4 cup of the batter onto the pan for each pancake.</li>
                <li>Cook until bubbles appear on the surface, then flip and cook until golden brown.</li>
                <li>Serve with your favorite syrup and toppings.</li>
                <li></li>
                </ol>
            </section>
        `,
        friedRice:`
            <link href="recipe.css" rel="stylesheet">
            <section class="recipe-details">
                <h1>Delicious Fried Rice Recipe</h1>
                <h2>Ingredients:</h2>
                <ul>
                <li>2 cups cooked rice</li>
                <li>1 cup mixed vegetables (carrots, peas, corn)</li>
                <li>2 eggs, beaten</li>
                <li>2 tablespoons soy sauce</li>
                <li>1 tablespoon sesame oil</li>
                <li>1/4 cup chopped green onions</li>
                <li>Salt and pepper to taste</li>
                </ul>
                <h2>Instructions:</h2>
                <ol>
                <li>Heat a large skillet or wok over medium heat and add sesame oil.</li>
                <li>Sauté mixed vegetables until tender.</li>
                <li>Push the vegetables to one side of the pan and pour the beaten eggs on the other side. Scramble until fully cooked.</li>
                <li>Add the cooked rice to the skillet and stir everything together.</li>
                <li>Drizzle soy sauce over the mixture and stir well.</li>
                <li>Cook for 3-5 minutes, stirring occasionally, until the rice is heated through.</li>
                <li>Season with salt and pepper, garnish with green onions, and serve hot.</li>
                <li></li>
                </ol>
            </section>
        `,
        alfredo:`
            <link href="recipe.css" rel="stylesheet"> 
            <section class="recipe-details">
                <h1>Creamy Alfredo Pasta Recipe</h1>
                <h2>Ingredients:</h2>
                <ul>
                <li>12 oz fettuccine pasta</li>
                <li>2 tablespoons butter</li>
                <li>3 garlic cloves, minced</li>
                <li>1 cup heavy cream</li>
                <li>1 cup grated Parmesan cheese</li>
                <li>1/4 teaspoon black pepper</li>
                <li>1/4 cup chopped parsley (optional)</li>
                <li>Salt to taste</li>
            </ul>
            <h2>Instructions:</h2>
            <ol>
                <li>Cook fettuccine pasta according to package instructions. Drain and set aside.</li>
                <li>In a large skillet, melt butter over medium heat. Add minced garlic and sauté for 1-2 minutes.</li>
                <li>Pour in heavy cream and bring to a gentle simmer. Cook for 2-3 minutes, stirring occasionally.</li>
                <li>Stir in grated Parmesan cheese until melted and smooth.</li>
                <li>Add cooked fettuccine to the skillet and toss to coat with the sauce.</li>
                <li>Season with salt and black pepper to taste.</li>
                <li>Garnish with chopped parsley and serve immediately.</li>
                <li></li>
                </ol>
            </section>
        `,
        generate: `
            <section class="generate">
                <h1>Generate Your Custom Recipe</h1>
                <form>
                    <label for="main-ingredient">Main Ingredient:</label>
                    <input type="text" id="main-ingredient" name="main-ingredient" required>

                    <label for="cuisine-type">Cuisine Type:</label>
                    <input type="text" id="cuisine-type" name="cuisine-type">

                    <label for="serving-size">Serving Size:</label>
                    <input type="number" id="serving-size" name="serving-size" min="1" required>

                    <button type="submit">Generate Recipe</button>
                </form>
            </section>
        `
    };

    // Function to update main content
    function displaySection(sectionKey) {
        mainElement.innerHTML = sections[sectionKey];
        attachEventListeners(); // Reattach event listeners
    }

    // Function to restore the home page
    function restoreHomePage() {
        mainElement.innerHTML = mainContent;
        attachEventListeners(); // Reattach event listeners
    }

    // Attach event listeners to recipe links and generate link
    function attachEventListeners() {
        document.getElementById('pancake-recipe-link').addEventListener('click', function (e) {
            e.preventDefault();
            displaySection('pancake');
        });

        document.getElementById('fried-rice-recipe-link').addEventListener('click', function (e) {
            e.preventDefault();
            displaySection('friedRice');
        });

        document.getElementById('alfredo-recipe-link').addEventListener('click', function (e) {
            e.preventDefault();
            displaySection('alfredo');
        });

        const generateLink = document.querySelector('nav a[href="#generate"]');
        if (generateLink) {
            generateLink.addEventListener('click', function (e) {
                e.preventDefault();
                displaySection('generate');
            });
        }

        // Add Home button functionality to restore the main content
        const homeButton = document.querySelector('a[href="#home"]');
        if (homeButton) {
            homeButton.addEventListener('click', function (e) {
                e.preventDefault();
                restoreHomePage();
            });
        }
    }

    // Initial attachment of event listeners
    attachEventListeners();
});
