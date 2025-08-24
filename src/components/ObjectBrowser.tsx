import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Database, Table, Eye, Settings } from "lucide-react";
import { useState } from "react";

const ObjectBrowser = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(["dvd_collection", "tables"]));

  const toggleExpand = (item: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(item)) {
      newExpanded.delete(item);
    } else {
      newExpanded.add(item);
    }
    setExpandedItems(newExpanded);
  };

  const TreeItem = ({ 
    label, 
    icon, 
    level = 0, 
    expandable = false, 
    expanded = false, 
    onClick 
  }: {
    label: string;
    icon?: React.ReactNode;
    level?: number;
    expandable?: boolean;
    expanded?: boolean;
    onClick?: () => void;
  }) => (
    <div 
      className={cn(
        "flex items-center text-xs text-workbench-text hover:bg-workbench-hover py-1 cursor-pointer",
        "transition-colors duration-100"
      )}
      style={{ paddingLeft: `${level * 16 + 8}px` }}
      onClick={onClick}
    >
      {expandable ? (
        expanded ? <ChevronDown className="w-3 h-3 mr-1" /> : <ChevronRight className="w-3 h-3 mr-1" />
      ) : (
        <div className="w-4 mr-1" />
      )}
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </div>
  );

  return (
    <div className="bg-workbench-surface border-r border-workbench-border w-52 flex flex-col">
      <div className="bg-workbench-surface-light border-b border-workbench-border px-2 py-1">
        <h3 className="text-xs font-medium text-workbench-text">Object Browser</h3>
      </div>
      
      <div className="p-2">
        <select className="w-full bg-workbench-surface-light text-workbench-text text-xs border border-workbench-border rounded px-2 py-1">
          <option>Default:</option>
        </select>
      </div>

      <div className="flex-1 overflow-auto">
        <TreeItem 
          label="dvd_collection" 
          icon={<Database className="w-3 h-3" />}
          expandable 
          expanded={expandedItems.has("dvd_collection")}
          onClick={() => toggleExpand("dvd_collection")}
        />
        
        {expandedItems.has("dvd_collection") && (
          <>
            <TreeItem 
              label="Tables" 
              icon={<Table className="w-3 h-3" />}
              level={1}
              expandable 
              expanded={expandedItems.has("tables")}
              onClick={() => toggleExpand("tables")}
            />
            
            {expandedItems.has("tables") && (
              <TreeItem label="movies" level={2} />
            )}
            
            <TreeItem 
              label="Views" 
              icon={<Eye className="w-3 h-3" />}
              level={1}
              expandable 
            />
            <TreeItem 
              label="Routines" 
              icon={<Settings className="w-3 h-3" />}
              level={1}
              expandable 
            />
          </>
        )}

        <TreeItem 
          label="mydb" 
          icon={<Database className="w-3 h-3" />}
          expandable 
        />
        <TreeItem 
          label="world" 
          icon={<Database className="w-3 h-3" />}
          expandable 
        />
      </div>
    </div>
  );
};

export default ObjectBrowser;