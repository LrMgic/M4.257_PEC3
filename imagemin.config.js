module.exports = {
    "gifsicle": { "optimizationLevel": 1, "interlaced": false, "colors": 10 },
    "mozjpeg": { "quality": [0.25, 0.5] },
    "pngquant": { "quality": [0.25, 0.5] },
    "svgo": {
        "plugins": [
            { "removeViewBox": false },
            { "cleanupIDs": true },
            { "minifyStyles": false }
        ]
    },
    "webp": { "quality": 10 }
}