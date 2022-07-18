import React from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import TopicCardList from "./TopicCardList";

class App extends React.Component {
    render() {
        return ( 
        <div class="container-fluid">
            <AppHeader/>
            <div class="flex-container" style={{"display":"flex","flexFlow":"row wrap","gap":"10px 10px"}}>
            <TopicCardList/>
            <TopicCardList/>
            <TopicCardList/>
            <TopicCardList/>
            <TopicCardList/>
            <TopicCardList/>
            <TopicCardList/>
            </div>
            <AppFooter/>
        </div>
        );
    }
}

export default App;