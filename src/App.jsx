import { useState } from "react";
import TagsList from "./componets/TagsList";
import { Box, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "react-query";
import NavigationButtons from "./componets/NavigationsButtons";
import SortingSelect from "./componets/SortingButtons";
import "./App.css";

function App() {
	const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);
	const [order, setOrder] = useState("asc");
	const [sort, setSort] = useState("name");

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	async function fetchTags() {
		const response = await fetch(
			`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
		);
		const data = await response.json();
		console.log(data.items);
		return data;
	}

	const { data, isLoading, isError } = useQuery(
		[page, pageSize, order, sort],
		() => fetchTags()
	);

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	const handlePageSizeChange = (event) => {
		const newSize = parseInt(event.target.value);
		setPageSize(newSize);
		setPage(1);

		if (event.target.value === "") {
			setPageSize(pageSize);
		}
	};

	const handleOrderChange = (newOrder) => {
		setOrder(newOrder);
	};

	const handleSortChange = (newSort) => {
		setSort(newSort);
	};

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
					onChange={handlePageSizeChange}
				/>
				<SortingSelect
					sort={sort}
					order={order}
					onOrderChange={handleOrderChange}
					onSortChange={handleSortChange}
				/>
			</Box>
			<TagsList
				tags={data ? data.items : []}
				isLoading={isLoading}
				isError={isError}
			/>
			<NavigationButtons
				currentPage={page}
				tags={data ? data : {}}
				onPageChange={handlePageChange}
			/>
		</Box>
	);
}

export default App;
