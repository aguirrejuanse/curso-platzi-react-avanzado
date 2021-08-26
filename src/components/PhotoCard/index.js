import React, { Fragment } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import ReactPlaceholder from "react-placeholder"
import { TextBlock, RectShape, RoundShape } from "react-placeholder/lib/placeholders"
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../hooks/useToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, loading }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  //toggleLike
  // const { mutation, mutationLoading, mutationError } = useToggleLikeMutation()

  // const handleFavClick = () => {
  //   !liked && mutation({
  //     variables: {
  //       input: { id }
  //     }
  //   })
  //   setLiked(!liked)
  // }

  // console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })

  const photoCardSkeleton = (
    <React.Fragment>
      <RectShape color="#eee" style={{ height: "400px", marginBottom: 10 }} />
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <RoundShape
          color="#eee"
          style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
        />
        <TextBlock color="#eee" rows={1} style={{ width: 120 }} />
      </div>
    </React.Fragment>
  )

  return (
    <Article ref={element}>
      {show && (
        <ReactPlaceholder
          ready={!loading}
          showLoadingAnimation={true}
          customPlaceholder={photoCardSkeleton}
        >
          <Fragment>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <ToggleLikeMutation >
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !liked && toggleLike({ variables: {
                      input : {id}
                    }})
                    setLiked(!liked)
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToggleLikeMutation>
          </Fragment>
        </ReactPlaceholder>
      )}
    </Article>
  )
}