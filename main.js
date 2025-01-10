document.addEventListener('DOMContentLoaded', function () {
    const mainElement = document.querySelector('main');
    const originalContent = mainElement.innerHTML; // Save the original home page content

    // Recipe sections
    const sections = {
        pancake: `
            <link href="recipe.css" rel="stylesheet">
            <section class="recipe-details" role="region" aria-labelledby="pancake-recipe-title">
                <h1 id="pancake-recipe-title">Delicious Pancake Recipe</h1>
                <h2>Ingredients:</h2> <li>1 cup all-purpose flour</li>
        <li>2 tablespoons granulated sugar</li>
        <li>1 tablespoon baking powder</li>
        <li>1/4 teaspoon salt</li>
        <li>3/4 cup milk (adjust for desired thickness)</li>
        <li>1 large egg</li>
        <li>2 tablespoons unsalted butter, melted</li>
        <li>1 teaspoon vanilla extract</li>
    </ul>

    <h2>Instructions:</h2>
    <ol>
        <li>In a large mixing bowl, whisk together flour, sugar, baking powder, and salt.</li>
        <li>In a separate bowl, whisk milk, egg, melted butter, and vanilla extract until smooth.</li>
        <li>Gradually mix the wet ingredients into the dry ingredients, stirring until just combined. The batter should be slightly lumpy.</li>
        <li>Heat a non-stick skillet over medium heat and lightly grease with butter or oil.</li>
        <li>Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface and edges look set, about 2-3 minutes.</li>
        <li>Flip and cook the other side until golden brown, about 1-2 minutes.</li>
        <li>Serve with butter, maple syrup, fresh fruit, or whipped cream for a delightful breakfast!</li>
    </ol>

    <h2>Tips:</h2>
    <ul>
        <li>For extra fluffy pancakes, let the batter rest for 5-10 minutes before cooking.</li>
        <li>Add a handful of chocolate chips, blueberries, or sliced bananas to the batter for variations.</li>
                </ol>
            </section>
        `,
        'fried-rice': `
            <link href="recipe.css" rel="stylesheet">
            <section class="recipe-details" role="region" aria-labelledby="fried-rice-recipe-title">
                <h1 id="fried-rice-recipe-title">Delicious Fried Rice Recipe</h1>
                <h2>Ingredients:</h2>
                <ul>
        <li>2 cups cooked and chilled white rice</li>
        <li>2 tablespoons vegetable oil</li>
        <li>3 garlic cloves, minced</li>
        <li>1 small onion, finely chopped</li>
        <li>1 cup mixed vegetables (peas, carrots, corn)</li>
        <li>2 large eggs, lightly beaten</li>
        <li>2 tablespoons soy sauce (or more, to taste)</li>
        <li>1 teaspoon sesame oil</li>
        <li>1/4 cup chopped green onions</li>
        <li>Optional: diced cooked chicken, shrimp, or tofu for added protein</li>
    </ul>

    <h2>Instructions:</h2>
    <ol>
        <li>Heat 1 tablespoon of oil in a large skillet or wok over medium-high heat. Add garlic and onion, sautéing until fragrant.</li>
        <li>Add mixed vegetables and cook until tender, about 3-4 minutes.</li>
        <li>Push the vegetables to one side of the pan and pour the beaten eggs into the empty space. Scramble the eggs until fully cooked, then mix them with the vegetables.</li>
        <li>Add the remaining oil and the chilled rice. Break up any clumps and stir-fry for 2-3 minutes.</li>
        <li>Drizzle soy sauce and sesame oil over the rice, stirring well to combine.</li>
        <li>Garnish with green onions and serve hot. Enjoy your homemade fried rice!</li>
    </ol>

    <h2>Tips:</h2>
    <ul>
        <li>Use day-old rice for the best texture. Freshly cooked rice tends to be too sticky.</li>
        <li>Adjust the soy sauce to your taste for saltiness.</li>
                </ol>
            </section>
        `,
        alfredo: `
            <link href="recipe.css" rel="stylesheet">
            <section class="recipe-details" role="region" aria-labelledby="alfredo-recipe-title">
                <h1 id="alfredo-recipe-title">Creamy Alfredo Pasta Recipe</h1>
                <h2>Ingredients:</h2>
                <ul>
        <li>12 oz fettuccine pasta</li>
        <li>2 tablespoons unsalted butter</li>
        <li>3 garlic cloves, minced</li>
        <li>1 1/4 cups heavy cream</li>
        <li>1 cup freshly grated Parmesan cheese</li>
        <li>1/4 teaspoon black pepper</li>
        <li>Salt to taste</li>
        <li>Optional: fresh parsley and additional Parmesan for garnish</li>
    </ul>

    <h2>Instructions:</h2>
    <ol>
        <li>Cook fettuccine pasta in a large pot of salted boiling water until al dente. Reserve 1/2 cup of pasta water, then drain the rest.</li>
        <li>In a large skillet over medium heat, melt the butter and sauté the minced garlic until fragrant, about 1 minute.</li>
        <li>Slowly pour in the heavy cream, stirring constantly. Bring to a gentle simmer.</li>
        <li>Gradually stir in the grated Parmesan cheese, letting it melt into the sauce.</li>
        <li>Season with black pepper and salt. If the sauce is too thick, use the reserved pasta water to thin it out to your desired consistency.</li>
        <li>Toss the cooked pasta in the sauce until fully coated.</li>
        <li>Garnish with chopped parsley and extra Parmesan. Serve immediately!</li>
                </ol>
            </section>
        `
    };

    // Function to load a specific section
    function loadSection(sectionKey) {
        if (!sections[sectionKey]) {
            console.error(`Section "${sectionKey}" not found.`);
            mainElement.innerHTML = `<p>Sorry, the section you're looking for doesn't exist.</p>`;
            return;
        }
        mainElement.innerHTML = sections[sectionKey];
        mainElement.classList.add('fade-in');
        setTimeout(() => mainElement.classList.remove('fade-in'), 500);
        focusOnSection(`${sectionKey}-recipe-title`);
    }

    // Function to scroll to the gallery section
    function scrollToGallery() {
        document.querySelector('.gallery')?.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to scroll to the generate section
    function scrollToGenerate() {
        document.querySelector('.generate')?.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to restore the original home page content
    function restoreHomePage() {
        mainElement.innerHTML = originalContent; // Restore full home content
        attachEventListeners(); // Reattach event listeners for home page
    }

    // Focus management for accessibility
    function focusOnSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.setAttribute('tabindex', '-1'); // Make it focusable
            section.focus();
        }
    }

    // Attach event listeners using delegation
    document.addEventListener('click', function (e) {
        const target = e.target.closest('a');
        if (!target) return;

        if (target.matches('[href="#generate"]')) {
            e.preventDefault();
            scrollToGenerate();
        } else if (target.matches('[href="#recipes"]')) {
            e.preventDefault();
            scrollToGallery();
        } else if (target.matches('[href="#home"]')) {
            e.preventDefault();
            restoreHomePage();
        } else if (target.id && target.id.endsWith('-recipe-link')) {
            e.preventDefault();
            const key = target.id.split('-recipe-link')[0];
            loadSection(key);
        }
    });

    // Apply fade-in CSS for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});
