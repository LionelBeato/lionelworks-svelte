// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///Users/leo/Projects/svelte/my-app/vite.config.js";
var file = fileURLToPath(new URL("package.json", __vite_injected_original_import_meta_url));
var json = readFileSync(file, "utf8");
var pkg = JSON.parse(json);
var config = {
  plugins: [sveltekit()],
  define: {
    VERSION: pkg
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGVvL1Byb2plY3RzL3N2ZWx0ZS9teS1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9sZW8vUHJvamVjdHMvc3ZlbHRlL215LWFwcC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGVvL1Byb2plY3RzL3N2ZWx0ZS9teS1hcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5cbmNvbnN0IGZpbGUgPSBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJ3BhY2thZ2UuanNvbicsIGltcG9ydC5tZXRhLnVybCkpO1xuY29uc3QganNvbiA9IHJlYWRGaWxlU3luYyhmaWxlLCAndXRmOCcpO1xuY29uc3QgcGtnID0gSlNPTi5wYXJzZShqc29uKTtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuY29uc3QgY29uZmlnID0ge1xuICAgIHBsdWdpbnM6IFtzdmVsdGVraXQoKV0sXG4gICAgZGVmaW5lOiB7XG4gICAgICAgICAgICBWRVJTSU9OOiBwa2csXG4gICAgICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXFSLFNBQVMsaUJBQWlCO0FBQy9TLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMscUJBQXFCO0FBRjRJLElBQU0sMkNBQTJDO0FBSTNOLElBQU0sT0FBTyxjQUFjLElBQUksSUFBSSxnQkFBZ0Isd0NBQWUsQ0FBQztBQUNuRSxJQUFNLE9BQU8sYUFBYSxNQUFNLE1BQU07QUFDdEMsSUFBTSxNQUFNLEtBQUssTUFBTSxJQUFJO0FBRzNCLElBQU0sU0FBUztBQUFBLEVBQ1gsU0FBUyxDQUFDLFVBQVUsQ0FBQztBQUFBLEVBQ3JCLFFBQVE7QUFBQSxJQUNBLFNBQVM7QUFBQSxFQUNiO0FBQ1I7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=