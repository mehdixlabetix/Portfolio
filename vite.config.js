import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()]
})
module.exports = {
    root:".",
    build:{outDir:"./public",},
}