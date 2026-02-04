import { Search } from "lucide-react"

type SearchSectionProps = {
  onSearchInput: (value: string) => void
}

const SearchSection = ({onSearchInput}:SearchSectionProps) => {
  return (
    <div className="bg-[url('/background-splash.svg')] p-10 text-white border-b border-gray-800
      flex flex-col items-center justify-center font-semibold">
      <h2 className="text-5xl font-bold text-center">ALL <span>TEMPLATES</span></h2>
      <p className="mt-2 text-xl text-center text-white/50">What do you like to create today?</p>

      <div className="w-full flex items-center justify-center">
        <div className="flex items-center p-2 rounded-md md:w-[50%] sm:w-[30%] mt-6 bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none bg-transparent text-gray-700 p-1"
            onChange={(e)=>onSearchInput(e.target.value)}
          />

          <Search className="text-gray-700 ml-2" />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
