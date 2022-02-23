import React, { Component } from "react";
// import SkeletalLoader from "../components/skeletalLoader";
import BlogDataCategorised from "../components/BlogDataCategorised";

export default class BlogCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryBlogs: [],
      categoryTitle: "",
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch(
      `https://bassucas-app.herokuapp.com/categories/${this.props.match.params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        const responseData = data;
        console.log(data);
        this.setState(() => {
          return {
            categoryBlogs: [...(responseData.blogs)],
            loading: false,
            categoryTitle: responseData.tags,
          };
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    console.log(this.state.categoryBlogs);
    return (
        <div className="mx-auto container mt-8 px-4 md:px-0 space-y-2">
       <span className="text-2xl font-semibold bg-gray-200">#{this.state.categoryTitle}</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
       {
           this.state.categoryBlogs.map(item=>{
               return(
                   <BlogDataCategorised  blogData={item} key={item.id} />
               )
           })
       }
      </div>
      </div>
    );
  }
}
