@extends('layouts.app')

@section('content')

<div class="py-4 container">
    <div id="product-show" product={{ $product }} shop={{ $product->shop }} user={{ $product->shop->user }}> </div>
</div>
@endsection