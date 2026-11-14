// this file is to render the ui from the nested predefined objects will pass to the component.
// data pass by props , this is the important file to manage the code consider this like an App component file.

import { useState } from "react";
import explorer from "./data/folderData";
import NestedFolder from "./components/NestedFolder";
import useTraversalTree from "./hooks/useTraversalTree";

const FolderStructure = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  // get the hook used there and the functions that are being needed.
  const { insertNode } = useTraversalTree();

  // A function call that will call the insertNode fn passing all the data to the fn.

  // and this function will pass to our nestedfolder component to use it and work it out.
  const handleInsertNode = (folderId, item, isFolder) => {
    // as we know that insertNode will take 4 params.
    // first is tree that means our explorer data.
    // and other params will pass it as it is.
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    // so after we have our final tree completely updated we will update our original tree.
    setExplorerData(finalTree);
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full flex flex-col gap-4 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            File Explorer
          </span>
        </div>

        {/* importing nested folder component */}
        <div className="py-2 text-zinc-200">
          <NestedFolder
            explorer={explorerData}
            handleInsertNode={handleInsertNode}
          />
        </div>
      </div>
    </div>
  );
};

export default FolderStructure;
