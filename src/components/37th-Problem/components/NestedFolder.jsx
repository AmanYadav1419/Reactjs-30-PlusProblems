// this file is to render the ui from the nested predefined objects that are being passed from the parent component.

import { FilePlusIcon, FolderPlusIcon } from "@phosphor-icons/react";
import React, { useState } from "react";

// it will accept some parames and we are destructing the params / props.
const NestedFolder = ({ explorer, handleInsertNode }) => {
  // this state is for to monitor/check and update the ui of the folder expanded or not
  // based on that the childrens will render in the ui.
  const [expand, setExpand] = useState(false);

  // another state variable to handle , to showing or hiding the input box
  // in the state we are passing object that have two properties isVisible and isFolder with some default value..
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  // now the function to handle the new data entry whether it is folder or file.
  // it will accept click event and isFolder boolean value
  // for folder we will pass as true and for file we will pass as false.
  const handleNewEntry = (clickEvent, isFolder) => {
    // first thing is that if we click on any add new folder or add new file, file structure being open
    // to prevent this we will use stop propogation
    clickEvent.stopPropagation();

    // now we want explicitly expand the data.
    setExpand(true);

    // and then make sure to make input field visible.
    // and for isFolder that data will came from the parameter itself.
    setShowInput({ isVisible: true, isFolder });
  };

  // now next function is for when the user wants to add new folder or file.
  const onNewEntryAdd = (e) => {
    // so first we need to make sure to write add logic
    // and then the input field should be hide from the ui.

    // for the add logic we have a internal hook function that we will use it.
    // so it will accept three params , that is the folder id , item value, and isFolder or not
    // so we will pass it.

    // for input field hide logic, we can get from the e.key or e.keyCode for the Enter button
    // for keyCode of Enter button is 13
    // and it should have some text / value in the input field.
    if (e.key === "Enter" && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  // before rendering we will check that it is a folder or not then only render the if block.
  // else directly render the else block that is file ui.
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        {/* so the click of the the div we are toggling the expand , to hide and show the children nested data of folder */}
        <div
          className="folder mt-2 bg-slate-600 flex justify-between p-1 w-72 cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          <span>📁 {explorer.name}</span>

          {/* now in this below div will implement the add new folder / add new file button */}
          <div className="flex justify-center items-center gap-1">
            {/* attach the onclick event handler pass the function and the params value */}
            {/* for folder we are passing second parameter as true to identify folder is being passed to create */}
            <button onClick={(e) => handleNewEntry(e, true)}>
              <FolderPlusIcon className="w-5" />
            </button>
            {/* for the file we are passing second parameter as false to identify file is being passed to create */}
            <button onClick={(e) => handleNewEntry(e, false)}>
              <FilePlusIcon className="w-5" />
            </button>
          </div>
        </div>

        {/* so now when the expand is true then we will show in the ui */}
        {/* that is for the specific one , as we will attch onclick event listner for the folder  */}
        {/* so that the specific folder should get toggle or set expand to true to render the data in the ui. */}

        <div style={{ display: expand ? "block" : "none", paddingLeft: 30 }}>
          {/* now if the showinput.isVisible is true means to show a input with the correct icon  */}
          {/* if folder then show folder and if file is being clicked then file */}
          {showInput.isVisible ? (
            <div className="inputContainer flex items-center gap-1">
              {/* now to render the icon dyanmically based on if the folder is there or the file. */}
              <span className="mt-1">{showInput.isFolder ? "📁" : "📄"}</span>
              {/* and then show the input tag */}
              <input
                type="text"
                // outside click the visiblity of the input field should gone.
                onBlur={() => setShowInput({ ...showInput, isVisible: false })}
                // and whenever the input fields shows , it should automatically focused on it.
                autoFocus
                // onKeyDown fire the onNewEntryAdd to add the entry in the ui.
                onKeyDown={onNewEntryAdd}
                className="inputContainer__input mt-2 p-1 flex items-center justify-center cursor-pointer border border-l-gray-500 text-black"
              />
            </div>
          ) : null}

          {/* now the question is there can be many data will be present so how to tackle this part  */}
          {/* so for that we will call this component again to handle the data properly and passes the exp as the prop with key. */}
          {/* with that passing the handleInsertNode function again to the nested fodler , for the nested folder or file adding purpose. */}
          {(explorer.items ?? []).map((data) => (
            <NestedFolder
              key={data.id}
              explorer={data}
              handleInsertNode={handleInsertNode}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file mt-2 flex flex-col pl-2">📄 {explorer.name}</span>
    );
  }
};

export default NestedFolder;
