import React, { Component } from "react";
import SearchResults from "../../components/SearchResults/SearchResults";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ReactComponent as LoadingIcon } from "./LoadingIcon.svg";
import { ReactComponent as EmptyIcon } from "./WasteIcon.svg";
import "./WasteWizard.scss";

class WasteWizard extends Component {
  state = {
    items: {},
    results: [],
    favourites: [],
    search: "takeout",
    lastSearch: "",
    loaded: false
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
        this.setState({ items: { ...response["data"] }, loaded: true }, () =>
          this.search(search)
        );
      });
  }

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
      if (entities.hasOwnProperty(entity)) {
        return entities[entity];
      }
      return match;
    });
  }

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

  handleFavorite = item => {
    const { items } = this.state;
    let { favourites } = this.state;
    const updatedItems = { ...items };
    const updatedItem = { ...updatedItems[item] };
    updatedItem.favourited = !updatedItem.favourited;
    updatedItems[item] = updatedItem;

    if (updatedItem.favourited) {
      favourites.push(item);
    } else {
      favourites = favourites.filter(value => value !== item);
    }

    this.setState({ items: updatedItems, favourites });
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
      loaded
    } = this.state;
    const toDisplay = {};
    const favs = {};

    results.forEach(element => {
      toDisplay[element] = items[element];
    });

    favourites.forEach(element => {
      favs[element] = items[element];
    });

    let favouriteList = null;
    if (favourites.length > 0) {
      favouriteList = (
        <section className="favouriteSection">
          <div className="container">
            <h2>Favourites</h2>
            <SearchResults
              caption={"Favourites List"}
              items={favs}
              favoriteItem={this.handleFavorite}
            />
          </div>
        </section>
      );
    }

    // Loading State
    let resultList = (
      <div className="EmptyLoading">
        <LoadingIcon />
        <span className="visually-hidden">Please wait, loading database.</span>
      </div>
    );

    // Empty State
    if (loaded) {
      resultList = (
        <div className="EmptyLoading" role="region" aria-live="polite">
          <EmptyIcon />
          <h3>Nothing found</h3>
          <span>
            Sorry, we found no results for "{lastSearch}".
            <br />
            Try searching for something else.
          </span>
        </div>
      );
    }

    if (results.length > 0) {
      resultList = (
        <section className="resultSection">
          <div role="region" aria-live="polite">
            <span className="visually-hidden">
              {results.length} results were found
            </span>
          </div>
          <SearchResults
            caption={`Search Results for ${lastSearch}`}
            items={toDisplay}
            favoriteItem={this.handleFavorite}
          />
        </section>
      );
    }

    return (
      <React.Fragment>
        <div className="container">
          <SearchBar
            searchValue={search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          {resultList}
        </div>
        {favouriteList}
      </React.Fragment>
    );
  }
}

export default WasteWizard;
