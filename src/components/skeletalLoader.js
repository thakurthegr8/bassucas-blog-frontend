import React, { Component } from 'react'

export default class skeletalLoader extends Component {
    render() {
        return (
            <div className="rounded-xl overflow-hidden border flex flex-col md:flex-row bg-white my-4">
            <div className="p-4 space-y-1">
                <div className="text-xl font-semibold animate-pulse bg-gray-200 h-4 w-1/2 "></div>
                <div className="animate-pulse bg-gray-200 h-4 animate-pulse w-full"></div>
                <div className="animate-pulse bg-gray-200 h-16 w-full animate-pulse">
                </div>
                <div className=" text-sm text-black font-semibold border p-2 h-2 w-4 bg-gray-200"></div>
            </div>
          </div>
        )
    }
}
