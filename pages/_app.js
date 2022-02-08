import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import { AuthUserProvider } from "../context/AuthUserContext";

import "../styles/globals.css";

const colors = {
	primary: {
		900: "#002f43",
		800: "#00445b",
		700: "#065770",
		600: "#1c6b87",
		500: "#2b7998",
		400: "#4d8daa",
		300: "#69a2bd",
		200: "#8dbed6",
		100: "#addbef",
		50: "#d1f2ff",
	},
	secondary: {
		900: "#f7731e",
		800: "#f99122",
		700: "#faa124",
		600: "#fbb327",
		500: "#fcc12c",
		400: "#fdc93b",
		300: "#fdd45a",
		200: "#fddf88",
		100: "#feecb6",
		50: "#fff8e2",
	},
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<AuthUserProvider>
				<Component {...pageProps} />
			</AuthUserProvider>
		</ChakraProvider>
	);
}

export default MyApp;
