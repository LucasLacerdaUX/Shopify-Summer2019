import React, { Component } from "react";
import SearchResults from "../../components/SearchResults/SearchResults";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./WasteWizard.scss";

class WasteWizard extends Component {
  state = { items: {}, results: [], favourites: [], search: "" };

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

        // Update state and search for takeout
        this.setState({ items: { ...response["data"] } }, () =>
          this.search("takeout")
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
    if (value.lenght <= 0) {
      return;
    }
    value = value.toLowerCase();
    const results = [];
    const { items } = this.state;

    Object.keys(items).forEach(element => {
      const waste = items[element];
      if (
        waste.keywords.toLowerCase().includes(value) ||
        waste.title.toLowerCase().includes(value)
      ) {
        results.push(waste.id);
      }
    });
    this.setState({ results: results });
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
    const { items, results, favourites, search } = this.state;
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
            <SearchResults items={favs} favoriteItem={this.handleFavorite} />
          </div>
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
          <SearchResults items={toDisplay} favoriteItem={this.handleFavorite} />
        </div>
        {favouriteList}
      </React.Fragment>
    );
  }
}

export default WasteWizard;
