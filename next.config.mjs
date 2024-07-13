/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
         },
      
    ],
  }
  //  module: {
  //     rules: [
  //       {
  //         test: /\.(woff|woff2|eot|ttf|otf)$/,
  //         use: 'file-loader',
  //       },
  //     ],
  //   },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// export const nextConfig = {
//     async headers() {
//         return [
//             {
//                 // matching all API routes
//                 source: "/:path*",
//                 headers: [
//                     // other headers omitted for brevity...
//                     { key: "Cross-Origin-Opener-Policy", value: "same-origin" }
//                 ]
//             }
//         ]
//     }
// }