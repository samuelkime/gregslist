<template>
    <div class="houses">
        <router-link to="/"><button>Home</button></router-link>
        <div>
        <label for="bedBath">Number of Bedrooms/Bathrooms</label>
        <input type="text" v-model="house.bedBath" id="bedBath" placeholder="1bd/1bth">
        </div>
        <div>
        <label for="sqfoot">Square Footage</label>
        <input type="number" v-model="house.sqfoot" id="sqfoot" placeholder="600">
        </div>
        <div>
        <label for="yearBuilt">Year Built</label>
        <input type="number" v-model="house.yearBuilt = 1969" id="yearBuilt">
        </div>
        <div>
        <label for="location">City/State</label>
        <input type="text" v-model="house.location" id="location" placeholder="City and State">
        </div>
        <div>
        <label for="price">Price</label>
        <input type="number" v-model="house.price" id="price" placeholder="80,000">
        </div>
        <button type="submit">Post House Listing</button>

    </div>
</template>


<script>
export default {
    name: 'houses',
    data(){
        return {
            house: {

            },
        }
    },
   
    methods:{
        addHouse (){
            this.$store.dispatch('addHouse', this.house)
            this.house = {

            }
        }
    },
    computed:{
        houses(){
            return this.$store.state.houses
        }

    }
}
</script>


<style scoped>

</style>