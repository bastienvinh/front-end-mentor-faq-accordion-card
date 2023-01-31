import "./Card.scss"
import FAQ from "./FAQ"
import Illustration from "./Illustration"


import { ReactComponent as SVGBox } from "../images/illustration-box-desktop.svg";

const Card = () => {
  return (
    <div className="card">
      <SVGBox className="illustration-image-box" />
      <Illustration />
      <FAQ />
    </div>
  )
}

export default Card