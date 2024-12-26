import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });

        // Ensure the fetch is successful and content type is image
        if (!res.ok) {
          return false;
        }

        const contentType = res.headers.get("content-type");
        if (contentType?.startsWith("image/") || contentType?.startsWith("cdn/")) {
          return true;
        }

        // Check for common image file extensions
        const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
        return imageExtensions.some(ext => url.toLowerCase().includes(ext));
      } catch (error) {
        console.error("Error fetching URL:", error);
        return false;
      }
    }, {
      message: "The provided URL does not point to a valid image.",
    }),
  pitch: z.string().min(10),
});