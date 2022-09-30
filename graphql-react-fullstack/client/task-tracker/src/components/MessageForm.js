import { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export default function MessageForm() {

	const CREATE_MESSAGE = gql`
		mutation createMessage(
			$title: String!
			$content: String!
			$author: String!
		) {
			createMessage(title: $title, content: $content, author: $author) {
				_id
				title
			}
		}
	`;

	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="card">
					<div className="card-body">
						<form
							onSubmit={( e ) => {
								e.preventDefault();
								const variables = { title: title, author: author, content: content };
								return console.log( 'creating document', variables );
							}}
						>
							<div class="mb-3">
								<label for="title" class="form-label">
									Title
								</label>
								<input
									type="text"
									className="form-control"
									value={title}
									onChange ={ (e) => setTitle(e.target.value)}
								/>
							</div>
							<div class="mb-3">
								<label for="author" class="form-label">
									Author
								</label>
								<input
									type="text"
									className="form-control"
									value={author}
									onChange ={ (e) => setAuthor(e.target.value)}
								/>
							</div>
							<div class="mb-3">
								<label for="content" class="form-label">
									Content
								</label>
								<input
									type="text"
									className="form-control"
									value={content}
									onChange ={ (e) => setContent(e.target.value)}
								/>
							</div>

							<button class="btn btn-success btn-block">Save</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
