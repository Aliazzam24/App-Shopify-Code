<?php

namespace App\Http\Middleware;

use App\Models\VisitorCounter;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class SetShopSession
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
//        // Assuming you have some logic to retrieve the shop based on the request
//        $shop = $this->getShopFromRequest($request);
//
//        if ($shop) {
//            Session::put('shop', $shop);
//        }

        return $next($request);
    }

//    protected function getShopFromRequest($request)
//    {
//        // Implement your logic to retrieve the shop based on the request
//        // For example, you could use the shop domain or some identifier in the request
//        return VisitorCounter::where('shop_id', $request->get('shop_id'))->first();
//    }
}
