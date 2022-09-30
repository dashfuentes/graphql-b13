import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

export const GET_MESSAGES = gql`
	{
		getMessages {
			_id
			title
			author
			content
		}
	}
`;

const MessageList = () => {
	const { loading, error, data } = useQuery(GET_MESSAGES);

	if (error) {
		return <h1>Error : {{ error }}</h1>;
	}

	if (data) {
		console.log(data);
	}

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				 { data && data.getMessages.map(({ _id, title, author, content } ) => (
					<div key={_id} className="card m-2">
						<div className="card-body">
							<h4>{title}</h4>
							<p>{author}</p>
							<p>{ content}</p>
						 </div>
						 <button className="btn btn-danger"> Delete</button>
					</div>
				))} 
			</div>
			
		</div>
	);
};

export default MessageList;
