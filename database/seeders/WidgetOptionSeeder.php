<?php
namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WidgetOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        DB::table('widget_options')->insert([

            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'visitor type', 'option_name' => 'Visitor Type', 'option_value' => '{{visitor_number}} Visitors are browsing our store.', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'visitor number', 'option_name' => 'Visitor Number', 'option_value' => '28', 'created_at' => $now, 'updated_at' => $now],

            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'background color', 'option_name' => 'Background Color', 'option_value' => '#FBF7E7', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'gradient start', 'option_name' => 'Gradient Start', 'option_value' => '#DDDDDD', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'gradient end', 'option_name' => 'Gradient End', 'option_value' => '#FFFFFF', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'font color', 'option_name' => 'Font Color', 'option_value' => '#000000', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'count color', 'option_name' => 'Count Color', 'option_value' => '#000000', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'icon color', 'option_name' => 'Icon Color', 'option_value' => '#000000', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'border color', 'option_name' => 'Border Color', 'option_value' => '#000000', 'created_at' => $now, 'updated_at' => $now],

            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'font size', 'option_name' => 'Font Size', 'option_value' => '14', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'text padding', 'option_name' => 'Text Padding', 'option_value' => '8', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'border size', 'option_name' => 'Border Size', 'option_value' => '0', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'border radius', 'option_name' => 'Border Radius', 'option_value' => '4', 'created_at' => $now, 'updated_at' => $now],

            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'position', 'option_name' => 'Position', 'option_value' => 'top', 'created_at' => $now, 'updated_at' => $now],


            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'outside top', 'option_name' => 'Outside Top', 'option_value' => '20', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'outside bottom', 'option_name' => 'Outside Bottom', 'option_value' => '20', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'gradient angle', 'option_name' => 'Gradient Angle', 'option_value' => '32', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'color option', 'option_name' => 'Color Option', 'option_value' => 'gradient', 'created_at' => $now, 'updated_at' => $now],

            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'Align Visitor', 'option_name' => 'Align Visitor', 'option_value' => 'Center', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'font family', 'option_name' => 'Font Family', 'option_value' => 'Inherit', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'counter based', 'option_name' => 'Counter Based', 'option_value' => 'Product', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'count visitor', 'option_name' => 'Count Visitor', 'option_value' => 'Live Visitors', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'visitor duration', 'option_name' => 'Visitor Duration', 'option_value' => '5 minutes', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'visitor icon', 'option_name' => 'Visitor Icon', 'option_value' => 'fa-eye', 'created_at' => $now, 'updated_at' => $now],
            ['shop_name' => 'apexstorecounter.myshopify.com', 'widget_type' => 'button class', 'option_name' => 'Button Class', 'option_value' => 'btn-primary','created_at' => $now, 'updated_at' => $now],

        ]);
    }
}
