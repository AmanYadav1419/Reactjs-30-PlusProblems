// question :- create a accordion section having some question and on click answer should be display

import Accordion from "./Accordion";
import data from "./dataFAQ.json" 

export default function FAQ() {
  return (
    <div>
      <h1>FAQ</h1>
      {
          data.faqs.map((item, index) => (
            <Accordion item={item} key={index}/>
        ))
      }
    </div>
  );
}
