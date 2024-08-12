/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"res.cloudinary.com",
			"curatedcom.s3.eu-west-2.amazonaws.com",
			"images.seeklogo.com",
			"t4.ftcdn.net",
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "maximum-development.s3.ap-southeast-2.amazonaws.com",
				port: "",
				pathname: "/*",
			},
		],
	},
};

module.exports = nextConfig;
