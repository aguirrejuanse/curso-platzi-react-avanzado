import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import {
  TextBlock,
  RectShape,
  RoundShape,
} from "react-placeholder/lib/placeholders";
import PropTypes from "prop-types";

import { ImgWrapper, Img, Article } from "./styles";
import { FavButton } from "../FavButton";
import { useNearScreen } from "../../hooks/useNearScreen";
import { ToggleLikeMutation } from "../../hooks/useToggleLikeMutation";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({
  id,
  liked,
  likes = 0,
  src = DEFAULT_IMAGE,
  loading,
}) => {
  const [show, element] = useNearScreen();

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
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <RoundShape
          color="#eee"
          style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
        />
        <TextBlock color="#eee" rows={1} style={{ width: 120 }} />
      </div>
    </React.Fragment>
  );

  return (
    <Article ref={element}>
      {show && (
        <ReactPlaceholder
          ready={!loading}
          showLoadingAnimation={true}
          customPlaceholder={photoCardSkeleton}
        >
          <Fragment>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {(toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
                };
                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
                );
              }}
            </ToggleLikeMutation>
          </Fragment>
        </ReactPlaceholder>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName) {
    const propValue = props[propName];

    if (!propValue) return new Error(`${propName} value must be defined`);
    if (propValue < 0)
      return new Error(`${propName} value must greater than 0`);
  },
};
