import { cn } from "@/lib/utils";

const ConnectionInfo = () => {
  return (
    <div className="bg-workbench-surface border-r border-workbench-border w-52 p-2">
      <div className="bg-workbench-surface-light border border-workbench-border rounded p-2">
        <h4 className="text-xs font-medium text-workbench-text mb-2">Connection Information</h4>
        <div className="space-y-1 text-xs text-workbench-text">
          <div><span className="text-workbench-text-muted">Name:</span> Big Iron Server</div>
          <div><span className="text-workbench-text-muted">Host:</span> 127.0.0.1:3306</div>
          <div><span className="text-workbench-text-muted">Server:</span> MySQL</div>
          <div><span className="text-workbench-text-muted">Version:</span> 8.0-community</div>
          <div><span className="text-workbench-text-muted">User:</span> root</div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionInfo;