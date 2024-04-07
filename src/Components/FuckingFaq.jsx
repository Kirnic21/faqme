import Faq from "./Faq"
import "./FuckingFaq.css"
const FuckingFaq = ()=>{
    const faqList2 = [{question:"Why you started learning Coding?",answer:"Because i was a NEET and wanted money and remote work, but i kinda like coding rn",id:1 },
    {question: "Where you learned coding?",answer:"I started doing CS50, i stopped when they were teaching Javascript, then i went to The Odin Project, kinda stopped in the middle Node.js path to focus on personal coding project(while also learning what i left off).",id:2}
    ,{question:"Are you employed?",answer:"Not right now, i have been looking for internships in my country, passed none but i will keep trying!",id:3 },
    {question:"What is your stack?",answer:"I like Front end job(HTML,CSS,JS,React) but im still learning back end[rn:MERN(Mongo,Express,React,Node) and PHP] and might like it ",id:4},
    {question:"How would you learn programming with your knowledge right now",answer:"To be honest, was too lazy to be self sufficient or self regulated, i would just do a bunch of random projects that i like instead of following Odin Project where i disliked 80% of the projects and wasnt paid for it.",id:5}
]
    const faqList3 = [{question:"How long you have been learning japanese?",
                       answer:"Started doing japanese classes in 2020, learned about immersion, then have been immersing since 2021(although, i took a 1 year break)",
                       id:1},
                       {question:"Dont you have Japanese descendency, does it gave a boost in learning?",
                       answer:"Maybe i got exposed to some words when i was a child but not really significant",
                        id:2},
                        {
                        question:"How is your skill level?",
                        answer:"decent, can watch some anime w/o subtitles, Shounen or harder animes i use subs, reading is something im working on,have read 15 light novels until now",
                        id:3,
                        },
                        {
                            question:"Are you learning japanese rn?",
                            answer:"Just had my progress kinda halted rn, need to focus on other areas of life, but at least i try to immerse 1 h a day. ",
                            id:4
                        }
                    ]
   return(
    <div className="faq-stuff">
        <h4 className="title">Coding Faqs</h4>
        <Faq faqList={faqList2}></Faq>
        <h4 className="title">Japanese Faqs</h4>
        <Faq faqList={faqList3}></Faq>
    </div>
   )

}
export default FuckingFaq