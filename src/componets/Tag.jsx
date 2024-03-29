/* eslint-disable react/prop-types */
import { ListItem, ListItemText } from "@mui/material";
function Tag({ tag }) {
	return (
		<ListItem>
			<ListItemText
				primary={<strong>{tag.name}</strong>}
				secondary={tag.count}
			/>
		</ListItem>
	);
}

export default Tag;
