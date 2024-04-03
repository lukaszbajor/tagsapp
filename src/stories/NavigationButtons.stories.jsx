import React, { useState } from "react";
import NavigationButtons from "../components/NavigationButtons";

export default {
	title: "NavigationButtons",
	component: NavigationButtons,
	argTypes: {
		currentPage: { control: "number" },
		onPageChange: { action: "page changed" },
	},
};

export const Default = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<NavigationButtons
			currentPage={currentPage}
			onPageChange={handlePageChange}
		/>
	);
};

export const PreviousPage = () => {
	const [currentPage, setCurrentPage] = useState(2);

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<NavigationButtons
			currentPage={currentPage}
			onPageChange={handlePageChange}
		/>
	);
};

export const NextPage = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<NavigationButtons
			currentPage={currentPage}
			onPageChange={handlePageChange}
		/>
	);
};
