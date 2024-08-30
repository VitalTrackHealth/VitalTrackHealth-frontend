module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@/assets": "./assets",
            "@/components": "./src/components",
            "@/context": "./src/context",
            "@/navigation": "./src/navigation",
            "@/screens": "./src/screens",
            "@/services": "./src/services",
            "@/styles": "./src/styles",
            "@/utils": "./src/utils",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
