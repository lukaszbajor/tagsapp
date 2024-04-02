import {
	Box,
	FormControl,
	Select,
	MenuItem,
	Button,
	InputLabel,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function SortingButtons({ order, sort, onOrderChange, onSortChange }) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const handleSortChange = (event) => {
		onSortChange(event.target.value);
	};

	const handleOrderChange = () => {
		const newOrder = order === "asc" ? "desc" : "asc";
		onOrderChange(newOrder);
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				marginTop: isMobile ? "15px" : "0",
			}}
		>
			<FormControl>
				<InputLabel id="select-label">Sort by</InputLabel>
				<Select
					sx={{
						marginRight: "10px",
					}}
					labelId="select-label"
					value={sort}
					onChange={handleSortChange}
					label="Sort by"
				>
					<MenuItem value="name">Name</MenuItem>
					<MenuItem value="popular">Popular</MenuItem>
					<MenuItem value="activity">Activity</MenuItem>
				</Select>
			</FormControl>
			<Button variant="contained" color="primary" onClick={handleOrderChange}>
				Direction: {order === "asc" ? "asc" : "desc"}
			</Button>
		</Box>
	);
}

export default SortingButtons;
