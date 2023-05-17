const markdownIt = require("markdown-it")
const mdCarbon = require('markdown-it-carbon-web-components')
// const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function (eleventyConfig) {

    const options = {
        html: true,
    };
    const mdIt = markdownIt(options).use(mdCarbon)

    eleventyConfig.setLibrary("md", mdIt);

    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
    // eleventyConfig.addPlugin(mathjaxPlugin, {
    //     output: "chtml",
    //     inlineMath: [["$", "$"]],
    // });

    const questionBase = "_src/questions"
    for (const n of Array(20).keys()) {
        const numStr = String(n + 1).padStart(2, '0');
        eleventyConfig.addPassthroughCopy(`${questionBase}/question-${numStr}/*`)
    }

    eleventyConfig.addPassthroughCopy("_src/static")
    eleventyConfig.addPassthroughCopy({
        "node_modules/carbon-web-components/dist/settings-cdb0ef76.js": "static/settings-cdb0ef76.js",
        "node_modules/carbon-web-components/dist/class-map-4450d727.js": "static/class-map-4450d727.js",
        "node_modules/carbon-web-components/dist/focus-1f25a864.js": "static/focus-1f25a864.js",
        "node_modules/carbon-web-components/dist/decorators-91ff6009.js": "static/decorators-91ff6009.js",
        "node_modules/carbon-web-components/dist/on-b85e61ad.js": "static/on-b85e61ad.js",
        "node_modules/carbon-web-components/dist/get-e388efcb.js": "static/get-e388efcb.js",
        "node_modules/carbon-web-components/dist/host-listener-fd62dd56.js": "static/host-listener-fd62dd56.js",
        "node_modules/carbon-web-components/dist/collection-helpers-10ca40d0.js": "static/collection-helpers-10ca40d0.js",
        "node_modules/carbon-web-components/dist/if-defined-47f5c8aa.js": "static/if-defined-47f5c8aa.js",
        "node_modules/carbon-web-components/dist/16-0463cb20.js": "static/16-0463cb20.js",
        "node_modules/carbon-web-components/dist/20-a05daa51.js": "static/20-a05daa51.js",
        "node_modules/carbon-web-components/dist/spread-b309c150.js": "static/spread-b309c150.js",
        "node_modules/carbon-web-components/dist/if-non-null-e9911bd2.js": "static/if-non-null-e9911bd2.js",
        "node_modules/carbon-web-components/dist/objectSpread2-a3835d6f.js": "static/objectSpread2-a3835d6f.js",
        "node_modules/carbon-web-components/dist/defineProperty-4e84fd59.js": "static/defineProperty-4e84fd59.js",
        "node_modules/carbon-web-components/dist/link-2f065c38.js": "static/link-2f065c38.js",
        "node_modules/carbon-web-components/dist/copy-button-a5f72d1a.js": "static/copy-button-a5f72d1a.js",
        "node_modules/carbon-web-components/dist/shared-enums-1d46980b.js": "static/shared-enums-1d46980b.js",
        "node_modules/carbon-web-components/dist/16-7284973f.js": "static/16-7284973f.js",
        "node_modules/carbon-web-components/dist/content-switcher-item-0f6ea17e.js": "static/content-switcher-item-0f6ea17e.js",
        "node_modules/carbon-web-components/dist/ui-shell.min.js": "static/ui-shell.min.js",
        "node_modules/carbon-web-components/dist/link.min.js": "static/link.min.js",
        "node_modules/carbon-web-components/dist/code-snippet.min.js": "static/code-snippet.min.js",
        "node_modules/carbon-web-components/dist/accordion.min.js": "static/accordion.min.js",
        "node_modules/carbon-web-components/dist/list.min.js": "static/list.min.js",
        "node_modules/carbon-web-components/dist/tabs.min.js": "static/tabs.min.js",
        "node_modules/carbon-components/css/carbon-components.min.css": "static/carbon-components.min.css",
        "node_modules/mathjax/es5/tex-chtml-full.js": "static/tex-chtml-full.js",
        "node_modules/mathjax/es5/output/chtml": "static/output/chtml",
    })

    eleventyConfig.addCollection("pagesWithTag", function(collectionApi) {
        return function(tag) {
            return collectionApi.getFilteredByTag(tag);
        };
    });
    eleventyConfig.addCollection("pagesWithTags", function(collectionApi) {
        return function(...args) {
            return collectionApi.getFilteredByTags(...args);
        };
    });

    return {
        dir: {
            input: "_src",
            output: "_site",
            includes: "_includes",
        },
        htmlTemplateEngine: "njk",
        pathPrefix: "/qiskit-sample-test-answers/",
    }
}