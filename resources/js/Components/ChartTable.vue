<template>
    <div class="table-container">
        <table>
            <tbody>
            <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
                <td v-for="(cell, colIndex) in row" :key="colIndex">
                    <input type="text" v-model="tableData[rowIndex][colIndex]" />
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    tableData: Array,
});


</script>
<style scoped>

.table-container {
    height: 340px;
    min-width: 100%;
    overflow: auto;
    border: 1px solid #dcdcdc;
}

table {
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    border: 1px solid #ffffff;
}


tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

tbody tr:hover {
    background-color: #f3f3f3;
}

td {
    border: 1px solid #ddd;
    padding: 4px;
    text-align: left;
}

input[type="text"] {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    box-sizing: border-box;
    border: 1px solid #d0d0d0;
    border-radius: 2px;
    transition: 0.5s;
}

input[type="text"]:focus {
    border: 2px solid #555;
}


</style>
