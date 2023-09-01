import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";

export default function Home() {
  return (
    <div className="p-5 md:px-10 sm:px-20">
      <Hero />
      <SearchInput />
    </div>
  )
}
