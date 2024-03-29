import { useState } from "react";
import TagsList from "./componets/TagsList";
import { TextField } from "@mui/material";
import { useQuery } from "react-query";
import NavigationButtons from "./componets/NavigationsButtons";

function App() {
	const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);

	async function fetchTags() {
		const response = await fetch(
			`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=desc&sort=name&site=stackoverflow`
		);
		const data = await response.json();
		console.log(data.items);
		return data;
	}

	const { data, isLoading, isError } = useQuery([page, pageSize], () =>
		fetchTags()
	);

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	const handlePageSizeChange = (event) => {
		const newSize = parseInt(event.target.value);
		setPageSize(newSize);
		setPage(1);
	};

	return (
		<>
			<TextField
				type="number"
				label="Count of tags"
				onChange={handlePageSizeChange}
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
