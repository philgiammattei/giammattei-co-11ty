const fs = require("fs")

function getPaths(data) {
    const cwd = "content" + data.page.url
    const files = fs.readdirSync(cwd, { withFileTypes: true })
    const images = files.filter(file => file.isFile() && file.name.match(/\.(jpg|jpeg|png|gif|svg)$/i))
    const imagePaths = images.map(image => data.page.url + image.name)
    return imagePaths
}

module.exports = {
    tags: [
        "posts",
        "projects"
    ],
    "layout": "layouts/post.njk",
    eleventyComputed: {
        images: data => {
            return getPaths(data)
        },
        image: data => {
            return getPaths(data)[0]
        }
    }
};
