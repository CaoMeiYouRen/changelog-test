const { name } = require('./package.json')
module.exports = {
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                "config": "conventional-changelog-cmyr-config"
                // "config": "./libs/conventional-changelog-cmyr-config/index.js"
            }
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                "config": "conventional-changelog-cmyr-config"
                // "config": "./libs/conventional-changelog-cmyr-config/index.js"
            }
        ],
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md",
                "changelogTitle": "# " + name
            }
        ],
        '@semantic-release/npm',
        '@semantic-release/github',
        [
            "@semantic-release/git",
            {
                "assets": [
                    "src",
                    "CHANGELOG.md",
                    "package.json"
                ]
            }
        ]
    ]
}
