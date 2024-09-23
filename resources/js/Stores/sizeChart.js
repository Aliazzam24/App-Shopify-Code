
import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from "sweetalert2";

export const useSizeChartStore = defineStore({
    id: 'sizechart',
    state: () => ({
        columns: 0,
        rows: 0,
        tableData: [],
        initialData: [],

        set_product:'',

        addColumnBeforeIndex: '',
        showModal: false,
        isSubmitting: false,
        processing: false,

        showClearModal: false,

    }),

    actions: {
        setInitData(columns, rows, tableData) {
            this.columns = columns;
            this.rows = rows;
            this.set_product = 'any';

            this.tableData = tableData && tableData.length ? tableData : this.initializeTableData(rows, columns);
            this.initialData = JSON.parse(JSON.stringify(this.tableData)); // Store initial data for comparison

        },

        setSizeChartData(data) {
            Object.keys(data).forEach(key => {
                if (key in this) {
                    this[key] = data[key];
                }
            });
        },

        initializeTableData(rows, columns) {
            const tableData = [];
            for (let i = 0; i < rows; i++) {
                const row = [];
                for (let j = 0; j < columns; j++) {
                    row.push('');
                }
                tableData.push(row);
            }
            return tableData;
        },

        async submitTable() {
            this.processing = true;
            try {
                const response = await axios.post('/save-size-chart', this.$state);
                console.log('Table data saved successfully:', response.data);
                this.showSuccessToast('Size chart saved');

                this.initialData = JSON.parse(JSON.stringify(this.tableData)); // Update initial data after successful submission
            } catch (error) {
                console.log(error);
            } finally {
                this.processing = false;
                this.isSubmitting = false;
            }
        },

        addColumn() {
            this.tableData.forEach(row => row.push(''));
        },
        removeColumn() {
            if (this.tableData[0]?.length > 1) {
                this.tableData.forEach(row => row.pop()); // removes last column from each row
            }
        },

        addRow() {
            this.tableData.push(new Array(this.tableData[0].length).fill(''));
        },
        removeRow() {
            if (this.tableData.length > 1) {
                this.tableData.pop(); // removes the last row
            }
        },

        clearAndAddColumn() {
            this.tableData = this.initializeTableData(1, 1);
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

        discardChanges() {
            this.tableData = JSON.parse(JSON.stringify(this.initialData)); // Reset table data to initial state
        },

    },

    getters: {
        hasChanges: (state) => {
            return JSON.stringify(state.tableData) !== JSON.stringify(state.initialData); // Compare current data with initial data
        },

        //toast to submitForm
        showSuccessToast: () => (message) => {
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
    }
});
