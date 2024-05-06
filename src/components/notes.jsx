export default function Notes() {
  return (
    <div className="flex flex-row justify-start">
      <div className="flex flex-col h-full w-1/2 p-2">
        <div className="flex flex-row justify-evenly p-2">
          <a>
            Your Notes
          </a>
          <button className="bg-white shadow-none border-1 border-gray-200 hover:bg-lime-100 hover:border-none text-black m-2">Add Note</button>
        </div>
        <ul className="block border rounded border-black-100">
          <div className="divide-y divide-dashed divide-lime-500 hover:divide-solid">
            <li className="p-1 cursor-pointer">
              <div className="flex flex-row">
                <a>Domain Onboarding Working</a>
              </div>
            </li>
            <li className="p-1 cursor-pointer">
              <div className="flex flex-row">
                <a>Opt In bugs</a>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex flex-col h-full w-1/2">
        note
      </div>
    </div>
  )
}
