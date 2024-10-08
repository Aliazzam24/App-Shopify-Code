import { defineStore } from 'pinia';
import Swal from "sweetalert2";
import {router} from "@inertiajs/vue3";

export const useSizeChartCreateStore = defineStore('sizeChartCreate', {
    state: () => ({
        internalName: 'Untitled',
        titlePopup: 'Size Chart',
        columns: 4,
        rows: 5,
        tableData: [
            ["Size", "Chest", "Waist", "Length"],
            ["ok", null, null, null],
            ["yes", null, null, null],
            ["done", null, null, null],
            ["no", null, null, null],
            ["yes", null, null, null]
        ],
        status: 'active',
        statusOption: [
            { label: 'Active', value: 'active' },
            { label: 'Draft', value: 'draft' }
        ],

        set_product: 'any',
        addColumnBeforeIndex: '',


        processing: false,
        showClearModal: false,


        //modal
        active: false,
        modalDuplicate: false,
        modalTitle: '',
        modalContent: '',
        primaryAction: { content: '', onAction: () => {} },
        secondaryActions: []

    }),
    actions: {
        async handleSubmit() {
            this.processing = true;

            router.post('/create-size-charts', this.$state, {

                onSuccess: (response) => {

                    this.processing = false;
                    this.Toast('Size chart saved');

                    if (response.data && response.data.success) {
                        router.visit(`/app/size_chart/edit/${response.data.id}`);
                    }
                },
                onError: () => {
                    this.processing = false;
                }
            });
        },


        resetPublish() {
            this.status = 'active';
        },

        discardChanges() {
            router.visit('/app/size_chart/list',{

                onSuccess: () => {
                    this.$reset(); // Reset to initial state
                    this.isModalOpen = false;
                },
            });
        },
        showDiscardModal() {
            this.primaryAction = {
                content: 'Discard changes',
                destructive: true,
                onAction: () => {
                    this.discardChanges()
                    this.active = false;
                },
            };
            this.secondaryActions = [{ content: 'Continue editing', onAction: () => this.active = false }];
            this.modalTitle = 'Discard all unsaved changes';
            this.modalContent = 'If you discard changes, you\'ll delete any edits you made since you last saved.';
            this.active = true;
        },

        EraseContent() {
            this.tableData = [[]]; // clear the entire data
            this.tableData[0].push(''); // add new column to the first row
        },
        showEraseModal() {
            this.primaryAction = {
                content: 'Erase content',
                destructive: true,
                onAction: () => {
                    this.EraseContent()
                    this.active = false;
                },
            };
            this.secondaryActions = [{ content: 'Cancel', onAction: () => (this.active = false) }];
            this.modalTitle = 'Erase content?';
            this.modalContent = 'This will erase all the content entered in this section. This action cannot be undone.';
            this.active = true;
        },

        visitPageApp(){
            router.visit('/', {
                onSuccess: (response) => {
                    this.selectedCharts = [];
                    this.isPopoverOpen = false;
                },
            })
        },

        addColumn() {
            // Check if the number of columns is less than 10 before adding another column
            if (this.tableData[0]?.length < 6) {
                this.tableData.forEach(row => row.push(''));
            } else {
                console.log("Maximum number of columns reached!");
            }
        },
        removeColumn() {
            if (this.tableData[0]?.length > 1) {
                this.tableData.forEach(row => row.pop()); // removes last column from each row
            }
        },
        addRow() {
            // Check if the number of rows is less than 10 before adding another row
            if (this.tableData.length < 6) {
                this.tableData.push(new Array(this.tableData[0].length).fill(''));
            } else {
                console.log("Maximum number of rows reached!");
            }
        },
        removeRow() {
            if (this.tableData.length > 1) {
                this.tableData.pop(); // removes the last row
            }
        },
        addColumnBefore() {
            if (this.addColumnBeforeIndex === '') {
                alert('Please select a column');
            } else {
                let colIndex = parseInt(this.addColumnBeforeIndex);
                this.tableData.forEach(row => row.splice(colIndex, 0, ''));
                this.addColumnBeforeIndex = "";
            }
        },

    },
    getters: {

        initialState: (state) => ({ ...state }),
        //toast to submitForm
        Toast: () => (message) => {
            Swal.fire({
                toast: true,
                position: 'bottom',
                showConfirmButton: false,
                showCloseButton: true,
                timer: 2000,
                timerProgressBar: true,
                title: message,
                background: '#1a1a1a',
                color: '#FFFFFF',
                width: '217px',
                padding: '6px',
            });
        },
    }

});
