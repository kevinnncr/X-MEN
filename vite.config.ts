import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import less from 'less';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#fff', // Aquí puedes cambiar el color primario de Ant Design
          // Añade más variables para personalizar
        },
      },
    },
  },
});