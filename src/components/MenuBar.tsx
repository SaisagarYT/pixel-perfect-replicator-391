import { cn } from "@/lib/utils";

const MenuBar = () => {
  const menuItems = ["File","Model","Database", "Help"];

  return (
    <div className="bg-workbench-menu-bg border-b border-workbench-border h-6 flex items-center px-2">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={cn(
            "px-2 py-1 text-xs text-workbench-text hover:bg-workbench-hover",
            "rounded-sm transition-colors duration-100"
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default MenuBar;