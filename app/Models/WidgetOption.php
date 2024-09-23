<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WidgetOption extends Model
{
    protected $fillable = ['shop','widget_type','option_name','option_value'];
    use HasFactory;
}
