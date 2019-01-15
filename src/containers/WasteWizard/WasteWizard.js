import React, { Component } from "react";
import SearchResults from "../../components/SearchResults/SearchResults";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ReactComponent as LoadingIcon } from "./LoadingIcon.svg";
import { ReactComponent as EmptyIcon } from "./EmptyIcon.svg";
import { ReactComponent as ErrorIcon } from "./ErrorIcon.svg";
import "./WasteWizard.scss";
import StateInfo from "../../components/StateInfo/StateInfo";

class WasteWizard extends Component {
  state = {
    items: {},
    results: [],
    favourites: [],
    search: "takeout",
    lastSearch: "",
    loadingComplete: false,
    error: false
  };

  componentDidMount() {
    const { search } = this.state;

    // Perform request
    axios
      .get(
        "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
      )
      .then(response => {
        response["data"].forEach((element, index) => {
          element.id = index;
          element.body = this.decode(element.body);
          element.favourited = false;
        });

        // Update state and immediatly perform first search
        this.setState(
          {
            items: { ...response["data"] },
            loadingComplete: true,
            error: false
          },
          () => this.search(search)
        );
      })
      .catch(error => {
        console.log("deu erro");
        this.setState({ loadingComplete: false, error: true });
      });
  }

  // Function to decode HTML entities (just a simple replace)
  decode(value) {
    var entities = {
      amp: "&",
      apos: "'",
      lt: "<",
      gt: ">",
      quot: '"',
      nbsp: "\xa0"
    };

    var entityPattern = /&([a-z]+);/gi;

    return value.replace(entityPattern, (match, entity) => {
      entity = entity.toLowerCase();
      // Check if entity is in list
      if (entities.hasOwnProperty(entity)) {
        return entities[entity];
      }

      return match;
    });
  }

  // Search in database by keyword or title
  search(value) {
    value = value.toLowerCase();
    const { items } = this.state;
    const results = [];
    Object.keys(items).forEach(element => {
      const waste = items[element];
      if (
        waste.keywords.toLowerCase().includes(value) ||
        waste.title.toLowerCase().includes(value)
      ) {
        results.push(waste.id);
      }
    });
    this.setState({ results: results, lastSearch: value });
  }

  // Action to favourite or unfavourite item
  handleFavorite = item => {
    const { items } = this.state;
    let { favourites } = this.state;

    // Get the list of items (so you never mutate state) to create a separate and updated item set
    const updatedItemSet = { ...items };
    // And now the item itself
    const updatedItem = updatedItemSet[item];

    // Change the Favourite property and update the list
    updatedItem.favourited = !updatedItem.favourited;

    if (updatedItem.favourited) {
      // If the item has been favourited
      favourites.push(item);
    } else {
      // If the item has been unfavourited
      favourites = favourites.filter(value => value !== item);
    }

    this.setState({ items: updatedItemSet, favourites });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.search(this.state.search);
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const {
      items,
      results,
      favourites,
      search,
      lastSearch,
      loadingComplete,
      error
    } = this.state;

    // Loading State by default
    let resultContent = (
      <StateInfo title="Loading Database..." icon={<LoadingIcon />} />
    );
    let favouriteContent = null;

    if (error) {
      // Error State
      resultContent = (
        <StateInfo title="Sorry, there was an error" icon={<ErrorIcon />}>
          There was an error connecting to the database.
          <br />
          Please reload the page and try again.
        </StateInfo>
      );
    }

    if (loadingComplete) {
      // Empty State
      resultContent = (
        <StateInfo title="Nothing found" icon={<EmptyIcon />}>
          {`Sorry, we found no results for "${lastSearch}"`}
          <br />
          Try searching for something else.
        </StateInfo>
      );

      // Search Results
      if (results.length > 0) {
        // Prepare Search Results to be displayed
        const resultsItems = {};
        results.forEach(element => {
          resultsItems[element] = items[element];
        });

        resultContent = (
          <section className="resultSection">
            <div role="region" aria-live="polite">
              <span className="visually-hidden">
                {`${results.length} results were found`}
              </span>
            </div>
            <SearchResults
              caption={`Search Results for ${lastSearch}`}
              items={resultsItems}
              favoriteItem={this.handleFavorite}
            />
          </section>
        );
      }

      if (favourites.length > 0) {
        // Prepares Favourite List to be displayed
        const favItems = {};
        favourites.forEach(element => {
          favItems[element] = items[element];
        });

        favouriteContent = (
          <section className="favouriteSection">
            <div className="container">
              <h2>Favourites</h2>
              <SearchResults
                caption={"Favourites List"}
                items={favItems}
                favoriteItem={this.handleFavorite}
              />
            </div>
          </section>
        );
      }
    }

    return (
      <React.Fragment>
        <div className="container">
          <SearchBar
            searchValue={search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          {resultContent}
        </div>
        {favouriteContent}
      </React.Fragment>
    );
  }
}

export default WasteWizard;
