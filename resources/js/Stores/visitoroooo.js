import { defineStore } from 'pinia';
import {router} from "@inertiajs/vue3";

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
    }),

    actions: {
        setInitData(data) {
            this.size_chart = data;
        },

        setSizeChartData(data) {
            Object.assign(this.$state, data);
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

        // Function to toggle popover
        togglePopover() {
            this.isPopoverOpen = !this.isPopoverOpen;
        },

        // Action to update timestamp every second
        updateTime() {
            setInterval(() => {
                this.now = new Date();
            }, 1000);
        },

        // Function to calculate time difference
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

            if (action === 'singleDelete') {
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

            if (this.actionType === 'singleDelete') {
                method(this.sizeChartId);
            } else {
                method();
            }

            this.isModalOpen = false;
            this.isPopoverOpen = false;
        },


        async deleteSizeChart(id) {
            router.delete(`/delete/size_chart/${id}`,{
                onSuccess: (response) => {
                    this.size_chart = this.size_chart.filter((chart) => chart.id !== id);
                },
                onError: () => {
                    alert('error');
                }
            });
        },

        async deleteSelectedCharts() {
            if (this.selectedCharts.length > 0) {
                await router.delete('/delete/selected_size_charts', {
                    data: { ids: this.selectedCharts },
                    onSuccess: () => {
                        this.size_chart = this.size_chart.filter(chart => !this.selectedCharts.includes(chart.id));
                        this.selectedCharts = [];
                    },
                    onError: () => {
                        alert('Error deleting selected size charts.');
                    }
                });
            } else {
                alert('No size charts selected.');
            }
        },

        async DeactivateSelectedChart() {
            try {
                await router.post('/deactivate/size_charts', {
                    selectedCharts: this.selectedCharts
                }, {
                    onSuccess: () => {
                        this.size_chart = this.size_chart.map((chart) => {
                            if (this.selectedCharts.includes(chart.id)) {
                                return { ...chart, status: 0 }; // Deactivate (set status to 0)
                            }
                            return chart;
                        });
                        this.selectedCharts = []; // Clear the selected charts after deactivation
                    },
                    onError: () => {
                        alert('Error deactivating the selected charts');
                    }
                });
            } catch (error) {
                console.error(error);
            }
        },

        visitCreateChart(){
            router.visit('/app/size_chart/create', {
                onSuccess: (response) => {
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
        }

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
                }
            }
        },


    },
});
