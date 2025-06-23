module.exports = function(eleventyConfig) {
  const fs = require("fs");
  eleventyConfig.addPassthroughCopy({ "images": "images" });
  eleventyConfig.addCollection("images", () => {
    return fs.readdirSync("images").map(file => ({
      url: `/images/${file}`,
      data: { alt: file }
    }));
  });
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
