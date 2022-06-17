<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Shop;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::All();
        return view('products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($shopId)
    {
        return view('products.create', compact('shopId'));
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $shop = Shop::find($request['shopId']);
        $route = "shopProducts/" . $shop->id;

        $shop->product()->create([
            'name' => str_replace(' ', '_', $request['name']),
            'description' => str_replace(' ', '_', $request['description']),
            'price' => $request['price'],
            'picture' => $request['picture'],
        ]);
        
        return redirect($route);
        
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return view('products.show', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return view('products.edit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {       
        $route = "shopProducts/" . $product->shop->id;
        $product->update([
            'name' => str_replace(' ', '_', $request['name']),
            'description' => str_replace(' ', '_', $request['description']),
            'price' => $request['price'],
            'picture' => $request['picture'],
        ]);

        return redirect($route);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {   
        $route = "shopProducts/" . $product->shop->id;
        product::destroy($product-> id);

        return redirect($route);
        
        //
    }
}