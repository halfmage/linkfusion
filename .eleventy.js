const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/add-link.js");
    eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "linkfusion", // The serverless function name from your permalink object
        functionsDir: "./netlify/functions/",
    });
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};