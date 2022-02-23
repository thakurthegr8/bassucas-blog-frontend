import React from "react";
import ReactMarkDown from "react-markdown";
import { Link } from "react-router-dom";

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleBlogData: {},
      tagData: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://bassucas-app.herokuapp.com/blogs/${this.props.match.params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        const responseData = data;
        const date = new Date(responseData.updated_at);
        const dateString = date.toLocaleString();
        responseData.updated_at = dateString;
        console.log(responseData);
        this.setState({
          singleBlogData: responseData,
          tagData: [...responseData.categories],
        });
      })
      .catch((error) => console.log(error));
    console.log(this.state.tagData);
  }
  render() {
    return (
      <div className="rounded-xl flex flex-col bg-white mx-auto container py-4 px-4 md:px-0 space-y-2">
        <h1 className="text-sm italic text-gray-500">
          Published at {this.state.singleBlogData.updated_at}
        </h1>
        <div className=" flex flex-wrap gap-2">
          {this.state.tagData.map((item, index) => {
            return (
              <Link to={`/blog_post_categorised/${item.id}`}>
                <span
                  className="bg-red-200 text-red-600 font-semibold text-sm rounded p-1 hover:bg-red-300"
                  key={index}
                >
                  #{item.tags}
                </span>
              </Link>
            );
          })}
        </div>
        <ReactMarkDown
          className="mark-down mx-auto container flex flex-col overflow-hidden space-y-2"
          children={this.state.singleBlogData.description}
          linkTargets={"_blank"}
          components={{
            a:({node, children})=>{
              return <a className="text-blue-600" href={node.properties.href} target="_blank">{node.children[0].value}</a>
            } 
          }}
        />
        {/* <p className="text-gray-700 text-sm md:text-base">
              
            </p> */}
      </div>
    );
  }
}
