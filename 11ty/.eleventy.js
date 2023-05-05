module.exports = function (eleventyConfig) {

    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

    const questionFiles = {}
    const questionBase = "_src/questions"
    for (const n of Array(20).keys()) {
        const numStr = String(n).padStart(2, '0');
        questionFiles[`${questionBase}/images/question-${n}.png`]= `questions/Question-${numStr}/images/question-${n}.png`;
    }
    eleventyConfig.addPassthroughCopy(questionFiles);

    eleventyConfig.addPassthroughCopy("_src/static")
    eleventyConfig.addPassthroughCopy({
        "node_modules/purecss/build/pure-min.css": "static/pure-min.css",
        "node_modules/purecss/build/grids-responsive-min.css": "static/grids-responsive-min.css",
        "node_modules/mathjax/es5/tex-mml-chtml.js": "static/tex-mml-chtml.js",
    })

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "_src",
            output: "_site",
            includes: "_includes",
        }
    }
}