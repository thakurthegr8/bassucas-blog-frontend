import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      blogDataTags:[]
    };
  }
  componentDidMount() {
    const newDate = new Date(this.props.blogData.updated_at);
    const strDate = newDate.toDateString();
    this.setState({
      date: strDate,
      blogDataTags : [...(this.props.blogData.categories)]
    });
  }
  render() {
    console.log();
    return (
      <div className="rounded-xl overflow-hidden border border-gray-300 flex flex-col md:flex-row bg-white">
        <div className="p-4 space-y-2">
          <Link to={`/blog_post/${this.props.blogData.id}`}>
            <h1 className="text-xl font-semibold hover:text-red-600 transition">
              {this.props.blogData.title}
            </h1>
          </Link>
          <h1 className="text-sm italic text-gray-500">{this.state.date}</h1>
          <div className="flex flex-wrap gap-2">
          {this.state.blogDataTags.map(item => {
            return (
              <Link to={`/blog_post_categorised/${item.id}`} key={item.id} >
                <span
                  className="bg-red-200 text-red-600 font-semibold text-sm rounded p-1 hover:bg-red-300"
                >
                  #{item.tags}
                </span>
              </Link>
            );
          })}
          </div>
        </div>
      </div>
    );
  }
}
