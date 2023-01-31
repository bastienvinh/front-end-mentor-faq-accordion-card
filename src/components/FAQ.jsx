import CollapsingFaqQuestion from "./CollapsingFaqQuestion"
import "./FAQ.scss"

const FAQ = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <section className="faq-questions">
        <CollapsingFaqQuestion question="How many team members can I invite?">You can invite as many as you want. To one to 100+ people.</CollapsingFaqQuestion>
        <CollapsingFaqQuestion question="What is the maximum file upload size ?">No more than 26GB. All files in your account must fit your alloted storage space.</CollapsingFaqQuestion>
        <CollapsingFaqQuestion question="How do I reset my password ?">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, in.</CollapsingFaqQuestion>
        <CollapsingFaqQuestion question="Can I cancel my subscription ?">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam deleniti alias tenetur.</CollapsingFaqQuestion>
        <CollapsingFaqQuestion question="Do you provider additional support ?">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, iusto. Odio, perferendis fuga.</CollapsingFaqQuestion>
      </section>
    </div>
  )
}

export default FAQ