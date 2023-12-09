const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	images: { unoptimized: true },
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}

module.exports = nextConfig
