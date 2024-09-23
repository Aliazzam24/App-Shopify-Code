<?php

namespace App\Services;

use App\Models\Visitor;
use Carbon\Carbon;

class VisitorService
{
    protected $visitor;

    public function __construct(Visitor $visitor)
    {
        $this->visitor = $visitor;
    }

    public function countForLastMinutes($minutes)
    {
        $startTime = Carbon::now()->subMinutes($minutes);
        return $this->visitor->where('created_at', '>=', $startTime)->count();
    }
}


