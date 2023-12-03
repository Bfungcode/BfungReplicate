import React, { useLayoutEffect, useRef, useState } from "react";
import { TrashIcon, MenuIcon } from "@heroicons/react/outline";
import Sidebar from "./Sidebar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Main({ messages, tabs }) {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
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
