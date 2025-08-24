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
      <div className="bg-workbench-menu-bg border-b border-workbench-border h-14 flex items-center px-2">
        <div className="flex items-center gap-2">
          <div className=" px-2 py-2 bg-workbench-blue rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">CSV</span>
          </div>
          <span className=" text-workbench-text text-2xl font-medium">QueryEngine</span>
        </div>
      </div>

      {/* Menu Bar */}
      <MenuBar />


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