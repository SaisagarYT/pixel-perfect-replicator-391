import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const SqlEditor = () => {
  const tabs = [
    { id: 1, name: "SQL Editor (Big Iron Server)", active: true },
    { id: 2, name: "SQL Editor (Big Iron Server)", active: false }
  ];

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
                ? "bg-workbench-editor-bg text-workbench-editor-text" 
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
        <div className="p-2 h-16">
          <div className="text-xs text-workbench-blue font-mono leading-relaxed">
            <div className="flex">
              <span className="text-workbench-text-muted mr-2">1</span>
              <span className="text-blue-400">USE</span>
              <span className="text-workbench-text ml-1">dvd_collection;</span>
            </div>
            <div className="flex">
              <span className="text-workbench-text-muted mr-2">2</span>
              <span className="text-blue-400">SELECT</span>
              <span className="text-workbench-text ml-1">* </span>
              <span className="text-blue-400">FROM</span>
              <span className="text-workbench-text ml-1">movies;</span>
            </div>
            <div className="flex">
              <span className="text-workbench-text-muted mr-2">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 bg-workbench-editor-bg text-workbench-editor-text p-4">
        <div className="font-mono text-sm">
          <p className="text-gray-600">-- SQL Editor content would go here</p>
          <p className="text-gray-600">-- This area replicates the main SQL editing interface</p>
        </div>
      </div>
    </div>
  );
};

export default SqlEditor;