import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Icon extends Component {
    render() {
        // console.log(this.props.icon)
        const _w = 30
        const _h = 30
        switch (this.props.icon) {
            case 'angular':
                return (
                    <svg height={_h} viewBox="0 0 256 272" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M.1 45.522L125.908.697l129.196 44.028-20.92 166.45L125.91 271.14 19.325 211.973.1 45.522z" fill="#E23237" /><path d="M255.104 44.725L125.908.697V271.14l108.277-59.865 20.92-166.55z" fill="#B52E31" /><path d="M126.107 32.274l-78.393 174.42 29.285-.5 15.738-39.346h70.325l17.233 39.845 27.99.498-82.18-174.916zm.2 55.882l26.496 55.383h-49.806l23.31-55.384z" fill="#FFF" /></svg>
                )
            case 'ionic':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" height={_h} viewBox="0 0 178.54 178.54"><defs></defs><title>ionic</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle fill='#4e8ef7' id="Oval" cx="89.27" cy="89.27" r="36.45" /><path id="Shape" fill='#4e8ef7' d="M163.65 27.42A12.52 12.52 0 0 0 142.92 18a89.35 89.35 0 1 0 17.66 17.66 12.46 12.46 0 0 0 3.07-8.2zM89.27 175.54a86.27 86.27 0 1 1 51.62-155.35 12.52 12.52 0 0 0 17.46 17.46 86.23 86.23 0 0 1-69.08 137.89z" /></g></g></svg>
                )
            case 'react':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" height={_h} viewBox="0 0 561.8 499.8"><title>react</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle id="Oval" style={{ fill: '#00d8ff' }} cx="280.9" cy="249.43" r="50.17" /><path id="Shape" style={{ fill: 'none', stroke: '#00d8ff', strokeWidth: '24px' }} d="M280.9 147.43c67.36 0 129.93 9.66 177.11 25.91 56.84 19.57 91.79 49.23 91.79 76.09 0 28-37 59.5-98.08 79.73-46.15 15.29-106.88 23.27-170.82 23.27-65.55 0-127.63-7.49-174.29-23.44C47.57 308.81 12 276.89 12 249.43c0-26.64 33.37-56.08 89.41-75.62 47.35-16.51 111.47-26.38 179.49-26.38z" /><path id="Shape-2" data-name="Shape" style={{ fill: 'none', stroke: '#00d8ff', strokeWidth: '24px' }} d="M192.11 198.72C225.76 140.38 265.39 91 303 58.24c45.38-39.46 88.53-54.92 111.8-41.5 24.25 14 33 61.81 20.07 124.8-9.81 47.62-33.23 104.21-65.18 159.6-32.75 56.78-70.25 106.86-107.37 139.27-47 41.07-92.4 55.93-116.19 42.21-23.08-13.31-31.91-56.92-20.83-115.23 9.35-49.27 32.83-109.74 66.81-168.66z" /><path id="Shape-3" data-name="Shape" style={{ fill: 'none', stroke: '#00d8ff', strokeWidth: '24px' }} d="M192.19 301.28C158.45 243 135.46 184 125.88 135c-11.54-59-3.38-104.08 19.87-117.54C170 3.44 215.8 19.71 263.89 62.4c36.36 32.28 73.69 80.84 105.72 136.17 32.84 56.73 57.46 114.21 67 162.58 12.12 61.21 2.31 108-21.45 121.74-23.06 13.35-65.25-.78-110.24-39.5-38-32.71-78.68-83.25-112.76-142.11z" /></g></g></svg>
                )
            case 'wordpress':
                return (
                    <svg height={_h} viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M18.124 127.5c0 43.296 25.16 80.71 61.646 98.442L27.594 82.986a108.965 108.965 0 0 0-9.47 44.514zm183.22-5.52c0-13.517-4.855-22.88-9.02-30.165-5.544-9.01-10.74-16.64-10.74-25.65 0-10.055 7.625-19.415 18.367-19.415.486 0 .945.06 1.418.088-19.46-17.83-45.387-28.714-73.863-28.714-38.213 0-71.832 19.606-91.39 49.302 2.566.077 4.984.13 7.04.13 11.44 0 29.15-1.387 29.15-1.387 5.896-.35 6.59 8.31.7 9.01 0 0-5.925.696-12.52 1.04L100.32 194.7l23.937-71.79-17.042-46.692c-5.89-.345-11.47-1.042-11.47-1.042-5.894-.346-5.203-9.358.69-9.01 0 0 18.065 1.388 28.812 1.388 11.44 0 29.15-1.388 29.15-1.388 5.9-.348 6.595 8.312.703 9.01 0 0-5.938.697-12.52 1.042l39.53 117.58 10.91-36.457c4.727-15.128 8.326-25.994 8.326-35.36zm-71.92 15.088L96.606 232.43a109.376 109.376 0 0 0 30.9 4.457c12.736 0 24.95-2.202 36.322-6.2a9.605 9.605 0 0 1-.78-1.507l-33.624-92.112zm94.058-62.045a83.98 83.98 0 0 1 .737 11.247c0 11.1-2.074 23.577-8.318 39.178l-33.41 96.6c32.517-18.963 54.39-54.193 54.39-94.545 0-19.017-4.857-36.9-13.4-52.48zM127.505 0C57.2 0 0 57.196 0 127.5c0 70.313 57.2 127.507 127.505 127.507 70.302 0 127.51-57.194 127.51-127.507 0-70.304-57.207-127.5-127.51-127.5zm0 249.163c-67.08 0-121.66-54.578-121.66-121.663 0-67.08 54.577-121.654 121.66-121.654 67.078 0 121.652 54.574 121.652 121.654 0 67.085-54.574 121.663-121.652 121.663z" fill="#464342" /></svg>
                )
            case 'gatsby':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" height={_h} fill="#744c9e" viewBox="0 0 1200 1200"><path d="M600 28.644C284.45 28.644 28.644 284.448 28.644 600c0 315.553 255.806 571.356 571.356 571.356 315.553 0 571.356-255.804 571.356-571.356S915.553 28.644 600 28.644zM151.414 605.956l442.63 442.63c-243.055-3.168-439.463-199.576-442.63-442.63zm549.003 431.414L162.63 499.583C208.232 300.143 386.734 151.34 600 151.34c149.077 0 281.147 72.726 362.734 184.615l-62.12 54.812C834.434 295.86 724.478 233.747 600 233.747c-158.485 0-293.447 100.667-344.46 241.544l469.17 469.17C838.648 903.2 926.276 807.02 955.624 687.9H761.152V600h287.509c0 213.266-148.8 391.768-348.243 437.37z" /></svg>
                )
            default:
                return (<span></span>)
        }

    }
}
Icon.propTypes ={
    icon: PropTypes.string
}

export default Icon
