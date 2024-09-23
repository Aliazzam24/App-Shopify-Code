import { defineStore } from 'pinia';
import {router} from "@inertiajs/vue3";
// const deleteSelectedSizeCharts = async () => {
//     await store.deleteSelectedSizeCharts(selectedResources);
// };
//
// // delete all selected
// const bulkActions = [
//     {
//         content: 'Delete',
//         onAction: deleteSelectedSizeCharts // Call the delete function
//     }
// ];
export const useSizeChartListStore = defineStore({
    id: 'sizechartlist',
    state: () => ({
        size_chart: [],
        selectedCharts: [],
        isModalOpen: false,
        isPopoverOpen: false,
        sizeChartId: null,
        now: new Date(),
        modalTitle: '',
        modalContent: '',
        modalSecondaryButtonTitle: '',
        actionType: '',
        actionButtonClicked: false,

        processing: false,

    }),

    actions: {
        setInitData(data) {
            this.size_chart = data;
        },
        setSizeChartData(data) {
            Object.assign(this.$state, data);
        },

        deleteSizeChart(id) {
            this.processing = true;

            // Use Axios for the DELETE request
            axios.delete(`/delete/size_chart/${id}`)
                .then(() => {
                    // Remove the deleted chart from the list
                    this.size_chart = this.size_chart.filter((chart) => chart.id !== id);
                    this.isPopoverOpen = false;
                })
                .catch(() => {
                    alert('Error deleting the size chart.');
                })
                .finally(() => {
                    this.processing = false; // Reset processing state in both success and error cases
                });
        },
        deleteSelectedCharts() {
            this.processing = true;

            if (this.selectedCharts.length > 0) {
                // Use Axios for the DELETE request
                axios.delete('/delete/selected_size_charts', {
                    data: { ids: this.selectedCharts }
                })
                    .then(() => {
                        // Remove the deleted charts from the list
                        this.size_chart = this.size_chart.filter(chart => !this.selectedCharts.includes(chart.id));
                        this.selectedCharts = [];
                        this.isPopoverOpen = false;
                    })
                    .catch(() => {
                        alert('Error deleting selected size charts.');
                    })
                    .finally(() => {
                        this.processing = false; // Reset processing state in both success and error cases
                    });
            } else {
                alert('No size charts selected.');
                this.processing = false; // Reset processing state if no charts are selected
            }
        },
        DeactivateSelectedChart() {
            this.processing = true;

            // Use Axios for the POST request
            axios.post('/deactivate/size_charts', {
                selectedCharts: this.selectedCharts
            })
                .then(() => {
                    // Update the charts' status after a successful deactivation
                    this.size_chart = this.size_chart.map((chart) => {
                        if (this.selectedCharts.includes(chart.id)) {
                            return { ...chart, status: 0 }; // Deactivate (set status to 0)
                        }
                        return chart;
                    });
                    this.selectedCharts = []; // Clear the selected charts after deactivation
                    this.isPopoverOpen = false;
                })
                .catch(() => {
                    alert('Error deactivating the selected charts');
                })
                .finally(() => {
                    this.processing = false; // Reset processing state in both success and error cases
                });
        },
        DuplicateSizeChart(id) {
            this.processing = true;

            axios.post(`/duplicate/size_chart/${id}`)
                .then(response => {
                    if (response.status === 200) {
                        this.size_chart.unshift(response.data);
                        this.selectedCharts = [];
                        this.isPopoverOpen = false;
                    }
                })
                .catch(error => {
                    console.error(error);
                    alert('An error occurred while duplicating the size chart.');
                })
                .finally(() => {
                    this.processing = false; // Reset processing state in both success and error cases
                });
        },

        visitCreateChart(){
            router.visit('/app/size_chart/create', {
                onSuccess: () => {
                    this.selectedCharts = [];
                    this.isPopoverOpen = false;
                },
            })
        },
        visitPageApp(){
            router.visit('/', {
                onSuccess: (response) => {
                    this.selectedCharts = [];
                    this.isPopoverOpen = false;
                },
            })
        },
        visitEditChart(id){
            router.visit(`/app/size_chart/edit/${id}`, {
                onSuccess: (response) => {
                    this.selectedCharts = [];
                    this.isPopoverOpen = false;
                },
            })
        },

        toggleSelection(chartId) {
            if (this.selectedCharts.includes(chartId)) {
                this.selectedCharts = this.selectedCharts.filter(id => id !== chartId);
            } else {
                this.selectedCharts.push(chartId);
            }
        },
        toggleAllSelection() {
            if (this.selectedCharts.length === this.size_chart.length) {
                this.selectedCharts = [];
            } else {
                this.selectedCharts = this.size_chart.map(chart => chart.id);
            }
        },
        togglePopover() {
            this.isPopoverOpen = !this.isPopoverOpen;
        },

        updateTime() {
            setInterval(() => {
                this.now = new Date();
            }, 1000);
        },
        timeDifference(previous) {
            const msPerMinute = 60 * 1000;
            const msPerHour = msPerMinute * 60;
            const msPerDay = msPerHour * 24;
            const msPerMonth = msPerDay * 30;

            const elapsed = new Date(this.now).getTime() - previous.getTime();

            if (elapsed < msPerMinute) {
                return Math.round(elapsed / 1000) == 1 ? 'a second ago' : Math.round(elapsed / 1000) + ' seconds ago';
            }
            else if (elapsed < msPerHour) {
                return Math.round(elapsed / msPerMinute) == 1 ? 'a minute ago' : Math.round(elapsed / msPerMinute) + ' minutes ago';
            }
            else if (elapsed < msPerDay) {
                return Math.round(elapsed / msPerHour) == 1 ? 'an hour ago' : Math.round(elapsed / msPerHour) + ' hours ago';
            }
            else if (elapsed < msPerMonth) {
                return Math.round(elapsed / msPerDay) == 1 ? 'a day ago' : Math.round(elapsed / msPerDay) + ' days ago';
            }
        },

        confirmAction(action, id = null) {
            this.actionType = action;

            if (action === 'singleDelete' || action === 'duplicateChart') {
                this.sizeChartId = id;
            }



            const actionObject = this.actionMap[this.actionType];
            this.modalTitle = actionObject.title;
            this.modalContent = actionObject.content;
            this.modalSecondaryButtonTitle = actionObject.buttonTitle;
            this.isModalOpen = true;
            this.isPopoverOpen = false;
        },
        handleSecondaryButtonClick() {
            const method = this.actionMap[this.actionType].method;


            if (this.actionType === 'singleDelete' || this.actionType === 'duplicateChart') {
                method(this.sizeChartId);
            } else {
                method();
            }

            this.isModalOpen = false;
            this.isPopoverOpen = false;
        },
        handleRowClick(chartId) {
            if (!this.actionButtonClicked) {
                if (this.selectedCharts.length > 0) {
                    // If there are selected charts, toggle the selection state
                    this.toggleSelection(chartId);
                } else {
                    // If there are no selected charts, visit the edit page
                    this.visitEditChart(chartId);
                }
            }

            // Reset the action button clicked flag
            this.actionButtonClicked = false;
        },


    },


    getters: {

        isAllSelected() {
            return this.selectedCharts.length === this.size_chart.length;
        },

        actionMap() {
            return {
                'selectDelete': {
                    title: `Delete ${this.selectedCharts.length} item(s)?`,
                    content: 'This can\'t be undone.',
                    buttonTitle: 'Delete',
                    method: this.deleteSelectedCharts
                },
                'deactivate': {
                    title: `Are you sure you want to deactivate the ${this.selectedCharts.length} selected item(s)?`,
                    content: 'Customers will not be able to see them anymore.',
                    buttonTitle: 'Deactivate items',
                    method: this.DeactivateSelectedChart
                },
                'singleDelete': {
                    title: 'Delete selected size chart?',
                    content: 'This action will delete the selected size chart. This action cannot be undone.',
                    buttonTitle: 'Delete',
                    method: this.deleteSizeChart
                },
                'duplicateChart': {
                    title: 'Duplicate size chart?',
                    content: 'This may take times, please wait...',
                    buttonTitle: 'Duplicate',
                    method: this.DuplicateSizeChart
                }


            }
        },


    },
});
