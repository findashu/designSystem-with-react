import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {SecondaryButton,TertiaryButton} from "./components/Buttons";
import { GlobalStyle } from "./utils";
const App = () => (
    <div>
        <PrimaryButton modifiers={["small","warning"]}>Submit</PrimaryButton>
        <SecondaryButton modifiers={["large"]} >Hello</SecondaryButton>
        <TertiaryButton >Hi Der</TertiaryButton>
        <GlobalStyle />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))