import { HomeIcon, CubeIcon, DocumentTextIcon, ChartBarIcon, ChatBubbleLeftIcon, CreditCardIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import { cn } from '../utils/cn'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: false },
  { name: 'Products', icon: CubeIcon, href: '#', current: true },
  { name: 'New RFQ', icon: DocumentTextIcon, href: '#', current: false },
  { name: 'Productions', icon: ShoppingCartIcon, href: '#', current: false },
  { name: 'Analytics', icon: ChartBarIcon, href: '#', current: false },
  { name: 'Message', icon: ChatBubbleLeftIcon, href: '#', current: false },
  { name: 'Payment', icon: CreditCardIcon, href: '#', current: false },
  { name: 'POS', icon: ShoppingCartIcon, href: '#', current: false },
  { name: 'Profile', icon: UserIcon, href: '#', current: false },
]

export default function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-black pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-2xl font-bold text-primary-400">made.</span>
          </div>
          <nav className="mt-8 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  item.current
                    ? 'bg-primary-400 text-black'
                    : 'text-gray-300 hover:bg-gray-800',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={cn(
                    item.current ? 'text-black' : 'text-gray-400 group-hover:text-gray-300',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}