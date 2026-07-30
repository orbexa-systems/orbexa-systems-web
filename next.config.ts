import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/rentaviaje/privacidad",
        destination: "/copiloto/privacidad",
        permanent: true,
      },
      {
        source: "/rentaviaje/terminos",
        destination: "/copiloto/terminos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
