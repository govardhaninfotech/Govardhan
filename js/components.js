/*==================================================
    COMPONENT LOADER
==================================================*/

async function loadComponent(elementId, filePath) {

    try {

        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Unable to load ${filePath}`);
        }

        const html = await response.text();

        const element = document.getElementById(elementId);

        if (element) {
            element.innerHTML = html;
        }

    } catch (error) {

        console.error("Component Error:", error);

    }

}