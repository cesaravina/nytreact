// Dependencies
import React, { Component } from "react";
import Panel from "./common/Panel";
import Results from "./Results";
import Saved from "./Saved";
import Header from "./common/Header";
import Footer from "./common/Footer";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            saved: []
        };
        // Binding returnArticles and getSaved to component
        this.returnArticles - this.returnArticles.bind(this);
        this.getSaved = this.getSaved.bind(this);
    }
    // Get the saved articles
    comonentDidMount() {
        this.getSaved();
    }
    returnArticles(res) {
        let dataRes = res.data.response.docs;
        let culledArray;
        // Loop through and provide the nuber of articles
        if (dataRes) {
            culledArray = dataRes.slice(0, 5);
            this.setState({ articles: culledArray });
        };
    }
    renderArticles() {
        return this.state.articles.map((article, index) => (
            <Results
                article={article}
                key={article._id}
                getSaved={this.getSaved}
            />
        ));
    }
    getSaved(res) {
        let savedArray = []
        API.getSaved().then((res) =>{
            res.data.forEach(function(item){
                savedArray.push(item);
            });

            this.setState({ saved: savedArray });
        });
    }
    renderSaved() {
        return this.state.saved.map((saved, index) => (
            <Saved
                saved={saved}
                key={saved._id}
                getSaved={this.getSaved}
            />
        ));
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                <div id="searchSection" className="row">
                    <Panel>
                        <SearchForm
                            returnArticles={this.returnArticles}
                        />
                    </Panel>
                </div>
                <div id="savedSection" className="row">
                    <Panel>
                        {this.renderArticles()}
                    </Panel>
                </div>
                <div id="SavedSection" className="row">
                    <Panel>
                        {this.renderSaved()}
                    </Panel>
                </div>                
	      </div>
	      <Footer />
      </div>
    );
  }
}

export default Main;
