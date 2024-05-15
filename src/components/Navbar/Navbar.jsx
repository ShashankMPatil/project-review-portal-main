import React from "react";
import {
	Box,
	Flex,
	Button,
	IconButton,
	Heading,
	Image,
	Stack,
} from "@chakra-ui/react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();

	const handleNotificationClick = () => {
		navigate("/notification");
	};
	const handleLogoClick = () => {
		navigate("/");
	};
	return (
		<Box px={16} py={0} borderBottom="1px solid rgba(0, 0, 0, 0.1)">
			<Flex p={2} alignItems="center" justifyContent="space-between">
				<Flex align="center" onClick={handleLogoClick} cursor="pointer">
					<Image
						src="/public/assets/BMSCE_logo.svg"
						alt="Logo"
						mr={2}
						boxSize="45px"
					/>
					<Stack spacing="0px">
						<Heading size="sm" fontWeight="normal">
							BMSCE
						</Heading>
						<Heading size="md" p={0} mt={0} fontWeight="500">
							Project Review Portal
						</Heading>
					</Stack>
				</Flex>
				<Flex alignItems="center">
					<Button
						size="md"
						mr={4}
						_hover={{ background: "teal", color: "white" }}>
						<NavLink to={"/newproject"}>New Project</NavLink>
					</Button>
					<IconButton
						variant="ghost"
						colorScheme="teal"
						aria-label="Notifications"
						fontSize="40px"
						// bg="red"
						borderRadius="full"
						onClick={handleNotificationClick}
						icon={<IoNotificationsCircleSharp />}
						mr={2}
					/>
					<IconButton
						variant="ghost"
						colorScheme="teal"
						aria-label="Profile"
						fontSize="33px"
						borderRadius="full"
						icon={<FaCircleUser />}
						ml={2}
					/>
				</Flex>
			</Flex>
		</Box>
	);
}