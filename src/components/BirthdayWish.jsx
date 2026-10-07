export default function BirthdayWish() {
  return (
    <section id="a-special-note" className="py-24 px-6 flex justify-center">
      <div className="relative max-w-2xl w-full bg-[#F8E8EE] p-8 md:p-14 rounded-2xl shadow-md border border-[#FDCEDF]/50">
        <div className="tape"></div>
        <h2 className="serif text-3xl md:text-4xl text-[#5A434A] mb-6 text-center">
          A Birthday Wish For You ♡
        </h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#5A434A] font-light">
          <p>
            May this year bring you more happiness, good health, new opportunities, amazing people, and everything you dream of.
          </p>
          <p>Keep smiling. Keep being your crazy, kind, and beautiful self.</p>
          <p>You deserve all the love and happiness in the world.</p>
          <p className="handwriting text-2xl md:text-3xl text-right pt-4 text-[#8A6D76]">
            Always stay the same. ♡
          </p>
        </div>
      </div>
    </section>
  );
}