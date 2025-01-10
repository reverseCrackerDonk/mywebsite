document.addEventListener('DOMContentLoaded', function () {
    const mainElement = document.querySelector('main');
    const originalContent = mainElement.innerHTML; // Save the original home page content

    // Recipe sections
    const sections = {
        pancake: `
            <link href="recipe.css" rel="stylesheet">
            <section class="recipe-details" role="region" aria-labelledby="pancake-recipe-title">
                <h1 id="pancake-recipe-title">Delicious Pancake Recipe</h1>
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
                    <li>Mix dry ingredients.</li>
                    <li>Whisk wet ingredients separately.</li>
                    <li>Combine and cook on a griddle.</li>
                    <li>Enjoy with your favorite toppings!</li>
                </ol>
            </section>
        `,
        'fried-rice': `
            <link href="recipe.css" rel="stylesheet">
            <section class="recipe-details" role="region" aria-labelledby="fried-rice-recipe-title">
                <h1 id="fried-rice-recipe-title">Delicious Fried Rice Recipe</h1>
                <h2>Ingredients:</h2>
                <ul>
                    <li>2 cups cooked rice</li>
                    <li>1 cup mixed vegetables</li>
                    <li>2 eggs, beaten</li>
                    <li>2 tablespoons soy sauce</li>
                    <li>1 tablespoon sesame oil</li>
                    <li>1/4 cup chopped green onions</li>
                </ul>
                <h2>Instructions:</h2>
                <ol>
                    <li>Sauté vegetables.</li>
                    <li>Scramble eggs.</li>
                    <li>Mix with rice and season.</li>
                    <li>Serve hot!</li>
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
                    <li>2 tablespoons butter</li>
                    <li>3 garlic cloves, minced</li>
                    <li>1 cup heavy cream</li>
                    <li>1 cup grated Parmesan cheese</li>
                </ul>
                <h2>Instructions:</h2>
                <ol>
                    <li>Cook pasta.</li>
                    <li>Prepare creamy sauce.</li>
                    <li>Mix pasta with sauce.</li>
                    <li>Garnish and serve.</li>
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
