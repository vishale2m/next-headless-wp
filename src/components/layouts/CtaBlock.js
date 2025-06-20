import Button from "../button";
export default function CtaBlock({ title, description, button, }) {
	return (
		<section style={{ padding: '2rem', background: `#00000020` }}>
			<div className="container">
				<h1>{title}</h1>
				{description && (
					<div dangerouslySetInnerHTML={{ __html: description }} />
				)}
				{button && (
					<Button
						href={button.url}
						target={button.target || "_self"}
					>
						{button.title}
					</Button>
				)}
			</div>
		</section>
	);
}