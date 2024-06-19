import React from "react";
import HelloWorld from "./components/1st-Problem/HelloWorld";
import CounterApp from "./components/2nd-problem/CounterApp";
import FormInput from "./components/3rd-Problem/FormInput";
import ListComponent from "./components/4th-Problem/ListComponent";
import NavigationMenu from "./components/18th-Problem/NavigationMenu";
import DarkandLightTheme from "./components/19th-Problem/DarkandLightTheme";
import { ThemeProvider } from "./components/19th-Problem/ThemeContext";
import NineteenComp from "./components/19th-Problem/NineteenComp";
import ToggleSwitch from "./components/5th-Problem/ToggleSwitch";
import FetchDataFromAPI from "./components/6th-Problem/FetchDataFromAPI";
import TimerCountDown from "./components/7th-Problem/TimerCountDown";
import ToDoListApp from "./components/8th-Problem/ToDoListApp";
import BackgroundChange from "./components/9th-Problem/BackgroundChange";
import BasicRoute from "./components/10th-Problem/BasicRoute";
import RandomQuote from "./components/11th-Problem/RandomQuote";
import FileUploader from "./components/12th-Problem/FileUploader";
import BasicLoginAndRegistrationForm from "./components/13th-Problem/BasicLoginAndRegistrationForm";
import WeatherApp from "./components/14th-Problem/WeatherApp";
import SearchBarFilter from "./components/15th-Problem/SearchBarFilter";
import PaginationComponent from "./components/16th-Problem/PaginationComponent";
import ColorPicker from "./components/17th-Problem/ColorPicker";

// it should for 15th and 16th problem as props
const listofNames = [
  "prince",
  "ash",
  "poppy",
  "neion",
  "nana",
  "bob",
  "ronny",
  "trion",
  "nexus",
  "divine",
  "swagster",
  "strek",
];

function App() {
  return (
    <div>
      {/* 1st problem */}
      {/* <HelloWorld /> */}

      {/* 2nd problem */}
      {/* <CounterApp /> */}

      {/* 3rd problem */}
      {/* <FormInput /> */}

      {/* 4th Problem */}
      {/* <ListComponent /> */}

      {/* 5th Problem */}
      {/* <ToggleSwitch /> */}

      {/* 6th Problem */}
      {/* <FetchDataFromAPI /> */}

      {/* 7th Problem */}
      {/* <TimerCountDown /> */}

      {/* 8th Problem */}
      {/* <ToDoListApp /> */}

      {/* 9th Problem */}
      <BackgroundChange />

      {/* 10th Problem */}
      {/* <BasicRoute /> */}

      {/* 11th Problem */}
      {/* <RandomQuote /> */}

      {/* 12th Problem */}
      {/* <FileUploader /> */}

      {/* 13th Problem */}
      {/* <BasicLoginAndRegistrationForm /> */}

      {/* 14th Problem */}
      {/* <WeatherApp /> */}

      {/* 15th Problem */}
      {/* <SearchBarFilter listofNames={listofNames}/> */}

      {/* 16th Problem */}
      {/* <PaginationComponent listofNames={listofNames} itemsPerPage={2}/> */}

      {/* 17th Problem */}
      {/* <ColorPicker /> */}

      {/* 18th Problem */}
      {/* <NavigationMenu /> */}

      {/* 19th Problem */}
      {/* <ThemeProvider>
        <div className="App">
          <DarkandLightTheme />
          <NineteenComp />
        </div>
      </ThemeProvider> */}

    </div>
  );
}

export default App;
