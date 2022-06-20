import React from "react"
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={0}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="121" r="120" />
    <rect x="0" y="270" rx="11" ry="11" width="235" height="27" />
    <rect x="0" y="320" rx="11" ry="11" width="235" height="88" />
    <rect x="0" y="425" rx="10" ry="10" width="82" height="30" />
    <rect x="110" y="420" rx="22" ry="22" width="122" height="45" />
  </ContentLoader>
)

export default Skeleton;