import "./CollapsingFaqQuestion.scss"

import { ReactComponent as SVGArrow } from "../images/icon-arrow-down.svg"
import { useState } from "react"

const CollapsingFaqQuestion = ({ question, children }) => {
  const [expanded, setExpanded] = useState(false)

  const onClick = (event) => {
    event.preventDefault()

    setExpanded(state => !state)
  }
  
  return (
    <article className={`faq-question collapsible ${expanded ? "collapsible--expanded" : ""}`}>
      <header className="collapsible__header">
        <h2>{question}</h2>
        <SVGArrow onClick={onClick} className="collapsible__chevron" />
      </header>
      <main className="collapsible__content">
        <p>{children}</p>
      </main>
    </article>
  )
}

export default CollapsingFaqQuestion