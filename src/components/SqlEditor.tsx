import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

const SqlEditor = () => {
  const [sqlContent, setSqlContent] = useState(`USE dvd_collection;
SELECT * FROM movies;
`);

  const tabs = [
    { id: 1, name: "SQL Editor (Big Iron Server)", active: true },
    { id: 2, name: "SQL Editor (Big Iron Server)", active: false }
  ];

  const handleSqlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSqlContent(e.target.value);
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Tab Bar */}
      <div className="bg-workbench-surface border-b border-workbench-border flex">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "flex items-center px-3 py-2 text-xs border-r border-workbench-border cursor-pointer",
              "transition-colors duration-100",
              tab.active 
                ? "bg-white text-black" 
                : "bg-workbench-surface text-workbench-text hover:bg-workbench-hover"
            )}
          >
            <span className="mr-2">{tab.name}</span>
            <X className="w-3 h-3 hover:bg-workbench-hover rounded" />
          </div>
        ))}
      </div>

      {/* SQL Statements Panel */}
      <div className="bg-workbench-surface border-b border-workbench-border">
        <div className="flex items-center justify-between px-3 py-1 bg-workbench-surface-light border-b border-workbench-border">
          <span className="text-xs text-workbench-text">SQL Statements</span>
          <X className="w-3 h-3 text-workbench-text hover:bg-workbench-hover rounded cursor-pointer" />
        </div>
        
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 bg-white text-black relative">
        <textarea
          value={sqlContent}
          onChange={handleSqlChange}
          className="w-full h-full p-4 font-mono text-sm bg-white text-black border-none outline-none resize-none"
          placeholder="-- Enter your SQL queries here..."
          style={{ fontFamily: 'Consolas, Monaco, "Courier New", monospace' }}
        />
        <div className="absolute top-2 right-2 text-xs text-gray-500">
          Line: 3, Col: 1
        </div>
      </div>
    </div>
  );
};

export default SqlEditor;