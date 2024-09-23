<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RecordVisitor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $shopName = $request->input('shop_name');
        $productId = $request->input('product_id');
//      $geoip = $request->get('geoip');

        if ($shopName && $productId) {
            // Register the visit
            if (!Visitor::where([
                'shop_name' => $shopName,
                'product_id' => $productId,
//                'ip_address' => $geoip['ip_address'], //retrieve the ip_address from the geoip object.
//                'country' => $geoip['country'], //retrieve the country from the geoip object.
            ])->exists()) {
                Visitor::create([
                    'shop_name' => $shopName,
                    'product_id' => $productId,
//                    'ip_address' => $geoip['ip_address'], //add the ip_address to the Visitor's record.
//                    'country' => $geoip['country'], //add the country to the Visitor's record.
                ]);
            }
        }
        return $next($request);
    }
}


//// Extract GeoIP data from the request
////        $geoipData = $request->input('geoip', []);
////
////        // Safely extract IPv4 and country_name
////        $ipv4 = $geoipData['IPv4'] ?? 'unknown';
////        $countryName = $geoipData['country_name'] ?? 'unknown';
//
//// Prepare visitor data
//$visitorData = [
//    'shop_name' => $request->input('shop_name', 'unknown'), // Default to 'unknown' if not provided
//    'product_id' => $request->input('product_id', null),
////            'ip_address' => $ipv4,
////            'country' => $countryName,
//];
//
//// Store the visitor data in the database
//Visitor::create($visitorData);
