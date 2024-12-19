import { useParams } from "react-router-dom";

function Article() {
	const { id } = useParams();

	return (
		<div>
			<h1>Hello from Article {id}</h1>
			<p>Bonjour</p>
		</div>
	);
}

export default Article;
