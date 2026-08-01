/*==================================================
    ROUTER
==================================================*/

function setupNavigation(root = "") {

    const routes = {

        navLogo: root + "index.html",

        navAbout: root + "index.html#about",

        navInfotech: root + "infotech/index.html",

        navInstitute: root + "institute/index.html",

        navSolutions: root + "index.html#services",

        navContact: root + "index.html#contact",

        navCTA: root + "index.html#contact",

        mAbout: root + "index.html#about",

        mInfotech: root + "infotech/index.html",

        mInstitute: root + "institute/index.html",

        mSolutions: root + "index.html#services",

        mContact: root + "index.html#contact",

        mCTA: root + "index.html#contact"

    };

    Object.keys(routes).forEach(id => {

        const element = document.getElementById(id);

        if (element) {

            element.href = routes[id];

        }

    });

}