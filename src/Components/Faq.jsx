import './faq.css'
const Faq = (props) => {

return(
<div className="faqList">
    <ul className='faqli'>
        {props.faqList.map((faq)=>{
            return(
               <div className="faqyou">
                <li className = "question" key = {faq.id}>{faq.question}</li>
                <li className = "answer">{faq.answer}</li>
                </div>
                )
            })}
    </ul>
</div >)
}
export default Faq