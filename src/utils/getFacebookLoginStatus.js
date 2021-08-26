export default () => {
  const facebookLoginItem = JSON.parse(sessionStorage.getItem('fbssls_377403264040350'));
  if (!facebookLoginItem) {
    return null;
  }

  return facebookLoginItem.status;
};
