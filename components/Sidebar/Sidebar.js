import React, { useRef } from "react";
import { Box, Link, Image, Stack, Text } from "@chakra-ui/react";
import { FaHome, FaUser, FaInfo } from "react-icons/fa";
import {
	MdMap,
	MdOutlineShoppingCart,
} from "react-icons/md";
import SidebarMenu from "./Menu";
import { Separator } from "../Separator/Separator";

const sidebarMenuRoutes = [
	{
		name: "Dashboard",
		path: "dashboard",
		url: "/dashboard",
		icon: <FaHome color="inherit" />,
	},
	{
		name: "Order",
		path: "order",
		url: "/order",
		icon: <MdOutlineShoppingCart color="inherit" />,
	},
	{
		name: "Template",
		path: "template",
		url: "/template",
		icon: <MdMap color="inherit" />,
	},
	{
		name: "User",
		path: "user",
		url: "/user",
		icon: <FaUser color="inherit" />,
	},
	{
		name: "Information",
		path: "info",
		url: "/info",
		icon: <FaInfo color="inherit" />,
	},
];

const Sidebar = ({ ...props }) => {
	const mainPanel = useRef();

	// SIDEBAR
	return (
		<Box
			ref={mainPanel}
			display={{ sm: "none", xl: "block" }}
			position="fixed"
			bg="gray.50"
			{...props}
		>
			<Box
				bg="white"
				transition={"0.2s linear"}
				w="260px"
				maxW="260px"
				ms={{ sm: "16px" }}
				my={{ sm: "16px" }}
				h="calc(100vh - 32px)"
				ps="20px"
				pe="20px"
				m="16px 0px 16px 16px"
				borderRadius="16px"
			>
				<Box pt={"25px"} mb="12px">
					<Link
						href={`/admin/home`}
						display="flex"
						lineHeight="100%"
						mb="30px"
						fontWeight="bold"
						justifyContent="center"
						alignItems="center"
						fontSize="11px"
					>
						<Image
							src="/assets/icons/logo-app.png"
							w="36px"
							h="36px"
						/>
						<Text fontSize="sm" mt="3px" ml="16px">
							{process.env.NEXT_PUBLIC_APP_NAME ?? "Undang Kamu"}
						</Text>
					</Link>
					<Separator></Separator>
				</Box>
				<Stack direction="column" mb="40px">
					<SidebarMenu routes={sidebarMenuRoutes} />
				</Stack>
			</Box>
		</Box>
	);
};

export default Sidebar;
