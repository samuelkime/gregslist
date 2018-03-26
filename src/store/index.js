import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

var store = new vuex.Store({
    state: {
        cars: [""],
        jobs: [""],
        houses: [""]
    },
    mutations: {
       setCar(state, car){
           state.cars.push(car)
       }
    },
    actions: {
        getCars({dispatch, commit}){
           //go to server and get cars then send to mutations
        },
        // takes in car from our component
        addCar({dispatch, commit}, car){
        //server to store the car in a DB
          commit('setCar', car)
        }
    }
}) 

export default store