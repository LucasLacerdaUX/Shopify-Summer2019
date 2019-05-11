import React, { Component } from "react";
import axios from "axios";
import WasteTable from "../../components/WasteTable";
import SearchBar from "../../components/SearchBar";
import StateInfo from "../../components/StateInfo/StateInfo";
import { ReactComponent as LoadingIcon } from "./LoadingIcon.svg";
import { ReactComponent as EmptyIcon } from "./EmptyIcon.svg";
import { ReactComponent as ErrorIcon } from "./ErrorIcon.svg";
import { ReactComponent as EmptySearchIcon } from "./EmptySearchIcon.svg";
import "./WasteWizard.scss";

class WasteWizard extends Component {
  state = {
    items: {},
    results: [],
    favourites: [],
    lastSearch: "",
    loading: true,
    error: false
  };

  componentDidMount() {
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
            loading: false,
            error: false
          },
          () => this.search("takeout")
        );
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
      });
  }

  // Function to decode HTML entities (just a simple replace)
  decode(value) {
    const doc = new DOMParser().parseFromString(value, "text/html");
    return doc.documentElement.textContent;
  }

  // Search in database by keyword
  search(value) {
    const results = [];
    if (value.length > 0) {
      const t_value = value.toLowerCase().replace(/\s/g, "");
      const { items } = this.state;
      Object.keys(items).forEach(element => {
        const waste = items[element];
        if (
          waste.keywords
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(t_value)
        ) {
          results.push(waste.id);
        }
      });
    }
    this.setState({ results: results, lastSearch: value });
  }

  // Action to favourite or unfavourite item
  handleFavorite = item => {
    const { items } = this.state;
    let { favourites } = this.state;

    // Get the list of items (so you never mutate state) to create a separate and updated item set
    const updatedItemSet = { ...items };
    const updatedItem = updatedItemSet[item];

    // Change the Favourite property and update the list
    updatedItem.favourited = !updatedItem.favourited;

    if (updatedItem.favourited) {
      favourites.push(item);
    } else {
      favourites = favourites.filter(value => value !== item);
    }

    this.setState({ items: updatedItemSet, favourites });
  };

  getCurrentStateLayout(error, loading, lastSearch) {
    // Loading State
    if (loading) {
      return <StateInfo title="Loading Database..." icon={<LoadingIcon />} />;
    }

    // Error State
    if (error) {
      return (
        <StateInfo title="Sorry, there was an error" icon={<ErrorIcon />}>
          There was an error connecting to the database.
          <br />
          Please reload the page and try again.
        </StateInfo>
      );
    }

    // No Results state
    if (lastSearch) {
      return (
        <StateInfo title="Sorry, nothing found" icon={<EmptyIcon />}>
          <span>{`No results for "${lastSearch}`}.</span>
          <br />
          <span>Try searching for something else.</span>
          <span>e.g.: takeout, plastic, cardboard.</span>
        </StateInfo>
      );
    }

    // Empty Search state
    return (
      <StateInfo title={"Search on Waste Wizard"} icon={<EmptySearchIcon />}>
        <span>Use the input above to search the Waste Wizard.</span>
        <span>e.g.: takeout, plastic, cardboard.</span>
      </StateInfo>
    );
  }

  render() {
    const {
      items,
      results,
      favourites,
      search,
      lastSearch,
      loading,
      error
    } = this.state;

    let favouriteContent = null;
    let resultContent = this.getCurrentStateLayout(error, loading, lastSearch);

    // Search Results
    if (results.length > 0) {
      // Prepare Search Results items to be displayed
      const resultsItems = [];
      results.forEach(element => {
        resultsItems.push(items[element]);
      });

      resultContent = (
        <section className="resultSection">
          <div role="region" aria-live="polite">
            <span className="visually-hidden">
              {`${results.length} results were found for ${lastSearch}`}
            </span>
          </div>

          <WasteTable
            caption={`Search Results for ${lastSearch}`}
            items={resultsItems}
            favoriteItem={this.handleFavorite}
          />
        </section>
      );
    }

    if (favourites.length > 0) {
      // Prepares Favourite List items to be displayed
      const favItems = [];
      favourites.forEach(element => {
        favItems.push(items[element]);
      });

      favouriteContent = (
        <section className="favouriteSection">
          <div className="container">
            <h2>Favourites</h2>
            <WasteTable
              caption={"Favourites List"}
              items={favItems}
              favoriteItem={this.handleFavorite}
            />
          </div>
        </section>
      );
    }

    return (
      <main role="main">
        <div className="container">
          <SearchBar
            initialValue="takeout"
            handleSubmit={text => this.search(text)}
          />
          {resultContent}
        </div>
        {favouriteContent}
      </main>
    );
  }
}

export default WasteWizard;
