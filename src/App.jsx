import { useState } from "react";
import TagsList from "./componets/TagsList";
import { Box, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "react-query";
import NavigationButtons from "./componets/NavigationsButtons";
import SortingButtons from "./componets/SortingButtons";
import axios from "axios";
import "./App.css";

function App() {
	const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);
	const [order, setOrder] = useState("asc");
	const [sort, setSort] = useState("name");

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	async function fetchTags() {
		try {
			const response = await axios.get(
				`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
			);

			return response.data;
		} catch (error) {
			let errorMessage = "Network response was not ok";

			if (error.response && error.response.data) {
				errorMessage = `Error code: ${error.response.data.error_id} | Error message: ${error.response.data.error_message} | Error name: ${error.response.data.error_name}`;
			}

			throw new Error(errorMessage);
		}
	}

	const { data, isLoading, isError, error } = useQuery(
		[page, pageSize, order, sort],
		() => fetchTags()
	);

	function handlePageChange(newPage) {
		setPage(newPage);
	}

	function handlePageSizeChange(event) {
		const newSize = parseInt(event.target.value);
		setPageSize(newSize);
		setPage(1);
		if (event.target.value === "" || newSize <= 0) {
			setPageSize(pageSize);
		}
		console.log("Error" + isError);
	}

	function handleOrderChange(newOrder) {
		setOrder(newOrder);
	}

	function handleSortChange(newSort) {
		setSort(newSort);
		setPage(1);
	}

	return (
		<Box
			sx={{
				maxWidth: "800px",
				margin: "0 auto",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: "20px",
			}}
		>
			<Typography
				variant="h3"
				sx={{
					marginBottom: "15px",
					textAlign: "center",
				}}
			>
				TagsApp
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					justifyContent: "space-between",
				}}
			>
				<TextField
					type="number"
					label="Count of tags"
					inputProps={{ min: 1 }}
					onChange={handlePageSizeChange}
				/>
				<SortingButtons
					sort={sort}
					order={order}
					onOrderChange={handleOrderChange}
					onSortChange={handleSortChange}
				/>
			</Box>
			<TagsList
				isLoading={isLoading}
				isError={isError}
				error={error}
				tags={data}
			/>

			<NavigationButtons
				currentPage={page}
				tags={data}
				isError={isError}
				onPageChange={handlePageChange}
			/>
		</Box>
	);
}

export default App;
