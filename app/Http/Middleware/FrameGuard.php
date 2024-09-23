<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FrameGuard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        // Get the response after all other middlewares have run
        $response = $next($request);

        // Set the Content-Security-Policy header to restrict domains
        $response->header('Content-Security-Policy', "frame-ancestors 'https://example.myshopify.com' 'https://admin.shopify.com'");

        // Send the response back to the user
        return $response;
    }
}
