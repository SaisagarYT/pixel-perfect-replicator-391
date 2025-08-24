import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Folder, FolderOpen, File, FileText, Plus, FolderPlus } from "lucide-react";
import { useState } from "react";

const ObjectBrowser = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(["datasets", "csv-files"]));

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
      <div className="bg-workbench-surface-light border-b border-workbench-border px-2 py-1 flex items-center justify-between">
        <h3 className="text-xs font-medium text-workbench-text">File Explorer</h3>
        <div className="flex gap-1">
          <button className="text-workbench-text hover:bg-workbench-hover p-1 rounded">
            <Plus className="w-3 h-3" />
          </button>
          <button className="text-workbench-text hover:bg-workbench-hover p-1 rounded">
            <FolderPlus className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <TreeItem 
          label="datasets" 
          icon={expandedItems.has("datasets") ? <FolderOpen className="w-3 h-3" /> : <Folder className="w-3 h-3" />}
          expandable 
          expanded={expandedItems.has("datasets")}
          onClick={() => toggleExpand("datasets")}
        />
        
        {expandedItems.has("datasets") && (
          <>
            <TreeItem 
              label="csv-files" 
              icon={expandedItems.has("csv-files") ? <FolderOpen className="w-3 h-3" /> : <Folder className="w-3 h-3" />}
              level={1}
              expandable 
              expanded={expandedItems.has("csv-files")}
              onClick={() => toggleExpand("csv-files")}
            />
            
            {expandedItems.has("csv-files") && (
              <>
                <TreeItem 
                  label="movies.csv" 
                  icon={<FileText className="w-3 h-3" />}
                  level={2} 
                />
                <TreeItem 
                  label="customers.csv" 
                  icon={<FileText className="w-3 h-3" />}
                  level={2} 
                />
                <TreeItem 
                  label="sales.csv" 
                  icon={<FileText className="w-3 h-3" />}
                  level={2} 
                />
              </>
            )}
            
            <TreeItem 
              label="reports" 
              icon={<Folder className="w-3 h-3" />}
              level={1}
              expandable 
            />
            <TreeItem 
              label="backups" 
              icon={<Folder className="w-3 h-3" />}
              level={1}
              expandable 
            />
          </>
        )}

        <TreeItem 
          label="projects" 
          icon={<Folder className="w-3 h-3" />}
          expandable 
        />
        <TreeItem 
          label="templates" 
          icon={<Folder className="w-3 h-3" />}
          expandable 
        />
      </div>
    </div>
  );
};

export default ObjectBrowser;