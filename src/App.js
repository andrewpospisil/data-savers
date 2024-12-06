import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Form from "./pages/Form";
import { DataProvider } from "./DataContext";


const theme = extendTheme({});

function App() {

  return (
      <DataProvider>
      <BrowserRouter>
        <Nav />

        <ChakraProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/form" element={<Form />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/report/:id" element={<Report />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
      </DataProvider>
  );
}

export default App;
