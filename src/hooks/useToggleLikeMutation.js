// import { gql, useMutation } from '@apollo/client'

// const likePhoto = gql`
// mutation likePhoto($input: LikePhoto!) {
//   likePhoto(input: $input) {
//     id,
//     liked,
//     likes
//   }
// }`

// export const useToggleLikeMutation = (variables = {}) => {
//   const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(likePhoto, variables)
//   return { mutation, mutationLoading, mutationError }
// }

import React from 'react'
import { gql } from '@apollo/client'
import { Mutation } from '@apollo/client/react/components';

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={LIKE_PHOTO}>
    {children}
  </Mutation>
}