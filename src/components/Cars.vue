<template>
    <div class="cars">
        <h3>Make a New Car!</h3>
        <router-link to="/"><button>Home</button></router-link>
        <form @submit.prevent="addCar">
            <label for="color">Color</label>
            <input type="text" v-model="car.color" id="color" placeholder="Black">
            <label for="make">Make</label>
            <input type="text" v-model="car.make" id="make" placeholder="Cthulu">
            <label for="year">Year</label>
            <input type="number" v-model="car.year = 1969" id="year">
            <label for="description">Color</label>
            <textarea cols="50" rows="4" v-model="car.description" id="description" placeholder="A bunch of stuff goes Nyeah."></textarea>
            <button type="submit">Post Car Listing</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "cars",
        data(){
            return{
                car: {
                   
                },
                
            }
        },
        methods:{
            addCar(){
                this.$store.dispatch('addCar', this.car)
                this.car = {
                }
            }
        },
        computed: {
            cars(){
            return this.$store.state.cars
            }
        }

    }

</script>
<style>

</style>