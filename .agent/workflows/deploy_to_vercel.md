---
description: How to deploy the frontend to Vercel
---

# Deploying to Vercel

Follow these steps to deploy your application to Vercel.

## Option 1: Using Vercel CLI (Recommended)

1.  **Install Vercel CLI** (if not installed):
    ```bash
    npm install -g vercel
    ```

2.  **Login to Vercel**:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    Run the following command in your project root (`f:\frontend`):
    ```bash
    vercel
    ```

4.  **Follow the Prompts**:
    - Set up and deploy? **Y**
    - Which scope? (Select your account)
    - Link to existing project? **N**
    - Project name? (Press Enter for default or type a name)
    - In which directory is your code located? **./**
    - Want to modify these settings? **N** (We already created `vercel.json` and `vite.config.js` handles the rest)

5.  **Production Deployment**:
    Once you are happy with the preview, run:
    ```bash
    vercel --prod
    ```

## Option 2: Using GitHub

1.  Push your code to a GitHub repository.
2.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
3.  Click **Add New...** -> **Project**.
4.  Import your GitHub repository.
5.  Vercel will automatically detect Vite. Click **Deploy**.

> [!NOTE]
> I have already created a `vercel.json` file to ensure that routing works correctly (so refreshing the page doesn't give a 404 error).
