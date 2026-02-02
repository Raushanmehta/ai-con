import { Search } from "lucide-react"

interface Props {
  onSearchInput: (value: string) => void
}

const SearchSection = ({ onSearchInput }: Props) => {
  return (
    <div
      className="p-10 bg-gradient-to-tl from-purple-500 via-orange-500 to-yellow-500 
      flex flex-col items-center justify-center font-semibold"
    >
      <h2 className="text-5xl font-bold">Browse All Templates</h2>
      <p className="mt-2 text-xl">What do you like to create today?</p>

      <div className="w-full flex items-center justify-center">
        <div className="flex items-center p-2 rounded-md w-[50%] mt-6 bg-white">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearchInput(e.target.value)}
            className="flex-1 outline-none bg-transparent text-gray-700 p-1"
          />

          <Search className="text-gray-700 ml-2" />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
