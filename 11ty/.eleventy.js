const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
    eleventyConfig.addPlugin(syntaxHighlight);

    const questionBase = "_src/questions"
    for (const n of Array(20).keys()) {
        const numStr = String(n + 1).padStart(2, '0');
        eleventyConfig.addPassthroughCopy(`${questionBase}/question-${numStr}/*`)
    }

    eleventyConfig.addPassthroughCopy("_src/static")
    eleventyConfig.addPassthroughCopy({
        "node_modules/purecss/build/pure-min.css": "static/pure-min.css",
        "node_modules/purecss/build/grids-responsive-min.css": "static/grids-responsive-min.css",
        "node_modules/mathjax/es5/tex-mml-chtml.js": "static/tex-mml-chtml.js",
    })

    return {
        dir: {
            input: "_src",
            output: "_site",
            includes: "_includes",
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        pathPrefix: "/qiskit-sample-test-answers/",
    }
}