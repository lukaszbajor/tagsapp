import { Box, Button, Typography } from "@mui/material";

function NavigationButtons({ tags, currentPage, onPageChange, isError }) {
	const handlePreviousPage = () => {
		onPageChange(currentPage - 1);
	};

	const handleNextPage = () => {
		onPageChange(currentPage + 1);
	};

	return (
		!isError && (
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					alignSelf: "center",
				}}
			>
				<Button onClick={handlePreviousPage} disabled={currentPage === 1}>
					Previous
				</Button>
				<Typography>Page {currentPage}</Typography>
				<Button onClick={handleNextPage} disabled={tags && !tags.has_more}>
					Next
				</Button>
			</Box>
		)
	);
}

export default NavigationButtons;
