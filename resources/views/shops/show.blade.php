@extends('layouts.app')

@section('content')

    <div id="banner" data={{ $shop }} ></div>
    <div class="py-5 container mx-auto md:pl-[8rem] md:pr-[8rem]">
        <div id="products" products={{ $shop->product }} categories={{ $shop->category }} ></div>
    </div> 

@endsection