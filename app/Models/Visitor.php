<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    use HasFactory;
    protected $fillable = ['shop_name','product_id','ip_address','country'];


    public static function deleteExpiredVisits($minutes)
    {
        return self::where('created_at', '<=', Carbon::now()->subMinutes($minutes))
            ->delete();
    }

}
