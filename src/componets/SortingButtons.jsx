import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from "@mui/material";

function SortingSelect({ order, sort, onOrderChange, onSortChange }) {
	const handleSortChange = (event) => {
		onSortChange(event.target.value);
	};

	const handleOrderChange = () => {
		const newOrder = order === "asc" ? "desc" : "asc";
		onOrderChange(newOrder);
	};

	return (
		<>
			<FormControl>
				<InputLabel>Sort by</InputLabel>
				<Select value={sort} onChange={handleSortChange}>
					<MenuItem value="name">Name</MenuItem>
					<MenuItem value="popular">Popular</MenuItem>
					<MenuItem value="activity">Activity</MenuItem>
				</Select>
			</FormControl>
			<Button onClick={handleOrderChange}>
				Direction: {order === "asc" ? "asc" : "desc"}
			</Button>
		</>
	);
}

export default SortingSelect;
