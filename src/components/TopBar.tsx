import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function TopBar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <button className="btn btn-outline">Import</button>
            <button className="btn btn-outline ml-2">Export</button>
            <button className="btn btn-primary ml-2">+ Add product</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4 border-t">
        <div className="flex items-center gap-4">
          <button className="btn btn-outline">All</button>
          <button className="btn btn-outline">Active</button>
          <button className="btn btn-outline">Draft</button>
          <button className="btn btn-outline">Archived</button>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="btn btn-outline">Sort</button>
          <button className="btn btn-outline">Add</button>
        </div>
      </div>
    </header>
  )
}