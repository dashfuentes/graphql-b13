import { gql } from "@apollo/client";

//Read the docs and and Coordinates and Clouds
export const GET_WEATHER_QUERY = gql`


	query getCityByName($name: String!, $country: String) {

		getCityByName(name: $name, country : $country) {
			name
			country
			weather {
				summary {
					title
					description
					icon
				}
				temperature {
					min
					max
					feelsLike
				}
				wind {
					speed
				}
			}
            
		}
	}
`;
