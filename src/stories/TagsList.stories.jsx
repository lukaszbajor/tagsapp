import { TagsList } from "../components/TagsList";

export default {
	title: "TagsList",
	component: TagsList,
	argTypes: {
		tags: { control: "object" },
		isLoading: { control: "boolean" },
		isError: { control: "boolean" },
		error: { control: "object" },
	},
};

export const Default = (args) => {
	const { tags, isLoading, isError, error } = args;
	return TagsList({ tags, isLoading, isError, error });
};

Default.args = {
	tags: {
		items: [
			{ name: "Tag 1", count: 10 },
			{ name: "Tag 2", count: 20 },
			{ name: "Tag 3", count: 15 },
		],
	},
	isLoading: false,
	isError: false,
	error: null,
};

export const Loading = (args) => {
	const { tags, isLoading, isError, error } = args;
	return TagsList({ tags, isLoading, isError, error });
};
Loading.args = {
	tags: null,
	isLoading: true,
	isError: false,
	error: null,
};

export const Error = (args) => {
	const { tags, isLoading, isError, error } = args;
	return TagsList({ tags, isLoading, isError, error });
};
Error.args = {
	tags: null,
	isLoading: false,
	isError: true,
	error: { message: "An error occurred while fetching tags." },
};

export const EmptyTags = (args) => {
	const { tags, isLoading, isError, error } = args;
	return TagsList({ tags, isLoading, isError, error });
};
EmptyTags.args = {
	tags: { items: [] },
	isLoading: false,
	isError: false,
	error: null,
};
