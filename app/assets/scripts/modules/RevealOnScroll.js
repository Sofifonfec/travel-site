import $ from 'jquery'; 				 //this line will work as long as we have jquery within our node modules folder
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) {   			//The order of these lines matter. We have to call each method in order 
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}
	
	hideInitially() {   						//we first have to hide the elements we want to reveal on scroll 
		this.itemsToReveal.addClass("reveal-item")  //we add a class to the elements and hide them in a new css file 
	}
	
	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {   //We target each element. Everything will run once for each element 
			var currentItem = this;
			new Waypoint({  					 //we have access to the 'waypoint' class which takes 2 properties (element & handler)
				element: currentItem,          // The DOM element that we want to watch for 
				handler: function() {			// What we want to happen to the element 
					$(currentItem).addClass("reveal-item--is-visible");  	// we add a modifier class to make elements visible  
				},
				offset: that.offsetPercentage		//customize waypoint to trigger its handler a bit earlier (see App.js -> 85%)
			});
		});
	}
}

export default RevealOnScroll;