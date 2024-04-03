import React, { useState } from "react";
import SortingButtons from "../components/SortingButtons";

export default {
	title: "SortingButtons",
	component: SortingButtons,
	argTypes: {
		sort: {
			control: { type: "select", options: ["name", "popular", "activity"] },
		},
		order: { control: { type: "select", options: ["asc", "desc"] } },
	},
};

export const SortAndOrder = (args) => {
	const [sort, setSort] = useState(args.sort);
	const [order, setOrder] = useState(args.order);

	const handleSortChange = (value) => {
		setSort(value);
	};

	const handleOrderChange = () => {
		setOrder(order === "asc" ? "desc" : "asc");
	};

	return (
		<div>
			<SortingButtons
				{...args}
				sort={sort}
				order={order}
				onSortChange={handleSortChange}
				onOrderChange={handleOrderChange}
			/>
			<p>
				Sort: {sort}, Order: {order}
			</p>
		</div>
	);
};

SortAndOrder.args = {
	sort: "name",
	order: "asc",
};
