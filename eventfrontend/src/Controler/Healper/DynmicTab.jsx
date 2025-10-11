import React, { useState } from "react";

const DynamicTabs = ({ tabs ,fun}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Interactive Tabs (Dynamic)</h4>
      </div>

      <div className="card-body">
        {/* Tab Headers */}
        <div className="mb-4 border-b border-gray-200 dark:border-slate-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            {tabs.map((tab) => (
              <li key={tab.id} className="mr-2" role="presentation">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-block p-4 rounded-t-lg border-b-2 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600 dark:text-blue-400"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div id="myTabContent">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`p-4 bg-gray-50 rounded-lg dark:bg-gray-800 transition-all duration-300 ${
                activeTab === tab.id ? "block" : "hidden"
              }`}
            >
              {/* Render Component */}
              <tab.component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicTabs;
