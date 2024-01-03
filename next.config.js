module.exports = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  crossOrigin: "anonymous",
  async headers() {
    return [
      {
        source: "/(.*)?",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
        ],
      },
    ];
  },
};
