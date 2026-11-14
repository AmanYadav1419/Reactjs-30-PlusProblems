// this file is the hook logic to add update the new entry or new file/folder to the exisiting folder structure
// that is looking like the nested tree data structure , so for that we need a tree traversal algorithm
// for the algorithm logic and mutations of the data this file is there

// we are gonna create a custom hook for it.
const useTraversalTree = () => {
  // now in the hook a function will be there that is for the inserting a data / inserting a node.
  // so the insertNode fn will take the entire tree, the folderid where the data is being inserted
  // and then it will take an actual item that is gonna be created.
  // and then is that a file or folder so for that it will take isFolder boolean value will be there.
  function insertNode(tree, folderId, item, isFolder) {
    // so first we will check about the edge cases
    // that is if the place where the data will add is that a first Node.
    // so if the tree is a folder and its id matches, we add the new entry here.
    if (tree.id === folderId && tree.isFolder) {
      // so we will add the items,
      // but why unshift why not push
      // so push add's the item very last and unshift adds the item at start.
      // so that our new item will shown very first, where it being added.
      tree.items.unshift({
        // for the real world case make sure to use uuid or something, but as this is practise problem
        // so i am just using date for an id.
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });

      // return tree early so need to recurse further once the target folder is found.
      return tree;
    }

    // recursively traverse ALL child items to find the target folder deep
    // in the tree That is Depth First Search. Without this, insertNode only worked on the root node and all
    // nested folder additions were silently ignored.
    const updatedItems = tree.items.map((childNode) =>
      insertNode(childNode, folderId, item, isFolder),
    );

    // after each and every iteration we will return the tree, with that
    // with that we are returning the modified data node item with the updatedItem one
    // to update the tree,as the data is object and our new entry is an array
    // so we are returning tree via spread operator , and then updated only the items
    return { ...tree, items: updatedItems };
  }

  return { insertNode };
};

export default useTraversalTree;
