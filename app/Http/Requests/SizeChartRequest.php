<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SizeChartRequest extends FormRequest
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
            'chart_icon' => 'required|string',
            'chart_border' => 'required|string',
            'chart_top' => 'required|integer',
            'chart_bottom' => 'required|integer',
            'chart_text' => 'required|string',

            'chart_background_color' => 'required|string',
            'chart_text_color' => 'required|string',

            'chart_border_color' => 'required|string',
            'chart_row_background_color' => 'required|string',
            'chart_border_thickness' => 'required|string',

        ];
    }

}
