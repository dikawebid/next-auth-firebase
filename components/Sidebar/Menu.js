import React from "react";
import { useRouter } from "next/dist/client/router";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import CustomLink from "../CustomLink";
import IconBox from "../Icons/IconBox";

const ActiveMenu = ({ item }) => {
	return (
		<CustomLink href={item.url} _hover={{ textDecoration: "none" }}>
			<Button
				boxSize="initial"
				justifyContent="flex-start"
				alignItems="center"
				boxShadow="none"
				bg="transparent"
				transition={"0.2s linear"}
				mb={{ xl: "12px" }}
				mx={{ xl: "auto" }}
				ps={{ sm: "10px", xl: "16px" }}
				py="12px"
				borderRadius="15px"
				_hover="none"
				w="100%"
				_active={{
					bg: "inherit",
					transform: "none",
					borderColor: "transparent",
				}}
				_focus={{ boxShadow: "0px 7px 11px rgba(0, 0, 0, 0.04)" }}
			>
				<Flex>
					<IconBox
						bg="primary.500"
						color="white"
						h="30px"
						w="30px"
						me="12px"
						transition="0.2s linear"
					>
						{item.icon}
					</IconBox>
					<Text color="gray.700" ml="8px" my="auto" fontSize="sm">
						{item.name}
					</Text>
				</Flex>
			</Button>
		</CustomLink>
	);
};

const InactiveMenu = ({ item }) => {
	return (
		<CustomLink href={item.url} _hover={{ textDecoration: "none" }}>
			<Button
				boxSize="initial"
				justifyContent="flex-start"
				alignItems="center"
				bg="transparent"
				mb={{ xl: "12px" }}
				mx={{ xl: "auto" }}
				py="12px"
				ps={{ sm: "10px", xl: "16px" }}
				borderRadius="15px"
				_hover="none"
				w="100%"
				_active={{
					bg: "inherit",
					transform: "none",
					borderColor: "transparent",
				}}
				_focus={{ boxShadow: "none" }}
			>
				<Flex>
					<IconBox
						bg="white"
						color="primary.500"
						h="30px"
						w="30px"
						me="12px"
						transition="0.2s linear"
					>
						{item.icon}
					</IconBox>
					<Text color={"gray.400"} ml="8px" my="auto" fontSize="sm">
						{item.name}
					</Text>
				</Flex>
			</Button>
		</CustomLink>
	);
};

const SidebarMenu = ({ routes }) => {
	const router = useRouter();
	let routePaths = router.pathname.split("/");

	return (
		<Box>
			{routes.map((item, index) =>
				item.path === routePaths[1] ? (
					<ActiveMenu key={`sidemenu-${index}`} item={item} />
				) : (
					<InactiveMenu key={`sidemenu-${index}`} item={item} />
				)
			)}
		</Box>
	);
};

export default SidebarMenu;
