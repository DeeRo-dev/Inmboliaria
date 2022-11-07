
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["www.camaratru.org.pe", "www.i.pinimg.com"]
  }
}

module.exports = nextConfig
