/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'data.ifiniti.co',
				port: '',
				pathname: '/ifc/**',
			}
		]
	}
}

module.exports = nextConfig
