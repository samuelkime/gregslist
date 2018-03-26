<template>
    <div class="jobs">
        <h3>Jobs</h3>
        <router-link to="/"><button>Home</button></router-link>
        <label for="jobType">Job Type</label>
        <input type="text" v-model="job.type" id="type" placeholder="Sleeping Dreamer">
        <label for="education">Education Required</label>
        <input type="text" v-model="job.education" id="education" placeholder="Elder God">
        <label for="payRate">Pay Rate</label>
        <input type="number" v-model="job.payRate = 7.25" id="payRate">
        <label for="details">Job Details</label>
        <textarea cols="50" rows="4" v-model="job.details" id="details" placeholder="Enter your job description here!"></textarea>
        <button type="submit">Post Job Listing</button>
    </div>
</template>


<script>
export default {
    name: 'jobs',
    data(){
        return {
            job: {

            },
        }
    },
    methods:{
        addJob (){
                this.$store.dispatch('addJob', this.job)
                this.job = {

                }
            }
    },
    computed:{
        jobs(){
            return this.$store.state.jobs
        }
    },
    components:{}
}
</script>


<style scoped>

</style>