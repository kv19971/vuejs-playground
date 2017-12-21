<template>
    <div>
        <List></List>
        <AddItem></AddItem>
        <ChartWrapper type="line" :data="getDataPoints"></ChartWrapper>
    </div>
</template>

<script>
    import List from '@/components/List'
    import AddItem from '@/components/AddItem'
    import ChartWrapper from '@/components/ChartWrapper'
    import { mapGetters, mapActions } from 'vuex'
    export default {
        components: {
            List, 
            AddItem,
            ChartWrapper
        },
        computed: {
            getDataPoints () {
                console.log(this.$store)
                let dps = this.$store.getters.getDataPoints
                
                return {
                    labels: dps.map((val, i) => i),
                    datasets: [
                        {
                            label: "???",
                            data: dps
                        }
                    ]}
            }
        }
    }
</script>

