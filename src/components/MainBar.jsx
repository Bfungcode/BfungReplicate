import { useLayoutEffect, useRef, useState } from "react";
const tabs = [
  { name: "Helpful", num: "52", href: "#", current: false },
  { name: "Entertaining", num: "6", href: "#", current: false },
  { name: "Engaging", num: "4", href: "#", current: true },
  { name: "Challanges", num: "6", href: "#", current: false },
  { name: "Trending", num: "6", href: "#", current: false },
  { name: "How-To", num: "6", ref: "#", current: false },
  { name: "Humor", num: "6", href: "#", current: false },
  { name: "Promotional", num: "6", href: "#", current: false },
  { name: "Q&A", num: "6", href: "#", current: false },
];
import { TrashIcon } from "@heroicons/react/outline";
import LoremIpsum from "lorem-ipsum";

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
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MainBar = () => {
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
    <div className="mainBar">
      <div className="w-full h-full flex flex-column flex-wrap overflow-hidden pr-4">
        <div className="w-full lg:mt-7 sm:mt-5 pb-5 border-b border-gray-200 sm:pb-0">
          <div className="text-3xl leading-6  text-black font-bold">Ideas</div>
          <div className="mt-3 sm:mt-4">
            <div className="sm:hidden">
              <label htmlFor="current-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="current-tab"
                name="current-tab"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue={tabs.find((tab) => tab.current).name}
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="-mb-px flex space-x-8 gap-12">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500  hover:text-gray-700 hover:border-gray-300",
                      "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    <div className="flex flex-row gap-1 justify-center items-center">
                      <div>{tab.name}</div>
                      <div className="text-black bg-gray-200 rounded-3xl w-8 border-2 text-center font-medium">
                        {tab.num}
                      </div>
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 p-4 sm:ps-6 lg:p-1">
          <div className="w-full">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  {selectedMessages.length > 0 && (
                    <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16"></div>
                  )}
                  <table className="min-w-full  table-fixed divide-y divide-gray-300">
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
                          <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                            {selectedMessages.includes(message) && (
                              <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                            )}
                            <input
                              type="checkbox"
                              className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
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
                            className={classNames(
                              "whitespace-nowrap py-4  text-base font-medium",
                              selectedMessages.includes(message)
                                ? "text-indigo-600"
                                : "text-gray-900 font-medium"
                            )}
                          >
                            {message.text}
                          </td>
                          <td>
                            <TrashIcon className="w-8 h-6 text-indigo-600 mr-4" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <nav
                    className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">20</span> results
                      </p>
                    </div>
                    <div className="flex-1 flex justify-between sm:justify-end">
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
      </div>
    </div>
  );
};

export default MainBar;
