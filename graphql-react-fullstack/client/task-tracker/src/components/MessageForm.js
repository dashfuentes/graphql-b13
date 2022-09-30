import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export const MessageForm = () => (
	<div className="row">
		<div className="col-md-6 offset-md-3">
			<div className="card">
				<div className="card-body">
					<form>
						<div class="mb-3">
							<label for="title" class="form-label">
								Title
							</label>
							<input type="text" className="form-control" value={0} />
						</div>
						<div class="mb-3">
							<label for="author" class="form-label">
								Author
							</label>
							<input type="text" className="form-control" value={0} />
						</div>
						<div class="mb-3">
							<label for="content" class="form-label">
								Content
							</label>
							<input type="text" className="form-control" value={0} />
						</div>

						<button class="btn btn-success btn-block">Save</button>
					</form>
				</div>
			</div>
		</div>
	</div>
);
