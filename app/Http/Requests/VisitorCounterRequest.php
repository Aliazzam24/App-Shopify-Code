<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VisitorCounterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'visitor_type' => 'required|string',
            'visitor_number' => 'required|numeric',
            'background_color' => 'required|string',
            'gradient_start' => 'required|string',
            'gradient_end' => 'required|string',
            'font_color' => 'required|string',
            'count_color' => 'required|string',
            'icon_color' => 'required|string',
            'border_color' => 'required|string',

            'font_size' => 'required|numeric',
            'text_padding' => 'required|numeric',
            'border_size' => 'required|numeric',
            'border_radius' => 'required|numeric',
            'outside_top' => 'required|numeric',
            'outside_bottom' => 'required|numeric',
            'gradient_angle' => 'required|numeric',
            'color_option' => 'required|string',

            'font_family' => 'required|string',
            'align_visitor' => 'required|string',

            'counter_based' => 'required|string',
            'count_visitor' => 'required|string',
            'visitor_duration' => 'required|string',
            'visitor_icon' => 'required|string',
        ];
    }
}
