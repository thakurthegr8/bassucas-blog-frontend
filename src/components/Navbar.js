import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../routes/PageRoutes";


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageRoutes: routes,
      isNavbarLinkOpen: false,
    };
    this.handleNavbar = this.handleNavbar.bind(this);
  }
  handleNavbar(){
    this.setState(prevState=>{
      return{
        isNavbarLinkOpen : !prevState.isNavbarLinkOpen,
      }
    })
  }
  render() {
    return (
      <section className="shadow-sm font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white flex flex-col space-y-4">
        <div className="mx-auto container">
          <div className="flex items-center justify-between py-4 px-4 md:px-0">
            <div>
             <Link to="/"><h1>Bassucas | Blogs</h1></Link>
            </div>
            <nav>
              <ul className="hidden md:flex justify-between space-x-4">
                {this.state.pageRoutes.map((pageRoute) => {
                  return (
                    <li key={pageRoute.id}>
                      <Link to={pageRoute.url}>{pageRoute.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button className="md:hidden bg-white bg-opacity-50 rounded-full p-1 border-white focus:bg-opacity-30" onClick={this.handleNavbar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
          {this.state.isNavbarLinkOpen && (
            <div className="flex flex-col p-4 bg-white md:hidden rounded-xl shadow-xl fixed transition top-0 left-0 right-0 m-4 z-10">
              <div className="flex justify-between items-center">
                <h1 className="text-black">Bassucas | Blog</h1>
                <button className="md:hidden bg-gray-200 rounded-full p-1" onClick={this.handleNavbar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#4c4c4c"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav>
              <ul className="flex flex-col justify-between space-y-2 divide-y">
                {this.state.pageRoutes.map((pageRoute) => {
                  return (
                    <Link to={pageRoute.url} onClick={this.handleNavbar}>
                    <li key={pageRoute.id} className="text-gray-900 text-sm block -mb-2 p-2 rounded hover:bg-gray-100">
                    {pageRoute.name}
                    </li>
                    </Link>
                  );
                })}
              </ul>
            </nav>
            </div>
          )}         
        </div>
      </section>
    );
  }
}
