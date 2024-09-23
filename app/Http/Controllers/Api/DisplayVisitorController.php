<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Visitor;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DisplayVisitorController extends Controller
{
    public function displayVisitor(Request $request)
    {

        $options = $this->getWidgetOptions();

        $visitorCount = $this->getVisitorCount($options['Visitor Duration'], $request);

        $visitorData = $this->assignWidgetOptions($options);

        $visitorData['visitorCount'] = $visitorCount;

        return response()->json($visitorData);
    }
    private function getWidgetOptions()
    {
        return DB::table('widget_options')->whereIn('option_name', [
            'Visitor type',
            'Background Color',
            'Gradient Start',
            'Gradient End',
            'Font Color',
            'Count Color',
            'Icon Color',
            'Border Color',
            'Font Size',
            'Text Padding',
            'Border Size',
            'Border Radius',
            'Position',
            'Outside Top',
            'Outside Bottom',
            'Gradient Angle',
            'Color Option',
            'Font Family',
            'Align Visitor',
            'Visitor Icon',
            'Visitor Duration',
            'Count Visitor',
            'Button Class',
        ])->pluck('option_value', 'option_name');
    }
    private function assignWidgetOptions($options)
    {
        return [
            'visitor_type' => $options['Visitor Type'],
            'background_color' => $options['Background Color'],
            'gradient_start' => $options['Gradient Start'],
            'gradient_end' => $options['Gradient End'],
            'font_color' => $options['Font Color'],
            'count_color' => $options['Count Color'],
            'icon_color' => $options['Icon Color'],
            'border_color' => $options['Border Color'],
            'font_size' => $options['Font Size'],
            'text_padding' => $options['Text Padding'],
            'border_size' => $options['Border Size'],
            'border_radius' => $options['Border Radius'],
            'position' => $options['Position'],
            'outside_top' => $options['Outside Top'],
            'outside_bottom' => $options['Outside Bottom'],
            'gradient_angle' => $options['Gradient Angle'],
            'color_option' => $options['Color Option'],
            'font_family' => $options['Font Family'],
            'align_visitor' => $options['Align Visitor'],
            'visitor_icon' => $options['Visitor Icon'],
            'count_visitor' => $options['Count Visitor'],
            'buttonclass' => $options['Button Class'],
        ];
    }


    private function getVisitorCount($durationOption, $request)
    {
        $minutes = $this->getDurationInMinutes($durationOption);

        // Count unique visitors within the duration
        $query = Visitor::where('shop_name', $request->input('shop_name'))
            ->where('product_id', $request->input('product_id'))
            ->where('created_at', '>', Carbon::now()->subMinutes($minutes))
            ->count();

        return $query;
    }

    private function getDurationInMinutes($durationOption)
    {
        // Convert duration option to minutes
        $map = [
            '5 minutes' => 5,
            '1 Hour' => 60,
            '2 Hours' => 2 * 60,
            '3 Hours' => 3 * 60,
            '6 Hours' => 6 * 60,
            '24 Hours (1 Day)' => 24 * 60,
            '48 Hours (2 Day)' => 48 * 60,
            '120 Hours (5 Day)' => 120 * 60,
            '240 Hours (10 Day)' => 240 * 60,
            '720 Hours (30 Day)' => 720 * 60
        ];
        // If the selected duration option is not present in the map, default to 5 minutes
        return $map[$durationOption] ?? 5;
    }

}

