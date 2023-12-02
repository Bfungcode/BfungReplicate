import { useLayoutEffect, Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FireIcon, XIcon, MenuIcon, TrashIcon } from "@heroicons/react/outline";
import MainBar from "./MainBar";

const messages = [
  {
    text: "Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 1",
  },
  {
    text: "Latest Instagram Update: What You Need to Know 2 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 2",
  },
  {
    text: "Latest Instagram Update: What You Need to Know 3 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 3",
  },
  {
    text: "Latest Instagram Update: What You Need to Know 4 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 4",
  },
  {
    text: "Latest Instagram Update: What You Need to Know 5 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 5",
  },
  {
    text: "Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 1",
  },
  {
    text: "Latest Instagram Update: What You Need to Know 2 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 2",
  },
  {
    text: "Latest Instagram Update: What You Need to Know 3 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 3",
  },
  {
    text: "Latest Instagram Update: What You Need to Know 4 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 4",
  },
  {
    text: "Latest Instagram Update: What You Need to Know 5 Latest Instagram Update: What You Need to Know 1 Latest Instagram Update: What You Need to Know 5",
  },
];
const tabs = [
  { name: "Helpful", href: "#", count: "52", current: false },
  { name: "Entertaining", href: "#", count: "6", current: false },
  { name: "Engaging", href: "#", count: "4", current: true },
  { name: "Challanges", href: "#", current: false },
  { name: "Trending", href: "#", current: false },
  { name: "How to", href: "#", count: "6", current: false },
  { name: "Humor", href: "#", count: "4", current: false },
  { name: "Promotional", count: "6", href: "#", current: false },
  { name: "Q&A", count: "6", href: "#", current: false },
  { name: "Trending", count: "6", href: "#", count: "4", current: false },
  { name: "Cats", count: "6", href: "#", current: false },
  { name: "Daily", count: "6", href: "#", current: false },
  { name: "Q&A", count: "6", href: "#", current: false },
  { name: "Trending", count: "6", href: "#", count: "4", current: false },
  { name: "Cats", count: "6", href: "#", current: false },
  { name: "Daily", count: "6", href: "#", current: false },
];
const navigation = [
  { name: "Ideas", href: "#", icon: FireIcon, current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedMessages.length > 0 && selectedMessages.length < messages.length;
    setChecked(selectedMessages.length === messages.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedMessages]);

  function toggleAll() {
    setSelectedMessages(checked || indeterminate ? [] : messages);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-800 text-white"
                            : "text-white hover:bg-indigo-600 hover:bg-opacity-75",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-white">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
          </Dialog>
        </Transition.Root>
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-800 text-white"
                        : "text-white hover:bg-indigo-600 hover:bg-opacity-75",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Tom Cook</p>
                    <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-8 px-8">
              <div className="max-w-7xl mx-0 px-0 sm:px-6 md:px-0">
                <h1 className="text-2xl font-semibold text-gray-900">Ideas</h1>
              </div>
              <div>
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="tabs"
                    name="tabs"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue={tabs.find((tab) => tab.current).name}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <div className="border-b border-gray-200">
                    <nav
                      className="-mb-px flex space-x-8 scrollbar-hide overflow-x-scroll"
                      aria-label="Tabs"
                    >
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.name}
                          className={classNames(
                            tab.current
                              ? "border-indigo-500 text-indigo-600"
                              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                            "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                          )}
                          aria-current={tab.current ? "page" : undefined}
                        >
                          {tab.name}
                          {tab.count ? (
                            <span
                              className={classNames(
                                tab.current
                                  ? "bg-indigo-100 text-indigo-600"
                                  : "bg-gray-100 text-gray-900",
                                "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                              )}
                            >
                              {tab.count}
                            </span>
                          ) : null}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="flex flex-column p-2 mt-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-0">
                    <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      {selectedMessages.length > 0 && (
                        <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16"></div>
                      )}
                      <div className="flex flex-col">
                        <table className="min-w-full table-fixed divide-y divide-gray-300">
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {messages.map((message) => (
                              <tr
                                key={message.text}
                                className={
                                  selectedMessages.includes(message)
                                    ? "bg-gray-50"
                                    : undefined
                                }
                              >
                                <td className="w-16 px-8 sm:w-20 sm:px-10 relative">
                                  {selectedMessages.includes(message) && (
                                    <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                  )}
                                  <input
                                    type="checkbox"
                                    className="absolute left-1/2 -ml-2 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    value={message.text}
                                    checked={selectedMessages.includes(message)}
                                    onChange={(e) =>
                                      setSelectedMessages(
                                        e.target.checked
                                          ? [...selectedMessages, message]
                                          : selectedMessages.filter(
                                              (m) => m !== message
                                            )
                                      )
                                    }
                                  />
                                </td>
                                <td
                                  className={`py-6 sm:py-4 text-base font-medium overflow-hidden sm:whitespace-nowrap md:whitespace-normal`}
                                >
                                  {message.text}
                                </td>
                                <td className="py-6 sm:py-4">
                                  <TrashIcon className="w-8 h-6 text-indigo-600 mr-1" />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <nav
                        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                        aria-label="Pagination"
                      >
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                          <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to
                            <span className="font-medium">10</span> of
                            <span className="font-medium">20</span> results
                          </p>
                        </div>
                        <div className="flex justify-end mt-2 sm:mt-0">
                          <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            Previous
                          </a>
                          <a
                            href="#"
                            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            Next
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
