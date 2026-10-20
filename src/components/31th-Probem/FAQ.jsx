// question :- create a accordion section having some question and on click answer should be display

import Accordion from "./Accordion";
import data from "./dataFAQ.json";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-2xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-4">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase mb-2">FAQ</h2>
        {data.faqs.map((item, index) => (
          <Accordion item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
