<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitorCounter extends Model
{
    protected $fillable = ['product_id','shop_name','ip_address','real_number','visitor_number','visitor_type','status'];
    use HasFactory;

}
