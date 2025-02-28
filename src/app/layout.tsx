import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SanityLive } from "../../studio/live";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen`}
			>
				<NavBar />
				{children}
				<SanityLive />
				<Footer />
			</body>
		</html>
	);
}
