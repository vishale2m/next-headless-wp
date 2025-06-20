import Button from "../button";
export default function HeroBanner({ title, subtitle, description, button, backgroundImage }) {
	return (
		<section className="hero-banner" style={{ padding: '2rem', background: `url(${backgroundImage.node.mediaItemUrl})` }}>
			<div className="container">
				<h3>{subtitle}</h3>
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