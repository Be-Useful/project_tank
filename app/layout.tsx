import type { Metadata } from "next";
import localFont from "next/font/local"; // Use the correct import for local fonts
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/toaster";

// Correct path to the fonts relative to `layout.tsx`
const workSans = localFont({
  src: [
    { path: "./fonts/WorkSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/WorkSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/WorkSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/WorkSans-Thin.ttf", weight: "200", style: "normal" },
    { path: "./fonts/WorkSans-ExtraLight.ttf", weight: "100", style: "normal" },
  ],
  variable: "--font-work-sans", // Correctly defines the custom CSS variable
  display: "swap", // Adds a display property for better font rendering behavior
});

export const metadata: Metadata = {
  title: "Project Tank",
  description: "Launh your project sky high using project tank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
