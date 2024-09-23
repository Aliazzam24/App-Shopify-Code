
import { defineStore } from 'pinia';
import axios from "axios";

export const useSizeChartListStore = defineStore({
    id: 'sizechartlist',
    state: () => ({
        size_chart: [],

    }),

    actions: {

        setInitData(data) {
            this.size_chart = data;

        },
        setSizeChartData(data) {
            Object.assign(this.$state, data);
        },


        // Quick Action table
        deleteSizeChart(id,resetFunc) {
            axios.delete(`/delete/size_chart/${id}`)
                .then(() => {
                    // Remove the deleted chart from the list
                    this.size_chart = this.size_chart.filter((chart) => chart.id !== id);
                    resetFunc(); // Call the reset function after successful deletion
                })
                .catch(() => {
                    console.error(error);
                    this.processing = false;
                })
        },
        duplicateSizeChart(id, resetFunc) {
            axios
                .post(`/duplicate/size_chart/${id}`)
                .then((response) => {
                    // Add the newly duplicated chart to the list
                    this.size_chart.push(response.data);
                    resetFunc(); // Call the reset function after successful duplication

                })
                .catch((error) => {
                    console.error(error);
                });
        },

    },
});

// watchEffect(() => {
//     // Note use of .map to create a new array
//     selectedResources.value = store.size_chart.map((chart) => chart.id);
// });

// watchEffect(() => {
//     selectedResources.value = selectedResources.value.filter(id => store.size_chart.some(chart => chart.id === id));
// });
// If the chart length is increased, a new size chart has been added
// Get the last chart (the newly created one)


// const deleteSizeChart = async (id) => {
//     try {
//         await axios.delete(`/delete/size_chart/${id}`);
//         // Find the index of the chart with the provided id
//         let index = store.size_chart.findIndex(chart => chart.id === id);
//         // If the chart is found, remove it from the store
//         if (index !== -1) {
//             store.size_chart.splice(index, 1);
//         }
//     } catch (err) {
//         console.error(err);
//     }
// };
// async deleteSizeChart(id) {
//     this.processing = true;
//     try {
//         await axios.delete(`/delete/size_chart/${id}`);
//         const index = this.size_chart.findIndex(chart => chart.id === id);
//         if (index !== -1) {
//             this.size_chart.splice(index, 1);
//         }
//         this.processing = false;
//     } catch (err) {
//         this.processing = false;
//         console.error(err);
//     }
// },
