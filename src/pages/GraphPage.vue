<template>
    <div>
        <List></List>
        <AddItem></AddItem>
        <ChartWrapper></ChartWrapper>
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
                
                let dps = this.$store.getters.getDataPoints
                console.log(dps)
                console.log( dps.map((val, i) => i))
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

