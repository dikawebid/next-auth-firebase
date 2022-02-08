import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import { Center } from "@chakra-ui/react";
import AdminLayout from "../layouts/Backoffice";

const LoggedIn = () => {
	const { authUser, loading, signOut } = useAuth();
	const router = useRouter();

	// Listen for changes on loading and authUser, redirect if needed
	useEffect(() => {
		if (!loading && !authUser) router.push("/login");
	}, [authUser, loading]);

	const head = {
		title: "Dashboard | Undang Kamu",
		desc: "Undang Kamu",
	};

	const pageTitle = "Dashboard";

	const breadcrumbs = [
		{
			label: "Dashboard",
			path: "/dashboard",
		},
	];

	return (
		<AdminLayout
			head={head}
			pageTitle={pageTitle}
			breadcrumbs={breadcrumbs}
			loading={loading}
			authUser={authUser}
		>
			<Center>
				{authUser && (
					<div>
						Congratulations {authUser?.email}! You are logged in.
					</div>
				)}{" "}
			</Center>
		</AdminLayout>
	);
};

export default LoggedIn;
