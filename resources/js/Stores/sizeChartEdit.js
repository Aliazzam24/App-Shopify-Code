import { defineStore } from 'pinia';
import {router} from "@inertiajs/vue3";
import Swal from "sweetalert2";
export const useSizeChartEditStore = defineStore('sizeChartEdit', {
    state: () => ({
        id: null,
        internalName: '',
        Name: '',
        titlePopup: '',
        columns: 0,
        rows: 0,
        tableData: [],

        status: 'active',

        statusOption: [
            { label: 'Active', value: 'active' },
            { label: 'Draft', value: 'draft' }
        ],
        addColumnBeforeIndex: '',
        set_product: 'any',

        processing: false,
        isSubmitting: false,

        initialData: null,

        //modal
        active: false,
        modalDuplicate: false,
        modalTitle: '',
        modalContent: '',
        primaryAction: { content: '', onAction: () => {} },
        secondaryActions: []

    }),
    actions: {


        setInitData(sizeChart) {
            this.id = sizeChart.id || null;
            this.internalName = sizeChart.internalName || '';
            this.Name = '';
            this.titlePopup = sizeChart.titlePopup || '';
            this.columns = sizeChart.columns || 0;
            this.rows = sizeChart.rows || 0;
            this.tableData = sizeChart.tableData ? JSON.parse(JSON.stringify(sizeChart.tableData)) : [];
            this.status = sizeChart.status;
            this.initialData = JSON.parse(JSON.stringify(this.$state)); // Use deep clone for initialData
        },
        setSizeChartData(data) {
            Object.keys(data).forEach(key => {
                if (key in this) {
                    this[key] = JSON.parse(JSON.stringify(data[key]));
                }
            });
        },

        //handleSubmit
        handleSubmit() {
            this.processing = true;

            axios.put(`/update-size-charts/${this.id}`, this.$state)
                .then(response => {
                    console.log(response);
                    this.Toast('Settings updated');
                    this.setInitData(this.$state); // Reset initial data to the current state after successful save
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    this.processing = false;
                    this.isSubmitting = false;
                });
        },

        // Publish and reset and delete
        PublishStatusChart() {
            this.processing = true;
            this.status = 'active';

            axios.post(`/publish/status/chart`, { id: this.id })
                .then(response => {
                    console.log("Size chart published successfully: ", response);
                    this.status = 'active';
                    this.setInitData(this.$state); // Reset initial data to the current state after successful save
                })
                .catch(error => {
                    console.error("Error publishing size chart: ", error);
                })
                .finally(() => {
                    this.processing = false;
                    this.isSubmitting = false;
                });
        },
        resetPublish() {
            this.status = 'active';
        },

        //Delete and modal
        SizeChartDelete() {
            axios.delete(`/size/chart/delete`, { data: { id: this.id } })
                .then(response => {
                    router.visit('/app/size_chart/list');
                    this.active = false
                })
                .catch(error => {
                    console.error("Error deleting size chart: ", error);
                });
        },
        ShowDeleteModal() {
            this.primaryAction = {
                content: 'Delete',
                destructive: true,
                onAction: () => {
                    this.SizeChartDelete()
                },
            };
            this.secondaryActions = [{ content: 'Continue editing', onAction: () => this.active = false }];
            this.modalTitle = 'Are you sure you want to delete New Size Chart?';
            this.modalContent = 'This can\'t be undone.';
            this.active = true;
        },

        //Duplicate and modal
        duplicateEditPage() {
            axios.put('/size/chart/duplicate/edit',
                {
                    id: this.id,
                    Name: this.Name
                })
                .then(response => {
                    router.visit('/app/size_chart/list');
                    this.active = false
                })
                .catch(error => {
                    console.error("Error duplicating size chart: ", error);
                });
        },
        showDuplicateModal() {
            this.primaryAction = {
                content: 'Duplicate',
                onAction: this.duplicateEditPage
            };
            this.secondaryActions = [{content: 'Cancel', onAction: () => {
                    this.active = false;
                    this.modalDuplicate = false;
                }}];
            this.modalTitle = 'Duplicate this size chart?';
            this.modalContent = '';
            this.active = true;
            this.modalDuplicate = true;
        },

        //Discard and modal
        discardChanges() {
            if (this.initialData) {
                const data = this.initialData;
                this.internalName = data.internalName;
                this.titlePopup = data.titlePopup;
                this.status = data.status;
                this.columns = data.columns;
                this.rows = data.rows;
                this.tableData = JSON.parse(JSON.stringify(data.tableData)); // Deep clone to prevent reference issues
            }
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

        //Erase and modal
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

        //Has changes and table equal
        hasChanges() {
            return this.internalName !== this.initialData.internalName
                || !this.isTableDataEqual(this.tableData, this.initialData.tableData)
                || this.columns !== this.initialData.columns
                || this.titlePopup !== this.initialData.titlePopup
                || this.status !== this.initialData.status
                || this.rows !== this.initialData.rows;
        },
        isTableDataEqual(arr1, arr2) {
            if (arr1.length !== arr2.length) {
                return false;
            }
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i].join('') !== arr2[i].join('')) {
                    return false;
                }
            }
            return true;
        },

        //table button
        addColumn() {
            // Check if the number of columns is less than 6 before adding another column
            if (this.tableData[0].length < 6) {
                // Add a new column at the end of each row
                this.tableData.forEach(row => row.push(''));
            } else {
                console.log("Maximum number of columns reached!");
            }
        },
        removeColumn() {
            // Check if the number of columns is more than 1 before removing a column
            if (this.tableData[0].length > 1) {
                // Remove the last column from each row
                this.tableData.forEach(row => row.pop());
            } else {
                console.log("Minimum number of columns reached!");
            }
        },
        addRow() {
            // Check if the number of rows is less than 6 before adding another row
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
                this.columns += 1;
            }
        },
        clearAndAddColumn() {
            this.tableData = [[]]; // clear the entire data
            this.tableData[0].push(''); // add new column to the first row
        },

    },
    getters: {
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
        }
    },
});

