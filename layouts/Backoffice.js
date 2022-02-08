import Head from "next/head";
import { Box, Portal } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbar/AdminNavbar";

const BackofficeLayout = ({
	head,
	pageTitle,
	breadcrumbs,
	loading,
	children,
	...props
}) => (
	<>
		<Head>
			<title>{head.title ?? "Admin | Social Traveling"}</title>
			<meta
				name="description"
				content={head.desc ?? "Admin | Social Traveling App"}
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Box {...props}>
			<Sidebar />
			<Box
				bg="gray.50"
				minH="100vh"
				w={{
					base: "100%",
					xl: "calc(100% - 275px)",
				}}
				style={{
					float: "right",
					maxWidth: "100%",
					overflow: "auto",
					position: "relative",
					maxHeight: "100%",
					transition:
						"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
					transitionDuration: ".2s, .2s, .35s",
					transitionProperty: "top, bottom, width",
					transitionTimingFunction: "linear, linear, ease",
				}}
			>
				<Portal>
					<AdminNavbar
						pageTitle={pageTitle}
						breadcrumbs={breadcrumbs}
						fixed={true}
					/>
				</Portal>
				<Box ms="auto" me="auto" ps="15px" pe="15px">
					<Box p="110px 15px" minHeight="calc(100vh - 123px)">
						{children}
					</Box>
				</Box>
			</Box>
		</Box>
	</>
);

export default BackofficeLayout;
