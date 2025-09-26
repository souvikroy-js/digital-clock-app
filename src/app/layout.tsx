import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import "./globals.css";

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className="bg-[url(/white-bg.jpg)] bg-cover bg-no-repeat dark:bg-[url(/dark-bg.jpg)]">
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<Header />

					<main className="container mx-auto px-6 py-3">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
