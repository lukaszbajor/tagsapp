/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Tag from "./Tag";
import { List, CircularProgress, Typography } from "@mui/material";

export function TagsList({ tags, isLoading, isError, error }) {
	return (
		<>
			{isError ? (
				<Typography
					sx={{
						marginTop: "20px",
						padding: "20px",
						borderRadius: "8px",
						textAlign: "center",
						color: "red",
						bgcolor: "#e2e2e2",
					}}
				>
					{error.message}
				</Typography>
			) : (
				<List
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "20px",
						padding: "20px 15px",
						bgcolor: "#e2e2e2",
						borderRadius: "8px",
					}}
				>
					{!isLoading && tags ? (
						tags.items.map((tag) => <Tag key={tag.name} tag={tag} />)
					) : (
						<CircularProgress />
					)}
				</List>
			)}
		</>
	);
}

// export default TagsList;
