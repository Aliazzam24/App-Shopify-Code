<?php
namespace App\Http\Controllers;

use App\Http\Requests\VisitorCounterRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class VisitorCounterController extends Controller
{
    private const WIDGET_OPTIONS = [
        'Visitor Type', 'Visitor Number', 'Background Color', 'Gradient Start', 'Gradient End',
        'Font Color', 'Count Color', 'Icon Color', 'Border Color', 'Font Size', 'Text Padding',
        'Border Size', 'Border Radius', 'Outside Top', 'Outside Bottom', 'Gradient Angle',
        'Color Option', 'Font Family', 'Align Visitor', 'Counter Based', 'Count Visitor',
        'Visitor Duration', 'Visitor Icon',
    ];

    public function index()
    {
        $shop = Session::get('shop_name');
        Session::put('shop_name', 'apexstorecounter.myshopify.com');

        $widgetOptions = DB::table('widget_options')
            ->where('shop_name', $shop)
            ->whereIn('option_name', self::WIDGET_OPTIONS)
            ->get()
            ->keyBy('option_name');

        return Inertia::render('VisitorCounter', compact( 'widgetOptions'));
    }

    public function update(VisitorCounterRequest $request)
    {
        $shop = Session::get('shop_name');
        $validatedData = $request->validated();
        $this->updateWidgetOptions($validatedData, $shop);

        return response()->json([
            'message' => 'Widget options updated successfully'
        ], 200);
    }

    private function updateWidgetOptions($validatedData, $shop)
    {
        foreach (self::WIDGET_OPTIONS as $option) {
            DB::table('widget_options')
                ->where('shop_name', $shop)
                ->where('option_name', $option)
                ->update(['option_value' => $validatedData[strtolower(str_replace(' ', '_', $option))]]);
        }
    }


}
