import "./Illustration.scss"

import SVGPatternDesktop from "../images/bg-pattern-desktop.svg";
import SVGPatternMobile from "../images/bg-pattern-mobile.svg";

import SVGWomanOnlineDesktop from "../images/illustration-woman-online-desktop.svg";
import SVGWomanOnlineMobile from "../images/illustration-woman-online-mobile.svg";

const Illustration = () => {
  return (
    <div className="illustration">
      <picture className="background-pattern">
        <source
            type="image/svg+xml"
            srcset={SVGPatternMobile}
            media="(max-width: 767px)"
          />
        <source 
          type="image/svg+xml"
          srcSet={SVGPatternDesktop}
          media="(min-width: 767px)"
        />
          <img src={SVGPatternDesktop} alt="background-pattern" />
      </picture>

      <picture className="image-woman">
        <source
            type="image/svg+xml"
            srcset={SVGWomanOnlineMobile}
            media="(max-width: 767px)"
          />
        <source 
          type="image/svg+xml"
          srcSet={SVGWomanOnlineDesktop}
          media="(min-width: 767px)"
        />
          <img src={SVGPatternDesktop} alt="background-pattern" />
      </picture>
    </div>
  )
}

export default Illustration