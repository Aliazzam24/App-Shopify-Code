import { defineStore } from 'pinia';

export const useSizeChartEditStore = defineStore('sizeChartEdit', {
    state: () => ({
        internalName: '',
        columns: 0,
        rows: 0,
        tableData: [],
        initialData: null,
    }),
    actions: {
        setInitData(sizeChart) {
            this.internalName = sizeChart.internalName || '';
            this.columns = sizeChart.columns || 0;
            this.rows = sizeChart.rows || 0;
            this.tableData = sizeChart.tableData ? JSON.parse(JSON.stringify(sizeChart.tableData)) : [];

            this.initialData = {...this.$state}
        },

        setSizeChartData(data) {
            Object.keys(data).forEach(key => {
                if (key in this) {
                    this[key] = JSON.parse(JSON.stringify(data[key]));
                }
            });
        },

        hasChanges() {
            const tableDataEqual = (arr1, arr2) => {
                if (arr1.length !== arr2.length) {
                    return false;
                }

                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i].join('') !== arr2[i].join('')) {
                        return false;
                    }
                }

                return true;
            }

            return this.internalName !== this.initialData.internalName
                || this.columns !== this.initialData.columns
                || this.rows !== this.initialData.rows
                || !tableDataEqual(this.tableData, this.initialData.tableData);
        },
    },
});
