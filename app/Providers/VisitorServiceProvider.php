<?php

namespace App\Providers;

use App\Models\Visitor;
use Illuminate\Support\ServiceProvider;

class VisitorServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register()
    {
        $this->app->singleton('visitor', function ($app) {
            return new class {
                public function countForLastMinutes(int $minutes) {
                    $timeAgo = now()->subMinutes($minutes);

                    return Visitor::where('visited_at', '>', $timeAgo)->count();
                }
            };
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
