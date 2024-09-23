<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SizeChart;
use Illuminate\Http\Request;

class DisplaySizeChartController extends Controller
{

    public function displaySizeChart()
    {
        $sizeChart = SizeChart::first();

//        $columns = $sizeChart->columns;
//        $rows = $sizeChart->rows;
//        $tableData = json_decode($sizeChart->table_data, true);

        $columns = json_decode($sizeChart->columns, true);
        $rows = json_decode($sizeChart->rows, true);
        $tableData = json_decode($sizeChart->table_data, true);

        return response()->json([
            'columns'   => $columns,
            'rows'      => $rows,
            'tableData' => $tableData,
            'position' => 'top',
            'size_chart_icon' => 'fa-sharp fa-thin fa-ruler-horizontal',
        ]);
    }

}
