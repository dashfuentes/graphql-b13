
import React from 'react'
import { gql, useQuery, useMutation } from '@apollo/client';

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
    const { loading, error, data } = useQuery( GET_MESSAGES );

    if ( error ) {
        return <h1>Error : {{error}}</h1>
    }

    if ( data ) {
        console.log(data)
    }

  return (
      <div>
          <h1>Rendering view</h1>
    </div>
  )
}

export default MessageList