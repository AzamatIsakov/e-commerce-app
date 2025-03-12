const LoadingMainPage = () => {
  console.log('Loading page')

  return <div className="container">LoadingMainPage</div>
}
export default LoadingMainPage

const LoadingCategoriesCard = () => {
  console.log('Loading page')

  return <div className="container">Loading</div>
}
export {
  LoadingCategoriesCard as CategoriesSkeleton,
  LoadingMainPage as MainPageSkeleton
}
