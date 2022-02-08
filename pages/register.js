import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as yup from "yup";
import Cookies from "js-cookie";
import {
	Button,
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Image,
	Text,
	useToast,
} from "@chakra-ui/react";

import AuthLayout from "../layouts/Auth";
import { useAuth } from "../context/AuthUserContext";

const head = {
	title: "Register | Undang Kamu",
	desc: "Undang Kamu App",
};

const Register = () => {
	const router = useRouter();
	const toast = useToast();
	const { createUserWithEmailAndPassword, authUser, loading } = useAuth();

	const [form, setForm] = useState({
		email: {
			value: "",
			isValid: true,
		},
		password: {
			value: "",
			isValid: true,
		},
		password2: {
			value: "",
			isValid: true,
		},
	});
	const [isLoading, setIsLoading] = useState(false);

	// Listen for changes on loading and authUser, redirect if needed
	useEffect(() => {
		if (authUser) router.push("/dashboard");
	}, [authUser, loading]);

	// DATA REQUEST
	const postRegister = async () => {
		setIsLoading(true);


		let email = form.email.value;
		let passwordOne = form.password.value;
		let passwordTwo = form.password2.value;

		if (passwordOne === passwordTwo)
			createUserWithEmailAndPassword(email, passwordOne)
				.then((authUser) => {
					console.log("Success. The user is created in firebase");
					router.push("/dashboard");
				})
				.catch((error) => {
					onRegisterFail(error.message);
				});
		else onRegisterFail("Password do not match");
	};

	// UI
	const onRegisterFail = (description) => {
		toast({
			description: description ?? "Register Fail",
			status: "error",
			position: "top-right",
			duration: 3000,
			isClosable: true,
		});

		setTimeout(() => {
			setIsLoading(false);
		}, 1200);
	};

	const submitRegister = () => {
		if (isFormValid()) {
			postRegister();
		}
	};

	const isFormValid = () => {
		let valid = true;

		if (form.email.value === "") {
			valid = false;
			form.email.isValid = false;
		} else {
			if (yup.string().email().isValidSync(form.email.value)) {
				form.email.isValid = true;
			} else {
				valid = false;
				form.email.isValid = false;
			}
		}

		if (form.password.value === "") {
			valid = false;
			form.password.isValid = false;
		} else {
			form.password.isValid = true;
		}

		if (form.password2.value === "") {
			valid = false;
			form.password2.isValid = false;
		} else {
			form.password2.isValid = true;
		}

		setForm({ ...form });

		return valid;
	};

	const onEmailChange = (e) => {
		form.email.value = e.target.value.toString();
		setForm({ ...form });
	};

	const onPasswordChange = (e) => {
		form.password.value = e.target.value.toString();
		setForm({ ...form });
	};

	const onPassword2Change = (e) => {
		form.password2.value = e.target.value.toString();
		setForm({ ...form });
	};

	return (
		<AuthLayout head={head}>
			<Center height="100vh" backgroundColor="primary.400">
				<Flex
					direction="column"
					w="445px"
					background="transparent"
					borderRadius="8px"
					p="40px"
					bg="white"
					boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
				>
					<Text
						fontSize="md"
						fontWeight="bold"
						textAlign="center"
						mb="20px"
					>
						Register
					</Text>

					<FormControl
						id="input-email"
						mb="24px"
						isInvalid={!form.email.isValid}
						isRequired
					>
						<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
							Email
						</FormLabel>
						<Input
							type="email"
							placeholder="Email Address"
							size="lg"
							fontSize="sm"
							focusBorderColor="primary.300"
							errorBorderColor="red.300"
							isInvalid={!form.email.isValid}
							onChange={onEmailChange}
						/>
						<FormErrorMessage>email required</FormErrorMessage>
					</FormControl>
					<FormControl
						id="input-pass"
						mb="24px"
						isInvalid={!form.password.isValid}
						isRequired
					>
						<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
							Password
						</FormLabel>
						<Input
							type="password"
							placeholder="Password"
							size="lg"
							fontSize="sm"
							focusBorderColor="primary.300"
							errorBorderColor="red.300"
							isInvalid={!form.password.isValid}
							onChange={onPasswordChange}
						/>
						<FormErrorMessage>password required</FormErrorMessage>
					</FormControl>
					<FormControl
						id="input-pass"
						mb="24px"
						isInvalid={!form.password2.isValid}
						isRequired
					>
						<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
							Confirm Password
						</FormLabel>
						<Input
							type="password"
							placeholder="Password"
							size="lg"
							fontSize="sm"
							focusBorderColor="primary.300"
							errorBorderColor="red.300"
							isInvalid={!form.password2.isValid}
							onChange={onPassword2Change}
						/>
						<FormErrorMessage>password required</FormErrorMessage>
					</FormControl>
					<Button
						type="submit"
						colorScheme="primary"
						fontWeight="bold"
						fontSize="14px"
						w="100%"
						h="45"
						mt="24px"
						isLoading={isLoading}
						onClick={submitRegister}
					>
						Register
					</Button>
				</Flex>
			</Center>
		</AuthLayout>
	);
};

export async function getServerSideProps({ req }) {
	const { token } = req.cookies;

	if (token) {
		return {
			redirect: {
				permanent: false,
				destination: "/admin/home",
			},
		};
	}

	return {
		props: {},
	};
}

export default Register;
