<?php

namespace App\Http\Controllers;

use App\Http\Requests\SizeChartRequest;
use App\Http\Requests\VisitorCounterRequest;
use App\Models\SizeChart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class SizeChartController extends Controller
{

//SizeChart Setting Page
    private const WIDGET_OPTIONS_SizeChart = [
        'Chart Icon','Chart Border','Chart Bottom','Chart Top','Chart Text',
        'Chart Background Color','Chart Text Color','Chart Border Color',
        'Chart Border Thickness','Chart Row Background Color',
    ];
    public function SizeChartSetting()
    {
        $widgetOptions = DB::table('widget_options')
            ->whereIn('option_name', self::WIDGET_OPTIONS_SizeChart)
            ->get()
            ->keyBy('option_name');
        return Inertia::render('SizeChartSetting',compact('widgetOptions'));

    }
    public function updateSettingSizeCharts(SizeChartRequest $request)
    {
        $validatedData = $request->validated();
        $this->updateWidgetOptions($validatedData);

        return response()->json([
            'message' => 'Widget options updated successfully'
        ], 200);
    }

    private function updateWidgetOptions($validatedData)
    {
        foreach (self::WIDGET_OPTIONS_SizeChart as $option) {
            DB::table('widget_options')
                ->where('option_name', $option)
                ->update(['option_value' => $validatedData[strtolower(str_replace(' ', '_', $option))]]);
        }
    }

//SizeChart List Page
    public function SizeChartList()
    {

        $size_chart = SizeChart::latest()->get();

        return Inertia::render('SizeChartList',compact('size_chart'));
    }
    public function DeleteSizeChart($id)
    {
        // Attempt to find a SizeChart with the provided $id
        $sizeChart = SizeChart::find($id);

        // If SizeChart is found
        if($sizeChart){
            // Delete the SizeChart
            $sizeChart->delete();

            return response()->json();
        }

        return response()->json(['message' => 'Size chart not found'], 404);
    }
    public function deleteSelectedSizeCharts(Request $request)
    {
        $ids = $request->ids;

        // If the IDs exist
        if ($ids) {
            // Delete all size charts that match the provided IDs
            SizeChart::whereIn('id', $ids)->delete();

            return response()->json();
        }
        return response()->json(['message' => 'No size charts selected'], 400);
    }
    public function deactivateSelectedCharts(Request $request)
    {
        $ids = $request->ids;

        if (!$ids) {
            return response()->json(['message' => 'No size charts selected'], 400);
        }

        SizeChart::whereIn('id', $ids)->update(['status' => 0]);
        return response()->json();
    }
    public function DuplicateSizeChart($id)
    {
        // Attempt to find a SizeChart by the provided ID
        $sizeChart = SizeChart::find($id);

        // If the SizeChart is found
        if($sizeChart){
            // Create a duplicate of the SizeChart
            $newSizeChart = $sizeChart->replicate();

            // Update the 'internal_name' attribute to indicate this is a copy
            $newSizeChart->internal_name = ' Copy of ' . $newSizeChart->internal_name ;

            // Save the new (copied) SizeChart to the database
            $newSizeChart->save();

            return response()->json($newSizeChart);
        }

        return response()->json(['message' => 'Size chart not found'], 404);
    }

//SizeChart Crate Page
    public function createSizeChart()
    {
        return Inertia::render('CreateSizeChart');
    }
    public function create(Request $request)
    {
        Validator::make($request->all(), [
            'internalName' => 'required|string|max:255',
            'titlePopup' => 'required|string|max:255',
            'columns' => 'required|integer',
            'rows' => 'required|integer',
            'tableData'=> 'required|array',
            'status' => 'required|integer|in:1,0' //for instance, here, 1 represents Active and 0 represents Draft
        ]);

        // Create a new SizeChart object
        $sizeChart = new SizeChart;
        $sizeChart->internal_name = $request->internalName;
        $sizeChart->title_popup = $request->titlePopup;
        $sizeChart->columns = $request->columns;
        $sizeChart->rows = $request->rows;
        $sizeChart->table_data = json_encode($request->tableData);
        $sizeChart->status = $request->status;

        // Save the SizeChart. If successful, route to the SizeChart's edit page with its id
        if($sizeChart->save()) {
            return to_route('size-charts.edit', $sizeChart->id);
        }
    }

//SizeChart Edit Page
    public function editSizeChart($id)
    {
        $sizeChart = SizeChart::findOrFail($id);

        return Inertia::render('EditSizeChart', [
            'sizeChart' => [
                'id' => $sizeChart->id,
                'internalName' => $sizeChart->internal_name,
                'titlePopup' => $sizeChart->title_popup,
                'columns' => $sizeChart->columns,
                'rows' => $sizeChart->rows,
                'status' => $sizeChart->status,
                'tableData' => json_decode($sizeChart->table_data, true)
            ]
        ]);
    }
    public function update(Request $request, $id)
    {
        Validator::make($request->all(), [
            'internalName' => 'required|string|max:255',
            'titlePopup' => 'required|string|max:255',
            'status' => 'required|integer|in:1,0',
            'columns' => 'required|integer',
            'rows' => 'required|integer',
            'tableData'=> 'required|array',
        ]);

        $sizeChart = SizeChart::findOrFail($id);

        // Update the SizeChart's attributes based on the request data
        $sizeChart->internal_name = $request->internalName;
        $sizeChart->title_popup = $request->titlePopup;
        $sizeChart->status = $request->status;
        $sizeChart->columns = $request->columns;
        $sizeChart->rows = $request->rows;
        $sizeChart->table_data = json_encode($request->tableData);


        if($sizeChart->save()) {
            return response()->json($sizeChart->id);
        }

    }
    public function duplicateEditPage(Request $request)
    {
        $originalSizeChart = SizeChart::findOrFail($request->id);

        $newSizeChart = $originalSizeChart->replicate();
        $newSizeChart->internal_name = $request->Name;

        $newSizeChart->save();

        return response()->json([
            'sizeChart' => $newSizeChart,
        ]);
    }
    public function sizeChartDelete(Request $request)
    {
        $sizeChartId = $request->input('id');

        $sizeChart = SizeChart::find($sizeChartId);

        if (!$sizeChart) {
            return response()->json([
                'error' => 'Size chart not found',
            ], 404);
        }

        $sizeChart->delete();

        return response()->json([
            'message' => 'Size chart deleted successfully',
        ], 200);
    }
    public function publishStatusChart(Request $request)
    {
        $sizeChartId = $request->input('id');

        $sizeChart = SizeChart::find($sizeChartId);

        if (!$sizeChart) {
            return response()->json([
                'error' => 'Size chart not found',
            ], 404);
        }

        $sizeChart->status = 1;
        $sizeChart->save();

        // Return a success response
        return response()->json([
            'message' => 'Size chart published successfully',
        ], 200);
    }
}

