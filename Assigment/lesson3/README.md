### Main point of Lesson 3
* we need to use setState method to update the state objects becuase it help us to trigger the React dom elements 
* React Dom is a vertual DOM that means it is a copy of the DOM that can be updated with out affecting the actual DOM and it has thesame property with the real DOM
* Probs is short for properties and they are used to pass data between React componenets .React data flow between componenets is uni-directional from Parent to child only 
* React has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.
## why we need to use setState to update state of the objects? 
### answer 
   * a change in the state happened based on the user-input ,and it will triggering an event how ever if we update the state object with out setState it will change the state but it will not trigger the events so we can not see the changes in the browesors
   ## why React DOM is cheaper than Real DOM
   ### answer
   * when the sates updated React gets informed and immediately re-renders the DOM -not the whole DOM ,but only the componenets with updated state and this also areason why reacts makes fast