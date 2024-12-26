module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      }
    ],
    dangerouslyAllowSVG: true
  },
  experimental: {
    ppr: 'incremental',
    after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivityPosition: 'bottom-right',
    buildActivity: true,
  },
};