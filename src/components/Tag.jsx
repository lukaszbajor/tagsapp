/* eslint-disable react/prop-types */
import { ListItem, ListItemText } from "@mui/material";
function Tag({ tag }) {
	return (
		<ListItem
			sx={{
				marginTop: "5px",
				bgcolor: "#63a9d8",
				borderRadius: "4px",
			}}
		>
			<ListItemText
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					color: "#ffffff",
				}}
				primary={<strong>{tag.name}</strong>}
				secondary={tag.count}
			/>
		</ListItem>
	);
}

export default Tag;
