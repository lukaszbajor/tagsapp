/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Tag from "./Tag";
import { List } from "@mui/material";

function TagsList({ tags, isLoading, isError }) {
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error...</div>;
	return (
		<List
			sx={{
				marginTop: "20px",
				padding: "20px 15px",
				bgcolor: "#e2e2e2",
				borderRadius: "8px",
			}}
		>
			{tags.map((tag) => (
				<Tag key={tag.name} tag={tag} />
			))}
		</List>
	);
}

export default TagsList;
