import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { webConfig } from "./web-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: webConfig.title,
	description: webConfig.description,
	authors: {
		name: webConfig.authors.name,
		url: webConfig.authors.url,
	},
  keywords: webConfig.keywords,
  creator: webConfig.creator,
  publisher: webConfig.creator,
  openGraph: {
    title: webConfig.title,
    description: webConfig.description,
    url: webConfig.baseUrl,
  }

};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
