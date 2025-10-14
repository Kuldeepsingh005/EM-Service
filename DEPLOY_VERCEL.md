# Deploying the EM-Service frontend to Vercel

This repository contains a React + Vite frontend in `em-project-view` and a Spring Boot backend in `src/main`. Vercel is ideal for the frontend (static), while the backend needs a Java host (Railway, Render, Heroku, etc.).

Steps to deploy the frontend on Vercel

1. Sign in to Vercel and create a new project.
2. Import from Git (select this repository).
3. When prompted for the project root, set it to `em-project-view` (or Vercel will use the root `vercel.json` which points to it).
4. Build & output settings (if asked):
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. In Vercel Dashboard > Settings > Environment Variables add:
   - Key: `VITE_API_BASE_URL`
   - Value: the full URL to your backend API, e.g. `https://your-backend.example.com/employees`
   - Add for both Production and Preview as needed.
6. Deploy. The provided `vercel.json` at the repo root directs Vercel to build `em-project-view` and sets SPA routing so client-side routes don't 404.

Troubleshooting 404 on Vercel

- If you see a 404 for client-side routes (e.g. `/employees/123`), confirm `vercel.json` exists at the repo root and contains the routes rewrite. The repo also contains `em-project-view/vercel.json` which is optional but harmless.
- If assets are missing, ensure `index.html` references are relative (Vite's default `/src/main.jsx` is fine) and that `dist` is generated.
- If the frontend can't reach the backend, open browser devtools and check network requests. Make sure `VITE_API_BASE_URL` is set in Vercel and includes the `/employees` path (or set it to the base origin and update frontend accordingly).

Backend deployment suggestions

- Railway / Render / Fly.io / Heroku: These support running a Spring Boot JAR. Build the backend (Maven) and deploy following those providers' docs. After deploying, set `VITE_API_BASE_URL` to the backend URL plus `/employees`.
- If you want a single deploy for both frontend and backend, consider packaging the frontend build into `src/main/resources/static` in the Spring Boot app and deploying the app as one unit. That approach is outside Vercel's static hosting.

Summary of changes in this repo to help Vercel deployment

- `vercel.json` (root) — points Vercel to `em-project-view` package.json and sets SPA routing.
- `em-project-view/vercel.json` — optional per-project config that rewrites routes to `index.html`.
- `em-project-view/src/service/EmployeeService.jsx` — now reads `import.meta.env.VITE_API_BASE_URL` so you can configure the backend URL as an environment variable on Vercel.
