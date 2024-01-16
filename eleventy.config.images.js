const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = eleventyConfig => {
	function relativeToInputPath(inputPath, relativeFilePath) {
		let split = inputPath.split("/");
		split.pop();

		return path.resolve(split.join(path.sep), relativeFilePath);
	}

	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		// Warning: Avif can be resource-intensive so take care!
		let formats = ["avif", "webp", "auto"];
		let file = relativeToInputPath(this.page.inputPath, src);
		let metadata = await eleventyImage(file, {
			widths: widths || ["auto"],
			formats,
			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
		});

		// TODO loading=eager and fetchpriority=high
		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};
		return eleventyImage.generateHTML(metadata, imageAttributes);
	});

	eleventyConfig.addShortcode('first_image', post => extractFirstImage(post));

	/**
 * @param {*} doc A real big object full of all sorts of information about a document.
 * @returns {String} the markup of the first image.
 */
	function extractFirstImage(doc) {
		if (!doc.hasOwnProperty('templateContent')) {
			console.warn('❌ Failed to extract image: Document has no property `templateContent`.');
			return;
		}

		const content = doc.templateContent;

		if (content.includes('<img')) {
			const imgTagBegin = content.indexOf('<img');
			const imgTagEnd = content.indexOf('>', imgTagBegin);

			return content.substring(imgTagBegin, imgTagEnd + 1);
		}

		return '';
	}
};
