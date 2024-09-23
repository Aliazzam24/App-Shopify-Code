<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use App\Http\Controllers\VisitorCounterController;
use App\Http\Controllers\SizeChartController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});


Route::get('/polaris',[SizeChartController::class,'polaris'])->name('polaris');


//Visitor Counter
Route::get('app/visitor_counter',[VisitorCounterController::class,'index'])->name('visitor.counter');
Route::post('/visitor/update', [VisitorCounterController::class, 'update'])->name('visitor.update');

//Size Chart
Route::get('app/size_chart/list',[SizeChartController::class,'SizeChartList'])->name('app.size.chart.list');
Route::get('app/size_chart/create',[SizeChartController::class,'createSizeChart'])->name('size-charts.create');
Route::get('app/size_chart/edit/{id}',[SizeChartController::class,'editSizeChart'])->name('size-charts.edit');;

Route::post('/create-size-charts', [SizeChartController::class, 'create'])->name('create.size-charts');
Route::put('/update-size-charts/{id}', [SizeChartController::class, 'update'])->name('update.size-charts');
Route::delete('delete/size_chart/{id}',[SizeChartController::class,'DeleteSizeChart'])->name('delete.size.chart');

Route::delete('delete/selected_size_charts', [SizeChartController::class, 'deleteSelectedSizeCharts']);
//Route::delete('delete/selected_size_charts', [SizeChartController::class, 'DeleteSelectedCharts'])->name('delete.selected.size.charts');
Route::post('deactivate/selected_size_charts', [SizeChartController::class, 'deactivateSelectedCharts']);

// Route to duplicate a size chart
//Route::post('duplicate/size_chart/{id}', [SizeChartController::class, 'DuplicateSizeChart'])->name('duplicate.size.chart');
Route::post('duplicate/size_chart/{id}', [SizeChartController::class, 'DuplicateSizeChart'])->name('duplicate.size.chart');

Route::put('size/chart/duplicate/edit', [SizeChartController::class, 'duplicateEditPage']);


Route::delete('size/chart/delete',[SizeChartController::class,'sizeChartDelete']);
Route::post('publish/status/chart',[SizeChartController::class,'publishStatusChart']);


//Route::post('/delete-selected-size-charts', [SizeChartController::class, 'deleteSelectedSizeCharts']);
