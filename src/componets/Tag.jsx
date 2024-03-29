/* eslint-disable react/prop-types */
import { ListItem, ListItemText } from "@mui/material";
function Tag({ tag }) {
	return (
		<ListItem
			sx={{
				marginTop: "5px",
				border: "1px solid blue",
			}}
		>
			<ListItemText
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
				primary={<strong>{tag.name}</strong>}
				secondary={tag.count}
			/>
		</ListItem>
	);
}

export default Tag;
