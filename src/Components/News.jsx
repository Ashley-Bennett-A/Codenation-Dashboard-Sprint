import React from "react";
import NewsCard from "./NewsCard";

class News extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?category=technology&country=gb&apiKey=2d2aa9955aba4a1d80fa63a8ca438e2e"
    )
      .then(news => {
        return news.json();
      })
      .then(data => {
        console.log(data.articles);
        this.setState({ articles: data.articles });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="news">
        {this.state.articles.map(article => {
          return (
            <NewsCard
              link={article.url}
              title={article.title}
              subtitle={article.description}
              image={article.urlToImage}
            />
          );
        })}
      </div>
    );
  }
}

export default News;
