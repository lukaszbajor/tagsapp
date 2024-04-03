import Tag from "../components/Tag";

export default {
	title: "Tag",
	component: Tag,
	argTypes: {
		tag: { control: "object" },
	},
};

export const Default = (args) => {
	const { tag } = args;
	return <Tag tag={tag} />;
};

Default.args = {
	tag: { name: "Tag 1", count: 10 },
};

export const DifferentTag = (args) => {
	const { tag } = args;
	return <Tag tag={tag} />;
};

DifferentTag.args = {
	tag: { name: "Tag 2", count: 20 },
};

export const EmptyTag = (args) => {
	const { tag } = args;
	return <Tag tag={tag} />;
};

EmptyTag.args = {
	tag: { name: "", count: 0 },
};

export const LargeTag = (args) => {
	const { tag } = args;
	return <Tag tag={tag} />;
};

LargeTag.args = {
	tag: {
		name: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eius facilis esse recusandae doloremque maiores quam, porro tempore maxime facere, provident ad vero culpa ducimus voluptatibus quo reiciendis aperiam. Ad.
Eius asperiores quis earum tenetur pariatur sed voluptatibus aspernatur, facilis dolores voluptates quo repellat doloremque ducimus ex ab obcaecati totam eum fugit fugiat architecto adipisci quam laudantium! Necessitatibus, iure eaque.
Libero, optio quaerat eveniet laborum impedit, velit, accusantium quae obcaecati quasi dolor sequi id unde recusandae eum assumenda? Dicta esse dolorum beatae vel. Numquam excepturi labore obcaecati dolores voluptatem! Dignissimos?
Aliquam ab magnam maiores voluptatibus dolore quas amet impedit, dignissimos, illo blanditiis esse maxime neque quae delectus ipsum animi in nulla quam. Dignissimos fuga corporis officia nisi ipsum voluptate ullam?
Quibusdam tempora cumque error quos? Natus quod eius quis sint hic, molestias laboriosam voluptatibus alias harum rerum error laudantium beatae, vero corrupti iste! Fugit aliquam magni commodi ratione officia! Delectus!
!`,
		count: 100000,
	},
};
