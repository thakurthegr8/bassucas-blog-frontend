import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BlogDataCategorised extends Component {
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
        });
      }
    render() {
        return (
            <div className="rounded-xl overflow-hidden border flex flex-col md:flex-row bg-white">
            <div className="p-4 space-y-2">
              <Link to={`/blog_post/${this.props.blogData.id}`}>
                <h1 className="text-xl font-semibold hover:text-red-600 transition">
                  {this.props.blogData.title}
                </h1>
              </Link>
              <h1 className="text-sm italic text-gray-500">{this.state.date}</h1>
              <div>
              </div>
            </div>
          </div>
        )
    }
}
