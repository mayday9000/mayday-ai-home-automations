/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Legacy route from the previous site; carriers/registrars may have it on file.
      {
        source: "/terms-and-conditions-privacy-policy",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
