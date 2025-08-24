import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Database } from "lucide-react";
import { useState } from "react";

const ConnectionInfo = () => {
  const [expandedDatasets, setExpandedDatasets] = useState<Set<string>>(new Set(["movies"]));

  const toggleDataset = (dataset: string) => {
    const newExpanded = new Set(expandedDatasets);
    if (newExpanded.has(dataset)) {
      newExpanded.delete(dataset);
    } else {
      newExpanded.add(dataset);
    }
    setExpandedDatasets(newExpanded);
  };

  const datasets = [
    {
      name: "movies",
      columns: [
        { name: "id", datatype: "INT PRIMARY KEY" },
        { name: "title", datatype: "VARCHAR(255)" },
        { name: "genre", datatype: "VARCHAR(100)" },
        { name: "release_year", datatype: "YEAR" },
        { name: "rating", datatype: "DECIMAL(2,1)" },
        { name: "duration", datatype: "INT" }
      ]
    },
    {
      name: "customers",
      columns: [
        { name: "customer_id", datatype: "INT PRIMARY KEY" },
        { name: "first_name", datatype: "VARCHAR(50)" },
        { name: "last_name", datatype: "VARCHAR(50)" },
        { name: "email", datatype: "VARCHAR(100)" },
        { name: "phone", datatype: "VARCHAR(20)" },
        { name: "created_at", datatype: "TIMESTAMP" }
      ]
    },
    {
      name: "sales",
      columns: [
        { name: "sale_id", datatype: "INT PRIMARY KEY" },
        { name: "customer_id", datatype: "INT" },
        { name: "movie_id", datatype: "INT" },
        { name: "sale_date", datatype: "DATE" },
        { name: "amount", datatype: "DECIMAL(10,2)" },
        { name: "payment_method", datatype: "ENUM('cash','card','online')" }
      ]
    }
  ];

  return (
    <div className="bg-workbench-surface border-r border-workbench-border w-52 p-2">
      <div className="bg-workbench-surface-light border border-workbench-border rounded p-2">
        <h4 className="text-xs font-medium text-workbench-text mb-2">Active Datasets</h4>
        <div className="space-y-1">
          {datasets.map((dataset) => (
            <div key={dataset.name}>
              <div 
                className="flex items-center text-xs text-workbench-text hover:bg-workbench-hover cursor-pointer py-1 px-1 rounded"
                onClick={() => toggleDataset(dataset.name)}
              >
                {expandedDatasets.has(dataset.name) ? (
                  <ChevronDown className="w-3 h-3 mr-1" />
                ) : (
                  <ChevronRight className="w-3 h-3 mr-1" />
                )}
                <Database className="w-3 h-3 mr-1" />
                <span className="font-medium">{dataset.name}</span>
              </div>
              
              {expandedDatasets.has(dataset.name) && (
                <div className="ml-4 mt-1 space-y-1">
                  {dataset.columns.map((column) => (
                    <div key={column.name} className="text-xs text-workbench-text-muted">
                      <span className="text-workbench-text">{column.name}</span>
                      <span className="text-workbench-text-muted ml-2">{column.datatype}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectionInfo;