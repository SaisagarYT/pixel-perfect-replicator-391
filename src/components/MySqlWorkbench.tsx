import MenuBar from "./MenuBar";
import ToolBar from "./ToolBar";
import ObjectBrowser from "./ObjectBrowser";
import SqlEditor from "./SqlEditor";
import ResultGrid from "./ResultGrid";
import ConnectionInfo from "./ConnectionInfo";
import StatusBar from "./StatusBar";

const MySqlWorkbench = () => {
  return (
    <div className="h-screen bg-workbench-bg flex flex-col text-workbench-text overflow-hidden">
      {/* Title Bar */}
      <div className="bg-workbench-menu-bg border-b border-workbench-border h-8 flex items-center px-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-workbench-blue rounded-sm flex items-center justify-center">
            <span className="text-white text-xs">M</span>
          </div>
          <span className="text-xs text-workbench-text font-medium">MySQL Workbench</span>
        </div>
        <div className="ml-auto flex gap-1">
          <button className="w-6 h-6 text-workbench-text hover:bg-workbench-hover rounded text-xs">─</button>
          <button className="w-6 h-6 text-workbench-text hover:bg-workbench-hover rounded text-xs">□</button>
          <button className="w-6 h-6 text-workbench-text hover:bg-red-500 hover:text-white rounded text-xs">✕</button>
        </div>
      </div>

      {/* Menu Bar */}
      <MenuBar />

      {/* Tool Bar */}
      <ToolBar />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <ObjectBrowser />

        {/* Center Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <SqlEditor />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex h-72">
        <ConnectionInfo />
        <div className="flex-1">
          <ResultGrid />
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
};

export default MySqlWorkbench;