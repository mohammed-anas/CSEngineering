import React from "react";

class TopicCardList extends React.Component {
    render() {
        return ( 
            <div class="card" style={{"width":"25rem","backgroundColor":"aqua"}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Binary Search</h5>
                    <p class="card-text">This will explain the core concepts of binary search</p>
                </div>
                <div class="card-body" style={{"display":"flex","justifyContent":"space-between"}}>
                    <a href="#" class="btn btn-primary">Concepts</a>
                    <a href="#" class="btn btn-primary">Watch Video</a>
                    <a href="#" class="btn btn-primary">Forum</a>
                    
                </div>
            </div>
            );
    }
}
export default TopicCardList