import { Redirect, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SinglePageView from 'pages/SinglePage';
import { useDispatch } from 'react-redux';
import { clearLoader, setLoader } from 'store/actions/loader';

const SinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    about: null,
    id: null,
    name: null,
    posts: [],
  });

  if (!id) {
    setTimeout(() => {
      return <Redirect to="/app/pagesList" />;
    }, 3000);
  }
  useEffect(() => {
    window.FB.getLoginStatus(() => {
      dispatch(setLoader());
      window.FB.api(`${id}/?fields=about,posts,name`,
        (response) => {
          if (response) {
            dispatch(clearLoader());
            setState((currentState) => ({
              ...currentState,
              about: response.about,
              name: response.name,
              posts: response.posts?.data || [],
            }));
          }
        });
    });
  }, []);

  return (
    <SinglePageView
      about={state.about}
      id={id}
      name={state.name}
      posts={state.posts}
    />
  );
};

export default SinglePage;
