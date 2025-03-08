const nextConfig = {  // ✅ Remove Type Annotation
  webpack: (config:any, { isServer }:any) => {
    config.plugins = config.plugins?.filter(
      (plugin:any) => plugin.constructor.name !== "MiniCssExtractPlugin"
    );
    return config;
  },
};

export default nextConfig;
