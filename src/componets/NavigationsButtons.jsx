import { Button } from "@mui/material";

function NavigationButtons({ tags, currentPage, onPageChange }) {
	const handlePreviousPage = () => {
		onPageChange(currentPage - 1);
	};

	const handleNextPage = () => {
		onPageChange(currentPage + 1);
	};

	return (
		<div>
			<Button onClick={handlePreviousPage} disabled={currentPage === 1}>
				Previous
			</Button>
			<span>Page {currentPage}</span>
			<Button onClick={handleNextPage} disabled={!tags.has_more}>
				Next
			</Button>
		</div>
	);
}

export default NavigationButtons;
