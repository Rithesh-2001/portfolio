/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'tse1.mm.bing.net',
        'firebasestorage.googleapis.com',
        'mycdn.com'
        // Add more domains here if you add more image sources later
      ],
    },
  };
  
  export default nextConfig;
  