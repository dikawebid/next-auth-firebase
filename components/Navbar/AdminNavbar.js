import Cookies from "js-cookie";
import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from '../../context/AuthUserContext';
import { useRouter } from "next/dist/client/router";
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Flex,
	HStack,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import NotificationBell from "./NotificationBell";
import NotifItem from "./NotifItem";

const AdminNavbar = ({ fixed, pageTitle, breadcrumbs, token }) => {
	const router = useRouter();

	const { signOut } = useAuth();

	const [totalUnreadNotif, setTotalUnreadNotif] = useState(0);
	const [navbarNotifications, setNavbarNotifications] = useState([]);

	useEffect(() => {
		getNotifTotal();
		getNotifications();
	}, []);

	// DATA REQUEST
	const getNotifTotal = useCallback(async () => {

	}, [token]);

	const getNotifications = useCallback(async () => {

	}, [token]);

	// UI
	const onNotifItemClick = (item, index) => {


		navbarNotifications[index].status = "read";
		setNavbarNotifications([...navbarNotifications]);

		totalUnreadNotif = totalUnreadNotif - 1;
		setTotalUnreadNotif(totalUnreadNotif);

		let url = `${process.env.NEXT_PUBLIC_WEB_URL}${item.url}`;
		const win = window.open(url, "_blank");
		win.focus();
	};

	const opeNotifPage = () => {
		router.push("/admin/notification");
	};

	const logout = () => {
		Cookies.remove("token");
		router.push("/admin");
	};

	// Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
	let navbarPosition = "absolute";
	let navbarFilter = "none";
	let navbarBackdrop = "blur(21px)";
	let navbarShadow = useColorModeValue(
		"0px 7px 23px rgba(0, 0, 0, 0.05)",
		"none"
	);
	let navbarBg = useColorModeValue(
		"linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
		"linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
	);
	let navbarBorder = useColorModeValue(
		"#FFFFFF",
		"rgba(255, 255, 255, 0.31)"
	);
	let secondaryMargin = "0px";

	if (fixed === true) {
		navbarPosition = "fixed";
		navbarShadow = useColorModeValue(
			"0px 7px 23px rgba(0, 0, 0, 0.05)",
			"none"
		);
		navbarBg = useColorModeValue(
			"linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
			"linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
		);
		navbarBorder = useColorModeValue(
			"#FFFFFF",
			"rgba(255, 255, 255, 0.31)"
		);
		navbarFilter = useColorModeValue(
			"none",
			"drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
		);
	}

	return (
		<Flex
			position={navbarPosition}
			boxShadow={navbarShadow}
			bg={navbarBg}
			borderColor={navbarBorder}
			filter={navbarFilter}
			backdropFilter={navbarBackdrop}
			borderWidth="1.5px"
			borderStyle="solid"
			transitionDelay="0s, 0s, 0s, 0s"
			transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
			transition-property="box-shadow, background-color, filter, border"
			transitionTimingFunction="linear, linear, linear, linear"
			alignItems={{ xl: "center" }}
			borderRadius="16px"
			display="flex"
			minH="75px"
			justifyContent={{ xl: "center" }}
			lineHeight="25.6px"
			mx="auto"
			mt={secondaryMargin}
			pb="8px"
			left={""}
			right={"30px"}
			pl={"16px"}
			pt="8px"
			top="18px"
			w={{ sm: "calc(100vw - 60px)", xl: "calc(100vw - 75px - 260px)" }}
			zIndex={1000}
		>
			<Flex
				w="100%"
				flexDirection={{ sm: "column", md: "row" }}
				alignItems={{ xl: "center" }}
			>
				<Box mb={{ sm: "8px", md: "0px" }}>
					<Breadcrumb>
						<BreadcrumbItem color="gray.700">
							<BreadcrumbLink href="#" color="gray.400">
								Pages
							</BreadcrumbLink>
						</BreadcrumbItem>

						{breadcrumbs.map((item, index) => (
							<BreadcrumbItem
								key={`brdcrmb-${index}`}
								color="gray.700"
							>
								<BreadcrumbLink
									href={item.path}
									color="gray.700"
								>
									{item.label}
								</BreadcrumbLink>
							</BreadcrumbItem>
						))}
					</Breadcrumb>

					<Text color="gray.700" fontWeight="bold">
						{pageTitle}
					</Text>
				</Box>
				<Box ms="auto" w={{ sm: "100%", md: "unset" }}>
					<HStack
						pe={{ sm: "0px", md: "16px" }}
						w={{ sm: "100%", md: "auto" }}
						spacing={4}
					>
						<Menu>
							<NotificationBell total={totalUnreadNotif} />
							<MenuList p={0}>
								<Flex flexDirection="column">
									{navbarNotifications.map((item, index) => {
										return (
											<NotifItem
												key={`navbar-notif-item-${index}`}
												item={item}
												onClick={() =>
													onNotifItemClick(
														item,
														index
													)
												}
											/>
										);
									})}

									<MenuItem
										width="300px"
										px="18px"
										py="12px"
										backgroundColor="white"
										borderTop="1px"
										borderColor="gray.100"
										onClick={opeNotifPage}
									>
										<Text
											width="100%"
											fontSize="10px"
											fontWeight="bold"
											textAlign="center"
										>
											See All Notification
										</Text>
									</MenuItem>
								</Flex>
							</MenuList>
						</Menu>
						<Menu>
							<MenuButton as={Button} variant="ghost">
								<Image
									src="/assets/icons/avatar-admin.png"
									width="32px"
									height="32px"
								/>
							</MenuButton>
							<MenuList p="16px 8px">
								<MenuItem onClick={signOut}>Logout</MenuItem>
							</MenuList>
						</Menu>
					</HStack>
				</Box>
			</Flex>
		</Flex>
	);
};

export default AdminNavbar;
