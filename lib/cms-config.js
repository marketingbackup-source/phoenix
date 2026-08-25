const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  throw new Error(
    "Missing WORDPRESS_API_URL. Add it to the .env.local file."
  );
}

export const cmsConfig = {
  apiUrl: WORDPRESS_API_URL.replace(/\/$/, ""),
};