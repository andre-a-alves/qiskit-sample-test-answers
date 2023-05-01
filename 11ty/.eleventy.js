module.exports = function (eleventyConfig) {

    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

    const questionFiles = {}
    const questionBase = "_src/questions"
    for (const n of Array(20).keys()) {
        const numStr = String(n).padStart(2, '0');
        questionFiles[`${questionBase}/Question-${numStr}_files`] = `questions/Question-${numStr}/Question-${numStr}_files`;
        questionFiles[`${questionBase}/images/question-${n}.png`]= `questions/Question-${numStr}/images/question-${n}.png`;
    }
    eleventyConfig.addPassthroughCopy(questionFiles);

    eleventyConfig.addPassthroughCopy("_src/static")

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