//App.js

import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'T-shirt', 
		price: 499, 
		image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnQX23WGdDLsxBQese1XQfQvAwgTmq764dg&usqp=CAU'
		},
		{ id: 2, 
		name: 'Bag', 
		price: 1699, 
		image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mqeA35E3QQMDmyfGycvqpnoig6LYZDsxSQ&usqp=CAU'
		},
		{ id: 3, 
		name: 'Hoodie', 
		price: 799, 
		image: 
'data:image/jpeg;base64,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'
		}
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
