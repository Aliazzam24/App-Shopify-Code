// store.js
import { defineStore } from "pinia";

export const useStore = defineStore('myStore', {
    state: () => ({
        isPopoverOpen: false,
        isModalOpen: false,
        modalTitle: '',
        modalContent: '',
        modalSecondaryButtonTitle: '',
        actionType: '',
        sizeChartId: null,
    }),
    getters: {
        actionMap() {
            return {
                'selectDelete': {
                    title: 'Delete chart',
                    content: 'Are you sure you want to delete this size chart?',
                    buttonTitle: 'Delete',
                    method: this.deleteSelectedCharts
                },
                'deactivate': {
                    title: 'Deactivate chart',
                    content: 'Are you sure you want to deactivate this size chart?',
                    buttonTitle: 'Deactivate',
                    method: this.deactivateSelectedChart
                },
                'singleDelete': {
                    title: 'Delete selected size chart?',
                    content: 'This action will delete the selected size chart. This action cannot be undone.',
                    buttonTitle: 'Delete',
                    method: this.deleteSizeChart
                }
            }
        }
    },
    actions: {
        setSizeChartData(data) {
            // set the data
            this.$state = {...this.$state, ...data};
        },
        deleteSelectedCharts() {
            // your implementation
        },
        deactivateSelectedChart() {
            // your implementation
        },
        deleteSizeChart() {
            // your implementation
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
        },
        handleSecondaryButtonClick() {
            const method = this.actionMap[this.actionType].method;

            if (this.actionType === 'singleDelete') {
                method(this.sizeChartId);
            } else {
                method();
            }

            this.isModalOpen = false;
        },
    },
});
