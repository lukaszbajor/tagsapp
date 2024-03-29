import { useState } from "react";
import TagsList from "./componets/TagsList";
import { TextField } from "@mui/material";
import { useQuery } from "react-query";
import NavigationButtons from "./componets/NavigationsButtons";
import SortingSelect from "./componets/SortingButtons";

function App() {
	const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);
	const [order, setOrder] = useState("desc");
	const [sort, setSort] = useState("popular");

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
		<>
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
		</>
	);
}

export default App;
