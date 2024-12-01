export const viteTsConfig = `{
    "files": [],
    "references": [
      {
        "path": "./tsconfig.app.json"
      },
      {
        "path": "./tsconfig.node.json"
      }
    ],
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }`;
export const tsAppConfig = `{
    "compilerOptions": {
      // ...
      "baseUrl": ".",
      "paths": {
        "@/*": [
          "./src/*"
        ]
      }
      // ...
    }
  }
  `;
export const viteConfig = `import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
plugins: [react()],
resolve: {
    alias: {
        "@": path.resolve(__dirname, "./src"),
    },
},
})`;
export const tsConfig = `{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./*"]
      }
    }
  }
  `;
export const utils = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
`;
