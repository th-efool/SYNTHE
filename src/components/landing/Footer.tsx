export default function Footer() {
  return (
    <footer className="bg-[#F9F6F0] border-t border-[#D4C7B8]/40 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm tracking-tight font-system font-normal text-[#201A17] uppercase">SYNTHE</div>

        <div className="flex gap-8 text-xs tracking-wide text-[#8C8A79] uppercase">
          <a href="#" className="hover:text-[#201A17] transition-colors">Approach</a>
          <a href="#" className="hover:text-[#201A17] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#201A17] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
