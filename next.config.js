/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['links.papareact.com']
  },
  env:{
    mapbox_key:"pk.eyJ1IjoiamFjb2thNDE4MyIsImEiOiJjbDA5ZGd0eXMwMDZ3M2pxeDBodzZmNjF1In0.wezTJWakVi8OclZt8QQLzw"
  }
}

module.exports = nextConfig
