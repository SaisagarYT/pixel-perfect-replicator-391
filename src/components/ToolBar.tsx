import { cn } from "@/lib/utils";

const ToolBar = () => {
  const toolIcons = ["📁", "📄", "💾", "📋", "✂️", "📋", "↩️", "↪️", "🔍", "🔧", "⚙️", "❓"];

  return (
    <div className="bg-workbench-toolbar-bg border-b border-workbench-border h-8 flex items-center px-2 gap-1">
      {toolIcons.map((icon, index) => (
        <button
          key={index}
          className={cn(
            "w-6 h-6 flex items-center justify-center text-xs text-workbench-text",
            "hover:bg-workbench-hover rounded-sm transition-colors duration-100"
          )}
        >
          {icon}
        </button>
      ))}
      <div className="w-px h-4 bg-workbench-border mx-1" />
      <div className="flex items-center gap-2">
        <span className="text-xs text-workbench-text">🔍</span>
        <input 
          type="text" 
          placeholder="Search..."
          className="bg-workbench-surface text-workbench-text text-xs px-2 py-1 rounded border border-workbench-border w-32 focus:outline-none focus:border-workbench-blue"
        />
      </div>
    </div>
  );
};

export default ToolBar;