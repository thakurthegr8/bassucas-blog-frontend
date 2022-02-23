import React, { Component } from "react";
import BlogData from "../components/BlogData";
import SkeletalLoader from "../components/skeletalLoader";
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
// import qs from 'query-parser';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: false,
      queryValue: "",
    };
    this.handleQueryValue = this.handleQueryValue.bind(this);
    this.handleFetchedData = this.handleFetchedData.bind(this);
  }

  handleFetchedData() {
    this.setState({
      loading: true,
    });

    fetch(
      `https://bassucas-app.herokuapp.com/blogs?_where[title_contains]=${this.state.queryValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        const responseData = data;
        console.log(responseData);
        this.setState({
          blogs: responseData,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  handleQueryValue(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.queryValue);
  }
  componentDidMount() {
    this.handleFetchedData();
  }

  render() {
    return (
      <section className="flex flex-col home-section bg-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center flex-wrap space-y-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-8 px-4 md:px-8 lg:px-12">
          <h1 className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl text-center md:text-left">
            Explore the new <br /> blogs at the start of the day
          </h1>
          <button className="bg-white rounded-xl p-2 md:p-3 lg:p-4 text-black  focus-within:opacity-80 flex-shrink text-center text-sm font-semibold transform hover:-translate-y-1 hover:shadow-xl transition">
            Subscribe to Our Newsletter
          </button>
        </div>
        <form
          className="sticky top-0"
          onSubmit={(e) => {
            this.handleFetchedData();
            e.preventDefault();
          }}
        >
          <input
            className="px-6 font-semibold py-4 shadow-sm w-full focus:outline-none focus:shadow-md"
            type="text"
            placeholder="Search Blogs..."
            name="queryValue"
            value={this.state.queryValue}
            onChange={this.handleQueryValue}
          />
        </form>
        <div className="mx-auto container mt-8 px-4 md:px-0">
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
          <Masonry gutter="0.5rem">
            {this.state.loading ? (
              <SkeletalLoader />
            ) : this.state.blogs.length === 0 ? (
              <div><h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">No results...</h1></div>
            ) : (
              this.state.blogs.map((item) => {
                return <BlogData blogData={item} key={item.id} />;
              })
            )}
          </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    );
  }
}
