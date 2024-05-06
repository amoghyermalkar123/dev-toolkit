export default function Todo() {
  return (
    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div class="px-4 py-2">
        <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
      </div>
      <form class="w-full max-w-sm mx-auto px-4 py-2">
        <div class="flex items-center border-b-2 border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text" placeholder="Add a task" />
          <button
            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button">
            Add
          </button>
        </div>
      </form>
      <ul class="divide-y divide-gray-200 px-4">
        <li class="py-2">
          <div class="flex items-center">
            <label for="todo1" class="ml-3 block text-gray-900">
              <span class="text-lg font-medium">Finish project proposal</span>
              <span> </span>
            </label>
            <button className="btn btn-circle btn-outline mx-2 my-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}
