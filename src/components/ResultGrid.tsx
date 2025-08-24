import { cn } from "@/lib/utils";

const ResultGrid = () => {
  const movieData = [
    { id: 1, movie_id: 1, title: "Gone with the Wind", release_date: "1939-04-17" },
    { id: 2, movie_id: 2, title: "The Hound of the Baskervilles", release_date: "1939-03-31" },
    { id: 3, movie_id: 3, title: "The Matrix", release_date: "1999-06-11" },
    { id: 4, movie_id: 4, title: "Above the Law", release_date: "1988-04-08" }
  ];

  const tabs = ["Overview", "Output", "History", "Snippets", "Result (1)"];

  return (
    <div className="bg-workbench-surface border-t border-workbench-border h-72 flex flex-col">
      {/* Tab Bar */}
      <div className="bg-workbench-surface flex border-b border-workbench-border">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cn(
              "px-3 py-2 text-xs border-r border-workbench-border cursor-pointer",
              "transition-colors duration-100",
              tab === "Result (1)" 
                ? "bg-workbench-grid-bg text-workbench-editor-text" 
                : "text-workbench-text hover:bg-workbench-hover"
            )}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Result Grid */}
      <div className="flex-1 bg-workbench-grid-bg overflow-auto">
        {/* Grid Toolbar */}
        <div className="bg-workbench-grid-header border-b border-workbench-grid-border px-2 py-1 flex items-center gap-2">
          <div className="flex gap-1">
            {["📁", "💾", "📋", "✂️", "📄", "🔍", "↻", "⏹️"].map((icon, index) => (
              <button
                key={index}
                className="w-5 h-5 flex items-center justify-center text-xs hover:bg-gray-200 rounded"
              >
                {icon}
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-600 ml-auto">Fetched 4 records</span>
        </div>

        {/* Grid Table */}
        <div className="overflow-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-workbench-grid-header border-b border-workbench-grid-border">
                <th className="text-left px-2 py-1 border-r border-workbench-grid-border font-normal w-8">#</th>
                <th className="text-left px-2 py-1 border-r border-workbench-grid-border font-normal">movie_id</th>
                <th className="text-left px-2 py-1 border-r border-workbench-grid-border font-normal">title</th>
                <th className="text-left px-2 py-1 font-normal">release_date</th>
              </tr>
            </thead>
            <tbody>
              {movieData.map((movie, index) => (
                <tr 
                  key={movie.id}
                  className={cn(
                    "hover:bg-blue-50 cursor-pointer transition-colors",
                    index === 0 ? "bg-workbench-grid-selected" : "bg-workbench-grid-bg"
                  )}
                >
                  <td className="px-2 py-1 border-r border-workbench-grid-border text-center bg-workbench-grid-header">
                    {movie.id}
                  </td>
                  <td className="px-2 py-1 border-r border-workbench-grid-border text-center text-workbench-blue">
                    {movie.movie_id}
                  </td>
                  <td className="px-2 py-1 border-r border-workbench-grid-border">
                    {movie.title}
                  </td>
                  <td className="px-2 py-1">
                    {movie.release_date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultGrid;